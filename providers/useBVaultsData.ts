import { BVaultConfig } from '@/config/bvaults'
import { YEAR_SECONDS } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { fmtPercent, proxyGetDef, retry } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import _ from 'lodash'
import { useEffect, useMemo } from 'react'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { BoundStoreType, useBoundStore, useStoreShallow } from './useBoundStore'

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
  const bvd = useStoreShallow((s) => s.sliceBVaultsStore.bvaults[vault] || proxyGetDef<Exclude<BoundStoreType['sliceBVaultsStore']['bvaults'][Address], undefined>>({} as any, 0n))
  return bvd
}
export function useBVaultCurrentEpoch(vault: Address) {
  return useStoreShallow(
    (s) => s.sliceBVaultsStore.bvaultsCurrentEpoch[vault] || proxyGetDef<Exclude<BoundStoreType['sliceBVaultsStore']['bvaultsCurrentEpoch'][Address], undefined>>({} as any, 0n),
  )
}

useBoundStore.subscribe(s => s.sliceBVaultsStore.bvaults)
export function useBVaultEpoches(vault: Address) {
  const bvd = useBVault(vault)
  const selector = useMemo(() => {
    return (s: BoundStoreType) => {
      // console.info('BVAultEpochesChanged')
      if (bvd.epochCount <= 0n) return []
      const ids = _.range(1, parseInt((bvd.epochCount + 1n).toString())).reverse()
      const epochesMap = s.sliceBVaultsStore.epoches
      const epochesRPMap = s.sliceBVaultsStore.epochesRedeemPool
      return ids
        .map((eppchId) => {
          const epoch = epochesMap[`${vault}_${eppchId}`]
          const epochRP = epochesRPMap[`${vault}_${eppchId}`]
          if (epoch && epochRP) return proxyGetDef({ ...epoch, ...epochRP }, 0n)
          return null
        })
        .filter((item) => item != null)
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

export function useBVaultBoost(vault: Address): [string, bigint] {
  const bvd = useStoreShallow((s) => s.sliceBVaultsStore.bvaults[vault])
  const bce = useStoreShallow((s) => s.sliceBVaultsStore.bvaultsCurrentEpoch[vault])
  const boost = bvd && bce && bce.assetAmountForSwapYT > 0n ? (bvd.lockedAssetTotal * 100n) / bce.assetAmountForSwapYT : 100000n
  return [displayBalance(boost, 0, 2), boost]
}

export function useBVaultApy(vault: Address): [string, bigint] {
  const bce = useStoreShallow((s) => s.sliceBVaultsStore.bvaultsCurrentEpoch[vault])
  const apy = bce && bce.pTokenSynthetic > 0n ? (bce.assetAmountForSwapYT * YEAR_SECONDS * BigInt(1e10)) / bce.pTokenSynthetic : 0n
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
        ])

        const bvd = useBoundStore.getState().sliceBVaultsStore.bvaults[bvc.vault]!

        await Promise.all([
          await useBoundStore.getState().sliceBVaultsStore.updateBvaultsCurrentEpoch({ [bvc.vault]: bvd }),
          await useBoundStore.getState().sliceBVaultsStore.updateEpoches(bvc, bvd.epochCount > 1n ? [bvd.epochCount, bvd.epochCount - 1n] : [bvd.epochCount]),
        ])
        await useBoundStore.getState().sliceBVaultsStore.updateEpochesRedeemPool(bvc)
        const epoches: { epochId: bigint; redeemPool: Address; settled: boolean }[] = []
        for (let epocheId = parseInt(bvd.epochCount.toString()); epocheId > 0; epocheId--) {
          const epoch = useBoundStore.getState().sliceBVaultsStore.epoches[`${bvc.vault}_${epocheId}`]!
          const settled = useBoundStore.getState().sliceBVaultsStore.epochesRedeemPool[`${bvc.vault}_${epocheId}`]!.settled
          epoches.push({ epochId: BigInt(epocheId), redeemPool: epoch.redeemPool, settled })
        }
        console.info('onUserAction:epoches', epoches)
        await useBoundStore.getState().sliceUserBVaults.updateEpoches(bvc, address, epoches)
      },
      3,
      1000,
    )
  }
}
