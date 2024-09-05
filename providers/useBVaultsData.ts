import { abiBVault, abiRedeemPool } from '@/config/abi'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useMemoOfChainId } from '@/hooks/useMemoOfChain'
import { useWandTimestamp } from '@/hooks/useWand'
import { proxyGetDef } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import {
  Address,
  zeroAddress,
  MulticallContracts,
  Narrow,
  ContractFunctionParameters,
  AbiStateMutability,
  erc20Abi,
} from 'viem'
import { useAccount, usePublicClient } from 'wagmi'

export type BribeInfo = {
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
  pTokenTotal: bigint
  yTokenTotal: bigint

  bribes: BribeInfo[]

  balanceAssset: bigint
  balancePToken: bigint
  balanceYToken: bigint
}
export type BVaultDataType = {
  epoches: EpochType[]
  pTokenTotal: bigint
  vault: Address
}

type ReadContractsItem = MulticallContracts<
  Narrow<ContractFunctionParameters[]>,
  { mutability: AbiStateMutability } & {
    optional?: boolean
    properties?: Record<string, any>
  }
>

export function defBVaultsData() {
  return proxyGetDef({}, (k: string) =>
    proxyGetDef<BVaultDataType>({ epoches: [], pTokenTotal: 0n, vault: k as Address }, 0n),
  )
}

export function useBVaultsData() {
  const chainId = useCurrentChainId()
  const { time } = useWandTimestamp()
  const data = useMemoOfChainId<{ [k: Address]: BVaultDataType }>(defBVaultsData)
  const bvcs = BVAULTS_CONFIG[chainId]
  const pc = usePublicClient({ chainId })
  const { address } = useAccount()

  const { data: datas } = useQuery({
    queryFn: async () => {
      if (!pc) return
      const bvcsi = (
        await Promise.all(
          bvcs.map((vc) =>
            pc
              .readContract({ abi: abiBVault, address: vc.vault, functionName: 'epochIdCount' })
              .then((idCount) => ({ ...vc, epochCount: idCount })),
          ),
        )
      ).filter((item) => item.epochCount > 0n)

      const getRedeemPoolData = (redeemPool: Address) =>
        Promise.all([
          pc.readContract({
            abi: abiRedeemPool,
            address: redeemPool,
            functionName: 'settled',
          }),
          address
            ? pc.readContract({
                abi: abiRedeemPool,
                address: redeemPool,
                functionName: 'earnedAssetAmount',
                args: [address],
              })
            : Promise.resolve(0n),
          address
            ? pc.readContract({
                abi: abiRedeemPool,
                address: redeemPool,
                functionName: 'userRedeemingBalance',
                args: [address],
              })
            : Promise.resolve(0n),
        ]).then(([settled, claimableAssetBalance, redeemingBalance]) => ({
          settled,
          claimableAssetBalance,
          redeemingBalance,
        }))
      return await Promise.all([
        ...bvcsi.map((vc) =>
          Promise.all(
            new Array(parseInt(vc.epochCount.toString())).fill(0).map((_v, i) =>
              Promise.all([
                // epoch info
                pc
                  .readContract({
                    abi: abiBVault,
                    address: vc.vault,
                    functionName: 'epochInfoById',
                    args: [vc.epochCount - BigInt(i)],
                  })
                  .then((epoch) =>
                    getRedeemPoolData(epoch.redeemPool).then((redeemPoolData) => ({ ...epoch, ...redeemPoolData })),
                  ),
                // yTokenTotalSupply
                pc.readContract({
                  abi: abiBVault,
                  address: vc.vault,
                  functionName: 'yTokenTotalSupply',
                  args: [vc.epochCount - BigInt(i)],
                }),
                // bribes
                pc.readContract({
                  abi: abiBVault,
                  address: vc.vault,
                  functionName: 'calcBribes',
                  args: [vc.epochCount - BigInt(i), address || zeroAddress],
                }),
                // balance asset
                pc.readContract({
                  abi: erc20Abi,
                  address: vc.asset,
                  functionName: 'balanceOf',
                  args: [address || zeroAddress],
                }),
                // balance pToken
                pc.readContract({
                  abi: erc20Abi,
                  address: vc.pToken,
                  functionName: 'balanceOf',
                  args: [address || zeroAddress],
                }),
                // balance yToken
                pc.readContract({
                  abi: abiBVault,
                  address: vc.vault,
                  functionName: 'yTokenUserBalance',
                  args: [vc.epochCount - BigInt(i), address || zeroAddress],
                }),
              ]).then(([epochInfo, yTokenTotal, bribes, balanceAssset, balancePToken, balanceYToken]) => ({
                ...epochInfo,
                yTokenTotal,
                pTokenTotal: yTokenTotal,
                bribes: bribes.map((item) => ({ ...item })),
                balanceAssset,
                balancePToken,
                balanceYToken,
              })),
            ),
          ).then((epoches) => ({
            epoches,
            pTokenTotal: epoches.reduce((sum, item) => sum + item.pTokenTotal, 0n),
            vault: vc.vault,
          })),
        ),
      ])
    },
    queryKey: [time, bvcs, chainId, address],
  })
  datas?.forEach((vc) => {
    if (!Object.hasOwn(data, vc.vault))
      data[vc.vault] = proxyGetDef<BVaultDataType>({ epoches: [], pTokenTotal: 0n, vault: vc.vault }, 0n)
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
