import { abiBVault, abiRedeemPool } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { Address, erc20Abi } from 'viem'
import { getPC } from './publicClient'
import { SliceFun } from './types'

export type UserBVaultsStore = {
  epoches: {
    [k: Address]:
      | {
          epochId: bigint
          bribes: { totalRewards: bigint; bribeSymbol: string; epochId: bigint; bribeToken: Address; bribeAmount: bigint }[]
          userBalanceYToken: bigint
          userBalanceYTokenSyntyetic: bigint
          claimableAssetBalance: bigint
          redeemingBalance: bigint
        }[]
      | undefined
  }

  updateEpoches: (bvc: BVaultConfig, user: Address, epoches: { epochId: bigint; settled: boolean; redeemPool: Address }[]) => Promise<UserBVaultsStore['epoches']>
  reset: () => void
}

export const sliceUserBVaults: SliceFun<UserBVaultsStore> = (set, get, init) => {
  const updateEpoches = async (bvc: BVaultConfig, user: Address, _epoches: { epochId: bigint; settled: boolean; redeemPool: Address }[]) => {
    const epoches = _epoches.filter(e => e.epochId > 0n)
    if (epoches.length == 0) return {}
    const pc = getPC()
    console.info('updateEpoches:', epoches)
    const userEpoches = await Promise.all(
      epoches.map(({ epochId, redeemPool, settled }) =>
        Promise.all([
          // bribes
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'calcBribes', args: [epochId, user] }),
          // redeemingBalance
          settled ? pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'userRedeemingBalance', args: [user] }).catch(() => 0n) : Promise.resolve(0n),
          // claimableAssetBalance
          pc.readContract({ abi: abiRedeemPool, address: redeemPool, functionName: 'earnedAssetAmount', args: [user] }),
          // balance yToken
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalance', args: [epochId, user] }),
          // balance yTokenSynthetic
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalanceSynthetic', args: [epochId, user] }),
        ]).then(([bribes, redeemingBalance, claimableAssetBalance, userBalanceYToken, userBalanceYTokenSyntyetic]) => ({
          epochId,
          bribes,
          redeemingBalance,
          claimableAssetBalance,
          userBalanceYToken,
          userBalanceYTokenSyntyetic,
        })),
      ),
    )
    const userBribeDetails = await Promise.all(
      userEpoches.map(({ epochId, bribes }) =>
        Promise.all(
          bribes.map((bribe) =>
            Promise.all([
              pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'bribeTotalAmount', args: [epochId, bribe.bribeToken] }),
              pc.readContract({ abi: erc20Abi, address: bribe.bribeToken, functionName: 'symbol' }),
            ]).then(([totalRewards, bribeSymbol]) => ({ ...bribe, totalRewards, bribeSymbol })),
          ),
        ),
      ),
    )
    const endEpoches = userEpoches.map((epoch, i) => ({ ...epoch, bribes: userBribeDetails[i] })).sort((a, b) => parseInt((b.epochId - a.epochId).toString()))
    set({ epoches: { ...get().epoches, [bvc.vault]: endEpoches } })
    return endEpoches
  }

  return { epoches: {}, ...init, updateEpoches, reset: () => set({ epoches: {} }) }
}
