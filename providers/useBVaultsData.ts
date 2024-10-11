import { BVaultConfig } from '@/config/bvaults'
import { DECIMAL, YEAR_SECONDS } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { fmtPercent, getBigint, proxyGetDef, retry } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import _ from 'lodash'
import { useEffect, useMemo } from 'react'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { BoundStoreType, useBoundStore, useStoreShallow } from './useBoundStore'
import { BVaultEpochDTO } from './sliceBVaultsStore'

export function useResetBVaultsData() {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  useEffect(() => {
    // useBoundStore.setState({ sliceBVaultsStore: { ...useBoundStore.getState().sliceBVaultsStore, bvaults: {}, bvaultsCurrentEpoch: {}, epoches: {}, epochesRedeemPool: {} } })
  }, [chainId])
  useEffect(() => {
    useBoundStore.getState().sliceUserBVaults.reset()
  }, [address])
}

export function useBVault(vault: Address) {
  const bvd = useStoreShallow(
    (s) =>
      s.sliceBVaultsStore.bvaults[vault] ||
      proxyGetDef<Exclude<BoundStoreType['sliceBVaultsStore']['bvaults'][Address], undefined>>({ current: proxyGetDef<BVaultEpochDTO>({}, 0n) }, 0n),
  )
  return bvd
}

export function useBVaultEpoches(vault: Address) {
  const bvd = useBVault(vault)
  const selector = useMemo(() => {
    return (s: BoundStoreType) => {
      // console.info('BVAultEpochesChanged')
      if (bvd.epochCount <= 0n) return []
      const ids = _.range(1, parseInt((bvd.epochCount + 1n).toString())).reverse()
      const epochesMap = s.sliceBVaultsStore.epoches
      return ids.map((eppchId) => epochesMap[`${vault}_${eppchId}`]).filter((item) => item != null)
    }
  }, [bvd])
  return useStoreShallow(selector)
}

export function useUserBVaultEpoches(vault: Address) {
  return useStoreShallow((s) => s.sliceUserBVaults.epoches[vault] || [])
}

export function useEpochesData(vault: Address) {
  const epochs = useBVaultEpoches(vault)
  const userEpochs = useUserBVaultEpoches(vault)
  return useMemo(() => {
    const userEpochsMap = userEpochs.reduce<{ [k: string]: (typeof userEpochs)[number] }>((map, item) => ({ ...map, [item.epochId.toString()]: item }), {})
    return epochs.map((ep) => proxyGetDef({ ...ep!, ...(userEpochsMap[ep!.epochId.toString()] || { bribes: [] }) }, 0n))
  }, [epochs, userEpochs])
}

export function useCalcClaimable(vault: Address) {
  const epoches = useEpochesData(vault)
  return useMemo(() => {
    const fitlerEpoches = epoches.filter((item) => item.claimableAssetBalance && item.settled)
    return {
      ids: fitlerEpoches.map((item) => item.epochId),
      claimable: fitlerEpoches.reduce((sum, item) => sum + item.claimableAssetBalance, 0n),
    }
  }, [epoches])
}

export function calcBVaultBoost(vault: Address) {
  const s = useBoundStore.getState()
  const bvd = s.sliceBVaultsStore.bvaults[vault]
  const vualtYTokenBalance = bvd?.current.vaultYTokenBalance || 0n
  const Y = bvd?.Y || 0n
  const ytAssetPriceBnReverse = Y > 0n ? (vualtYTokenBalance * DECIMAL) / Y : 0n
  // const ytAssetPriceBn = vualtYTokenBalance > 0n ? (bvd.Y * DECIMAL) / vualtYTokenBalance : 0n
  const yTokenAmountForSwapYT = bvd?.current.yTokenAmountForSwapYT || 0n
  const lockedAssetTotal = bvd?.lockedAssetTotal || 0n
  const oneYTYieldOfAsset = yTokenAmountForSwapYT > 0n ? (lockedAssetTotal * DECIMAL) / yTokenAmountForSwapYT : 0n
  // bvd?.current.
  // const boost = bvd && bvd.current.assetTotalSwapAmount > 0n ? (bvd.lockedAssetTotal * 100n) / bvd.current.assetTotalSwapAmount : 100000n
  
  console.info('calcBootst:', displayBalance(ytAssetPriceBnReverse), displayBalance(oneYTYieldOfAsset))
  const boost = (oneYTYieldOfAsset * ytAssetPriceBnReverse) / DECIMAL
  return boost
}
export function useBVaultBoost(vault: Address): [string, bigint] {
  const boost = useStoreShallow(() => calcBVaultBoost(vault))
  return [displayBalance(boost, 0), boost]
}

export function calcBVaultPTApy(vault: Address) {
  const s = useBoundStore.getState()
  const bvd = s.sliceBVaultsStore.bvaults[vault]
  const pTokenSynthetic = getBigint(s.sliceBVaultsStore.yTokenSythetic, [vault])
  const apy = bvd && bvd.current.assetTotalSwapAmount && pTokenSynthetic ? (bvd.current.assetTotalSwapAmount * YEAR_SECONDS * BigInt(1e10)) / pTokenSynthetic : 0n
  return apy
}
export function useBVaultApy(vault: Address): [string, bigint] {
  const apy = useStoreShallow(() => calcBVaultPTApy(vault))
  return [fmtPercent(apy, 10), apy]
}

export function useUpBVaultForUserAction(bvc: BVaultConfig) {
  const { address } = useAccount()
  return () => {
    retry(
      async () => {
        if (!address) return
        await Promise.all([
          useBoundStore.getState().sliceTokenStore.updateTokensBalance([bvc.asset, bvc.pToken], address),
          useBoundStore.getState().sliceTokenStore.updateTokenTotalSupply([bvc.asset, bvc.pToken]),
          useBoundStore.getState().sliceBVaultsStore.updateBvaults([bvc]),
          useBoundStore.getState().sliceBVaultsStore.updateYTokenSythetic([bvc]),
        ])

        const bvd = useBoundStore.getState().sliceBVaultsStore.bvaults[bvc.vault]!
        await useBoundStore.getState().sliceBVaultsStore.updateEpoches(bvc, bvd.epochCount > 1n ? [bvd.epochCount, bvd.epochCount - 1n] : [bvd.epochCount])

        const epoches: BVaultEpochDTO[] = []
        for (let epocheId = parseInt(bvd.epochCount.toString()); epocheId > 0; epocheId--) {
          const epoch = useBoundStore.getState().sliceBVaultsStore.epoches[`${bvc.vault}_${epocheId}`]!
          epoches.push(epoch)
        }
        console.info('onUserAction:epoches', epoches)
        await useBoundStore.getState().sliceUserBVaults.updateEpoches(bvc, address, epoches)
      },
      3,
      1000,
    )
  }
}
