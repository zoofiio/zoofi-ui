import { abiBQuery } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { Address } from 'viem'
import { getPC } from './publicClient'
import { BVaultEpochDTO } from './sliceBVaultsStore'
import { SliceFun } from './types'

export type BVaultUserDTO = {
  epochId: bigint
  bribes: { bribeTotalAmount: bigint; bribeSymbol: string; epochId: bigint; bribeToken: Address; bribeAmount: bigint }[]
  userBalanceYToken: bigint
  userBalanceYTokenSyntyetic: bigint
  claimableAssetBalance: bigint
  redeemingBalance: bigint
}

export type UserBVaultsStore = {
  epoches: {
    [k: Address]: BVaultUserDTO[] | undefined
  }

  updateEpoches: (bvc: BVaultConfig, user: Address, epoches: BVaultEpochDTO[]) => Promise<UserBVaultsStore['epoches']>
  reset: () => void
}

export const sliceUserBVaults: SliceFun<UserBVaultsStore> = (set, get, init) => {
  const updateEpoches = async (bvc: BVaultConfig, user: Address, _epoches: BVaultEpochDTO[]) => {
    const epoches = _epoches.filter((e) => e.epochId > 0n)
    if (epoches.length == 0) return {}
    const pc = getPC()
    const endEpoches = await Promise.all(
      epoches.map((e) => pc.readContract({ abi: abiBQuery, address: bvc.bQueryAddres, functionName: 'queryBVaultEpochUser', args: [bvc.vault, e.epochId, user] })),
    )
    set({ epoches: { ...get().epoches, [bvc.vault]: endEpoches } })
    return endEpoches
  }

  return { epoches: {}, ...init, updateEpoches, reset: () => set({ epoches: {} }) }
}
