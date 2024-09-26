import { abiBQuery } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import _ from 'lodash'
import { Address } from 'viem'
import { getPC } from './publicClient'
import { SliceFun } from './types'
import { getBvaultPtSynthetic, getBvaultsPtSynthetic } from '@/config/api'
import { error } from 'console'

export type BVaultEpochDTO = {
  epochId: bigint
  startTime: bigint
  duration: bigint
  redeemPool: Address
  yTokenTotal: bigint
  vaultYTokenBalance: bigint
  assetTotalSwapAmount: bigint
  yTokenAmountForSwapYT: bigint
  settled: boolean
}

export type BVaultDTO = {
  epochCount: bigint
  pTokenTotal: bigint
  lockedAssetTotal: bigint
  f2: bigint
  closed: boolean
  lpLiq: bigint
  lpBase: bigint
  lpQuote: bigint
  Y: bigint
  current: BVaultEpochDTO
}
export type BVaultsStore = {
  bvaults: {
    [vault: Address]: BVaultDTO | undefined
  }
  epoches: {
    [vaultEpocheId: `${Address}_${number}`]: BVaultEpochDTO | undefined
  }
  yTokenSythetic: {
    [k: Address]: bigint
  }

  updateBvaults: (bvcs: BVaultConfig[]) => Promise<BVaultsStore['bvaults']>
  updateEpoches: (bvc: BVaultConfig, ids?: bigint[]) => Promise<BVaultsStore['epoches']>

  updateYTokenSythetic: (bvcs?: BVaultConfig[]) => Promise<BVaultsStore['yTokenSythetic']>
}
export const sliceBVaultsStore: SliceFun<BVaultsStore> = (set, get, init = {}) => {
  const updateBvaults = async (bvcs: BVaultConfig[]) => {
    const pc = getPC()
    const datas = await Promise.all(
      bvcs.map((bvc) =>
        pc
          .readContract({ abi: abiBQuery, address: bvc.bQueryAddres, functionName: 'queryBVault', args: [bvc.vault] })
          .then((item) => ({ vault: bvc.vault, item }))
          .catch((e) => null),
      ),
    )
    const map = _.filter(datas, (item) => item != null).reduce<BVaultsStore['bvaults']>((map, item) => ({ ...map, [item.vault]: item.item }), {})
    set({ bvaults: { ...get().bvaults, ...map } })
    return map
  }

  const updateEpoches = async (bvc: BVaultConfig, ids?: bigint[]) => {
    const mIds = ids || _.range(1, parseInt(((get().bvaults[bvc.vault]?.epochCount || 0n) + 1n).toString())).map((num) => BigInt(num))
    if (mIds.length == 0) return {}
    const pc = getPC()
    const datas = await Promise.all(
      mIds.map((epochId) => pc.readContract({ abi: abiBQuery, address: bvc.bQueryAddres, functionName: 'queryBVaultEpoch', args: [bvc.vault, epochId] })),
    )
    const map = datas.reduce<BVaultsStore['epoches']>((map, item) => ({ ...map, [`${bvc.vault}_${item!.epochId.toString()}`]: item }), {})
    set({ epoches: { ...get().epoches, ...map } })
    return map
  }

  const updateYTokenSythetic = async (bvcs?: BVaultConfig[]) => {
    const vaults = bvcs?.map((b) => b.vault) || (_.keys(get().bvaults) as Address[])
    // const data = await Promise.all(vaults.map((vault) => getBvaultPtSynthetic(vault, 100n))).then((data) =>
    //   data.reduce<{ [k: Address]: bigint }>((map, item, i) => ({ ...map, [vaults[i]]: BigInt(item) }), {}),
    // )
    const data = await getBvaultsPtSynthetic(vaults)
    const datas = _.mapValues(data, (v) => BigInt(v))
    set({ yTokenSythetic: { ...get().yTokenSythetic, ...datas } })
    return datas
  }

  // init
  return {
    bvaults: {},
    epoches: {},
    yTokenSythetic: {},
    ...init,
    updateBvaults,
    updateEpoches,
    updateYTokenSythetic,
  }
}
