import { abiBVault, abiRedeemPool } from '@/config/abi'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { apiBatchConfig } from '@/config/network'
import { YEAR_SECONDS } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useMemoOfChainId } from '@/hooks/useMemoOfChain'
import { useWandTimestamp } from '@/hooks/useWand'
import { useWrapPublicClient } from '@/hooks/useWrapPublicClient'
import { divMultipOtherBn, fmtPercent, proxyGetDef } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { useEffect, useMemo } from 'react'
import { Address, erc20Abi, stringToHex, zeroAddress } from 'viem'
import { useAccount, usePublicClient } from 'wagmi'
import { create } from 'zustand'

export type BribeInfo = {
  totalRewards: bigint
  bribeSymbol: string
  epochId: bigint
  bribeToken: Address
  bribeAmount: bigint
}
export type EpochType = {
  epochId: bigint
  startTime: bigint
  duration: bigint
  redeemPool: Address
  settled: boolean
  claimableAssetBalance: bigint
  redeemingBalance: bigint
  yTokenTotal: bigint
  yTokenTotalSupplySynthetic: bigint
  bribes: BribeInfo[]
  userBalanceYToken: bigint
  userBalanceYTokenSyntyetic: bigint
  vaultYTokenBalance: bigint
}
export type BVaultDataType = {
  epoches: EpochType[]
  pTokenTotal: bigint
  lockedAssetTotal: bigint
  vault: Address
  userBalanceAssset: bigint
  userBalancePToken: bigint
  assetAmountForSwapYT: bigint
  yTokenAmountForSwapYT: bigint
  f2: bigint
  Y: bigint
}

export function defBVaultData(k: string) {
  return proxyGetDef<BVaultDataType>(
    {
      epoches: [],
      pTokenTotal: 0n,
      vault: k as Address,
      userBalanceAssset: 0n,
      userBalancePToken: 0n,
      lockedAssetTotal: 0n,
      assetAmountForSwapYT: 0n,
      yTokenAmountForSwapYT: 0n,
      f2: 0n,
      Y: 0n,
    },
    0n,
  )
}
export function defBVaultsData() {
  return proxyGetDef({}, (k: string) => defBVaultData(k))
}

export const useBVaultsDataStore = create<{ data: { [k: Address]: BVaultDataType }; update: (data: { [k: Address]: BVaultDataType }) => void }>((set) => ({
  data: {},
  update: (data) => {
    set({ data })
  },
    
}))




export function useBVaultsData() {
  const chainId = useCurrentChainId()
  const time = useWandTimestamp((s) => s.time)
  const data = useMemoOfChainId<{ [k: Address]: BVaultDataType }>(defBVaultsData)
  const bvcs = BVAULTS_CONFIG[chainId]
  const pc = useWrapPublicClient()
  const { address } = useAccount()
  const { data: datas, refetch } = useQuery<BVaultDataType[]>({
    queryFn: async () => {
      console.info('pc:', !!pc)
      if (!pc) return []
      const bvcsi = await Promise.all(
        bvcs.map((vc) => pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'epochIdCount' }).then((idCount) => ({ ...vc, epochCount: idCount }))),
      )
      // 获取RedeemPool的数据。
      const getRedeemPoolData = async (redeemPool: Address) => {
        const settled = await pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'settled' })
        const redeemingBalance =
          !settled && address ? await pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'userRedeemingBalance', args: [address] }) : 0n
        const claimableAssetBalance = address ? await pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'earnedAssetAmount', args: [address] }) : 0n
        return { settled, claimableAssetBalance, redeemingBalance }
      }

      const getBribe = async (vc: (typeof bvcsi)[number], epochId: bigint, bribe: Pick<BribeInfo, 'bribeAmount' | 'epochId' | 'bribeToken'>) => {
        const totalRewards = await pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'bribeTotalAmount', args: [epochId, bribe.bribeToken] })
        const bribeSymbol = await pc.readContract({ abi: erc20Abi, address: bribe.bribeToken, functionName: 'symbol' })
        return { ...bribe, totalRewards, bribeSymbol }
      }
      // getBribes
      const getBribes = async (vc: (typeof bvcsi)[number], epochId: bigint) => {
        const bribes = address ? await pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'calcBribes', args: [epochId, address] }) : []
        return Promise.all(bribes.map((bribe) => getBribe(vc, epochId, bribe)))
      }
      // 获取每个Epoch的数据
      const getEpochData = (vc: (typeof bvcsi)[number], i: number): Promise<EpochType> =>
        Promise.all([
          // epoch info
          pc
            .readContract({ abi: abiBVault, address: vc.vault, functionName: 'epochInfoById', args: [vc.epochCount - BigInt(i)] })
            .then((epoch) => getRedeemPoolData(epoch.redeemPool).then((redeemPoolData) => ({ ...epoch, ...redeemPoolData }))),
          // yTokenTotalSupply
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenTotalSupply', args: [vc.epochCount - BigInt(i)] }),
          // yTokenTotalSupplySynthetic
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenTotalSupplySynthetic', args: [vc.epochCount - BigInt(i)] }),
          // bribes
          getBribes(vc, vc.epochCount - BigInt(i)),
          // balance yToken
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenUserBalance', args: [vc.epochCount - BigInt(i), address || zeroAddress] }),
          // balance yToken
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenUserBalanceSynthetic', args: [vc.epochCount - BigInt(i), address || zeroAddress] }),
          // balance yToken
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenUserBalance', args: [vc.epochCount - BigInt(i), vc.vault] }),
        ]).then(([epochInfo, yTokenTotal, yTokenTotalSupplySynthetic, bribes, userBalanceYToken, userBalanceYTokenSyntyetic, vaultYTokenBalance]) => ({
          ...epochInfo,
          yTokenTotal, // includes last epoch
          yTokenTotalSupplySynthetic, // includes last epoch
          bribes: bribes.map((item) => ({ ...item })),
          userBalanceYToken,
          userBalanceYTokenSyntyetic,
          vaultYTokenBalance, // includes last epoch
        }))
      // 获取所有Epoches的数据
      const getEpoches = (vc: (typeof bvcsi)[number]) => {
        console.info('getEpoches:', vc.assetSymbol, vc.epochCount)
        return vc.epochCount > 0n ? Promise.all(new Array(parseInt(vc.epochCount.toString())).fill(0).map((_v, i) => getEpochData(vc, i))) : Promise.resolve([])
      }
      // 获取每个Vault的数据
      const getVaultData = (vc: (typeof bvcsi)[number]): Promise<BVaultDataType> =>
        Promise.all([
          getEpoches(vc),
          // pTokenTotal
          pc.readContract({ abi: erc20Abi, address: vc.pToken, functionName: 'totalSupply' }),
          // balance asset
          !address ? Promise.resolve(0n) : pc.readContract({ abi: erc20Abi, address: vc.asset, functionName: 'balanceOf', args: [address] }),
          // balance pToken
          !address ? Promise.resolve(0n) : pc.readContract({ abi: erc20Abi, address: vc.pToken, functionName: 'balanceOf', args: [address || zeroAddress] }),
          // lockedAssetTotal,
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'assetBalance' }),
          // fees f2
          pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'paramValue', args: [stringToHex('f2', { size: 32 })] }),
          // Y  虚拟交易对的asset amount
          vc.epochCount && vc.vault !== '0xF778D2B9E0238D385008e916D7245F51959Ba279'
            ? pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'Y' })
            : Promise.resolve(0n),
        ]).then(([epoches, pTokenTotal, userBalanceAssset, userBalancePToken, lockedAssetTotal, f2, Y]) => ({
          epoches,
          pTokenTotal,
          vault: vc.vault,
          userBalanceAssset,
          userBalancePToken,
          lockedAssetTotal,
          f2,
          Y,
          // asset amount
          assetAmountForSwapYT: divMultipOtherBn(pTokenTotal - (epoches[0]?.yTokenTotal || 0n), f2),
          yTokenAmountForSwapYT: (epoches[0]?.yTokenTotal || 0n) - (epoches[0]?.vaultYTokenBalance || 0n),
        }))
      const res = await Promise.all(bvcsi.map(getVaultData))
      console.info('bVaultsData:', res)
      return res
    },
    queryKey: ['getBVautsData', pc],
    retry: true,
  })
  useEffect(() => {
    refetch()
  }, [time, bvcs, chainId, address])
  datas?.forEach((vc) => {
    if (!Object.hasOwn(data, vc.vault)) data[vc.vault] = defBVaultData(vc.vault)
    const itemData = datas?.find((item) => item.vault == vc.vault)
    if (itemData) data[vc.vault] = itemData
  })
  return data
}

export function useCalcClaimable(bVaultData: BVaultDataType) {
  return useMemo(() => {
    const epoches = bVaultData.epoches.filter((item) => item.claimableAssetBalance && item.settled)
    return {
      ids: epoches.map((item) => item.epochId),
      claimable: epoches.reduce((sum, item) => sum + item.claimableAssetBalance, 0n),
    }
  }, [bVaultData.epoches])
}

export function useBVaultBoost(bvd: BVaultDataType): [string, bigint] {
  const boost = bvd.assetAmountForSwapYT > 0n ? (bvd.lockedAssetTotal * 100n) / bvd.assetAmountForSwapYT : 100000n
  return [displayBalance(boost, 0, 2), boost]
}

export function useBVaultApy(bvd: BVaultDataType): [string, bigint] {
  const epoch = bvd.epoches[0]
  const yTokenTotalSupplySynthetic = epoch?.yTokenTotalSupplySynthetic || 0n
  const apy = yTokenTotalSupplySynthetic > 0n ? (bvd.assetAmountForSwapYT * YEAR_SECONDS * BigInt(1e10)) / yTokenTotalSupplySynthetic : 0n
  return [fmtPercent(apy, 10), apy]
}
