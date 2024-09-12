import { abiBVault, abiRedeemPool } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { YEAR_SECONDS } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { usePublicClientStore } from '@/hooks/useWrapPublicClient'
import { divMultipOtherBn, fmtPercent, proxyGetDef, retry } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import { useQuery } from '@tanstack/react-query'
import { produce } from 'immer'
import _ from 'lodash'
import { useEffect, useMemo } from 'react'
import { Address, erc20Abi, PublicClient, stringToHex } from 'viem'
import { useAccount } from 'wagmi'
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

export type BribeInfo = {
  totalRewards: bigint
  bribeSymbol: string
  epochId: bigint
  bribeToken: Address
  bribeAmount: bigint
}

export type BVaultDTO = {
  vault: Address
  epochCount: bigint
  pTokenTotal: bigint
  lockedAssetTotal: bigint
  f2: bigint
  Y: bigint

  yTokenTotalSupply: bigint
  yTokenTotalSupplySynthetic: bigint
  assetAmountForSwapYT: bigint
  yTokenAmountForSwapYT: bigint
}

export type UserBVaultDTO = {
  vault: Address
  userBalanceAssset: bigint
  userBalancePToken: bigint
  redeemingBalance: bigint
}

export type BVaultEpocheDTO = {
  epochId: bigint
  startTime: bigint
  duration: bigint
  redeemPool: Address
  settled: boolean
  yTokenTotal: bigint
  yTokenTotalSupplySynthetic: bigint
  vaultYTokenBalance: bigint
}

export type UserBVaultEpocheDTO = {
  epochId: bigint
  bribes: BribeInfo[]
  userBalanceYToken: bigint
  userBalanceYTokenSyntyetic: bigint
  claimableAssetBalance: bigint
  redeemingBalance: bigint
}
async function getBVaultData(pc: PublicClient, vc: BVaultConfig) {
  const epochCount = await pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'epochIdCount' })
  // 获取每个Vault的数据
  return Promise.all([
    // pTokenTotal
    pc.readContract({ abi: erc20Abi, address: vc.pToken, functionName: 'totalSupply' }),
    // lockedAssetTotal,
    pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'assetBalance' }),
    // fees f2
    pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'paramValue', args: [stringToHex('f2', { size: 32 })] }),
    // Y  虚拟交易对的asset amount
    epochCount && vc.vault !== '0xF778D2B9E0238D385008e916D7245F51959Ba279' ? pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'Y' }) : Promise.resolve(0n),
    // yTokenTotal
    epochCount ? pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenTotalSupply', args: [epochCount] }) : 0n,
    // yTokenTotal
    epochCount ? pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenTotalSupplySynthetic', args: [epochCount] }) : 0n,
    // vaultYTokenBalance
    epochCount ? pc.readContract({ abi: abiBVault, address: vc.vault, functionName: 'yTokenUserBalance', args: [epochCount, vc.vault] }) : 0n,
  ]).then<BVaultDTO>(([pTokenTotal, lockedAssetTotal, f2, Y, yTokenTotalSupply, yTokenTotalSupplySynthetic, vaultYTokenBalance]) => ({
    epochCount,
    pTokenTotal,
    vault: vc.vault,
    lockedAssetTotal,
    f2,
    Y,
    // crurretEpochData
    yTokenTotalSupply,
    yTokenTotalSupplySynthetic,
    assetAmountForSwapYT: divMultipOtherBn(pTokenTotal - yTokenTotalSupply, f2),
    yTokenAmountForSwapYT: yTokenTotalSupply - vaultYTokenBalance,
  }))
}

async function getBVaultEpochData(pc: PublicClient, bvc: BVaultConfig, epochId: bigint) {
  // 获取RedeemPool的数据。
  const getRedeemPoolData = async (redeemPool: Address) => {
    const settled = await pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'settled' })
    return { settled }
  }
  // 获取每个Epoch的数据
  const [epochInfo, yTokenTotal, yTokenTotalSupplySynthetic, vaultYTokenBalance] = await Promise.all([
    // epoch info
    pc
      .readContract({ abi: abiBVault, address: bvc.vault, functionName: 'epochInfoById', args: [epochId] })
      .then((epoch) => getRedeemPoolData(epoch.redeemPool).then((redeemPoolData) => ({ ...epoch, ...redeemPoolData }))),
    // yTokenTotalSupply
    pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenTotalSupply', args: [epochId] }),
    // yTokenTotalSupplySynthetic
    pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenTotalSupplySynthetic', args: [epochId] }),
    // balance yToken
    pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalance', args: [epochId, bvc.vault] }),
  ])
  return {
    ...epochInfo,
    yTokenTotal, // includes last epoch
    yTokenTotalSupplySynthetic, // includes last epoch
    vaultYTokenBalance, // includes last epoch
  }
}

// export type BVault
const defBvaults = (obj: {} = {}) =>
  proxyGetDef(obj, (key: string) =>
    proxyGetDef<BVaultDTO>(
      {
        vault: key as Address,
        epochCount: 0n,
        pTokenTotal: 0n,
        lockedAssetTotal: 0n,
        f2: 0n,
        Y: 0n,
        yTokenTotalSupply: 0n,
        yTokenTotalSupplySynthetic: 0n,
        assetAmountForSwapYT: 0n,
        yTokenAmountForSwapYT: 0n,
      },
      0n,
    ),
  )
const defUserBvaults = (obj: {} = {}) =>
  proxyGetDef(obj, (key: string) => proxyGetDef<UserBVaultDTO>({ vault: key as Address, userBalanceAssset: 0n, userBalancePToken: 0n, redeemingBalance: 0n }, 0n))
const defEpoches = (obj: {} = {}) => proxyGetDef(obj, [])

export type BVaultsDataStore = {
  isLoading: boolean
  bvaults: { [k: Address]: BVaultDTO }
  userBvaults: { [k: Address]: UserBVaultDTO }
  epochs: { [k: Address]: BVaultEpocheDTO[] }
  userEpochs: { [k: Address]: UserBVaultEpocheDTO[] }
  updateBVaults: (bvcs: BVaultConfig[]) => Promise<BVaultDTO[]>
  updateUserBVaults: (bvcs: BVaultConfig[], user: Address) => Promise<UserBVaultDTO[]>
  updateEpoches: (bvc: BVaultConfig, bvd: BVaultDTO) => Promise<BVaultEpocheDTO[]>
  updateUserEpoches: (bvc: BVaultConfig, epoches: BVaultEpocheDTO[], user: Address) => Promise<UserBVaultEpocheDTO[]>
}

export const useBVaultsDataStore = create<BVaultsDataStore>((set, get) => ({
  isLoading: false,
  bvaults: defBvaults(),
  userBvaults: defUserBvaults(),
  epochs: defEpoches(),
  userEpochs: defEpoches(),
  updateBVaults: async (bvcs: BVaultConfig[]) => {
    console.info('updateBVaults', bvcs)
    const pc = usePublicClientStore.getState().pc
    const bvaultsDatas = await Promise.all(bvcs.map((bvc) => getBVaultData(pc, bvc)))
    const bvaultsMap = { ...get().bvaults }
    bvaultsDatas.forEach((item) => (bvaultsMap[item.vault] = item))
    set({ bvaults: defBvaults(bvaultsMap) })
    return bvaultsDatas
  },
  updateUserBVaults: async (bvcs: BVaultConfig[], user: Address) => {
    console.info('updateUserBVaults', bvcs, user)
    const pc = usePublicClientStore.getState().pc
    const getUserBVault = (vc: BVaultConfig) => {
      const bvd = get().bvaults[vc.vault]
      return Promise.all([
        // balance asset
        pc.readContract({ abi: erc20Abi, address: vc.asset, functionName: 'balanceOf', args: [user] }),
        // balance pToken
        pc.readContract({ abi: erc20Abi, address: vc.pToken, functionName: 'balanceOf', args: [user] }),
        // redeemingBalance
        bvd.epochCount
          ? pc
              .readContract({ abi: abiBVault, address: vc.vault, functionName: 'epochInfoById', args: [bvd.epochCount] })
              .then((epoch) => pc.readContract({ abi: abiRedeemPool, address: epoch.redeemPool, functionName: 'settled' }).then((settled) => ({ epoch, settled })))
              .then(({ epoch, settled }) =>
                !settled ? pc.readContract({ abi: abiRedeemPool, address: epoch.redeemPool, functionName: 'userRedeemingBalance', args: [user] }) : 0n,
              )
          : Promise.resolve(0n),
      ]).then<UserBVaultDTO>(([userBalanceAssset, userBalancePToken, redeemingBalance]) => ({ userBalanceAssset, userBalancePToken, vault: vc.vault, redeemingBalance }))
    }
    const usersBvaults = await Promise.all(bvcs.map(getUserBVault))
    const usersBvaultsMap = { ...get().userBvaults }
    usersBvaults.forEach((item) => (usersBvaultsMap[item.vault] = item))
    console.info('setUserBvaults:', usersBvaultsMap)
    set({ userBvaults: defUserBvaults(usersBvaultsMap) })
    return usersBvaults
  },
  updateEpoches: async (bvc: BVaultConfig, bvd: BVaultDTO) => {
    console.info('updateEpoches', bvc, bvd)
    const pc = usePublicClientStore.getState().pc
    const epochIds = new Array(parseInt(bvd.epochCount.toString())).fill(0).map((_v, i) => bvd.epochCount - BigInt(i))
    // 获取所有Epoches的数据
    const getEpoches = () => {
      return bvd.epochCount > 0n ? Promise.all(epochIds.map((epochId) => getBVaultEpochData(pc, bvc, epochId))) : Promise.resolve([])
    }
    const epoches = await getEpoches()
    set({ epochs: defEpoches({ ...get().epochs, [bvc.vault]: epoches }) })
    return epoches
  },
  updateUserEpoches: async (bvc: BVaultConfig, epoches: BVaultEpocheDTO[], user: Address) => {
    console.info('updateUserEpoches', bvc, epoches, user)
    const pc = usePublicClientStore.getState().pc
    // 获取RedeemPool的数据。
    const getRedeemPoolData = (redeemPool: Address, epoch: BVaultEpocheDTO) =>
      Promise.all([
        !epoch.settled ? pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'userRedeemingBalance', args: [user] }) : Promise.resolve(0n),
        pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'earnedAssetAmount', args: [user] }),
      ]).then(([redeemingBalance, claimableAssetBalance]) => ({ redeemingBalance, claimableAssetBalance }))

    const getBribe = async (epochId: bigint, bribe: Pick<BribeInfo, 'bribeAmount' | 'epochId' | 'bribeToken'>) => {
      const totalRewards = await pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'bribeTotalAmount', args: [epochId, bribe.bribeToken] })
      const bribeSymbol = await pc.readContract({ abi: erc20Abi, address: bribe.bribeToken, functionName: 'symbol' })
      return { ...bribe, totalRewards, bribeSymbol }
    }
    // getBribes
    const getBribes = async (epochId: bigint) => {
      const bribes = await pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'calcBribes', args: [epochId, user] })
      return Promise.all(bribes.map((bribe) => getBribe(epochId, bribe)))
    }
    const userEpoches = await Promise.all(
      epoches.map((epoche) =>
        Promise.all([
          getBribes(epoche.epochId),
          getRedeemPoolData(epoche.redeemPool, epoche),
          // balance yToken
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalance', args: [epoche.epochId, user] }),
          // balance yTokenSynthetic
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalanceSynthetic', args: [epoche.epochId, user] }),
        ]).then<UserBVaultEpocheDTO>(([bribes, redeemPoolData, userBalanceYToken, userBalanceYTokenSyntyetic]) => ({
          epochId: epoche.epochId,
          bribes,
          ...redeemPoolData,
          userBalanceYToken,
          userBalanceYTokenSyntyetic,
        })),
      ),
    )
    set({ userEpochs: defEpoches({ ...get().userEpochs, [bvc.vault]: userEpoches }) })
    return userEpoches
  },
}))

export function useBVaultsDataShallow<T>(selector: (state: BVaultsDataStore) => T) {
  return useBVaultsDataStore(useShallow<BVaultsDataStore, T>(selector))
}

export function useBVaultData(bvcOrVault: BVaultConfig | Address) {
  const vault = typeof bvcOrVault == 'string' ? (bvcOrVault as Address) : bvcOrVault.vault
  return useBVaultsDataShallow((s) => s.bvaults[vault])
}
export function useUpdateBVaultsData(bvcs: BVaultConfig[]) {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  useEffect(() => {
    useBVaultsDataStore.setState({ bvaults: defBvaults(), userBvaults: defUserBvaults(), epochs: defEpoches(), userEpochs: defEpoches() })
  }, [chainId])
  useEffect(() => {
    useBVaultsDataStore.setState({ userBvaults: defUserBvaults(), userEpochs: defEpoches() })
  }, [address])
  return useQuery({
    queryFn: () => useBVaultsDataStore.getState().updateBVaults(bvcs),
    queryKey: [bvcs],
  })
}

export function useUpdateUserBVaultData(bvc: BVaultConfig) {
  const { address } = useAccount()
  const bvd = useBVaultData(bvc)
  return useQuery({
    queryKey: [address, bvc, bvd],
    enabled: !!address,
    queryFn: () => useBVaultsDataStore.getState().updateUserBVaults([bvc], address!),
  })
}

export function useUpdateBVaultEpoches(bvc: BVaultConfig) {
  const bvd = useBVaultData(bvc)
  return useQuery({
    queryKey: [bvc, bvd],
    enabled: bvd.epochCount > 0n,
    queryFn: () => useBVaultsDataStore.getState().updateEpoches(bvc, bvd),
  })
}

export function useUpdateUserBVaultEpoches(bvc: BVaultConfig) {
  const epoches = useBVaultsDataShallow((s) => s.epochs[bvc.vault])
  const { address } = useAccount()
  // const epochesKey = useMemo(() => JSON.stringify(epoches, (key, value) => (typeof value == 'bigint' ? value.toString() : value)), [epoches])
  return useQuery({
    queryKey: [bvc, epoches, address],
    enabled: epoches.length > 0 && !!address,
    queryFn: () => useBVaultsDataStore.getState().updateUserEpoches(bvc, epoches, address!),
  })
}

export function useEpochesData(vault: Address) {
  const { epochs, userEpochs } = useBVaultsDataShallow(({ epochs, userEpochs }) => ({ epochs, userEpochs }))
  return useMemo(() => {
    return epochs[vault].map((ep) =>
      proxyGetDef<BVaultEpocheDTO & UserBVaultEpocheDTO>({ ...ep, ...(userEpochs[vault].find((item) => item.epochId == ep.epochId) || ({ bribes: [] } as any)) }, 0n),
    )
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
  const bvd = useBVaultData(vault)
  const boost = bvd.assetAmountForSwapYT > 0n ? (bvd.lockedAssetTotal * 100n) / bvd.assetAmountForSwapYT : 100000n
  return [displayBalance(boost, 0, 2), boost]
}

export function useBVaultApy(vault: Address): [string, bigint] {
  const bvd = useBVaultData(vault)
  const apy = bvd.yTokenTotalSupplySynthetic > 0n ? (bvd.assetAmountForSwapYT * YEAR_SECONDS * BigInt(1e10)) / bvd.yTokenTotalSupplySynthetic : 0n
  return [fmtPercent(apy, 10), apy]
}
