import { abiBVault, abiCalcLiq, abiCrocQuery, abiRedeemPool } from '@/config/abi'
import { BVaultConfig, CALC_LIQ, CrocQueryAddress } from '@/config/bvaults'
import { getCurrentChainId } from '@/config/network'
import { LP_TOKENS } from '@/config/tokens'
import _ from 'lodash'
import { Address, erc20Abi, stringToHex } from 'viem'
import { getPC } from './publicClient'
import { SliceFun } from './types'
import { getBvaultPtSynthetic } from '@/config/api'

export type BVaultsStore = {
  bvaults: {
    [vault: Address]:
      | {
          epochCount: bigint
          pTokenTotal: bigint
          lockedAssetTotal: bigint
          f2: bigint
          closed?: boolean
          lpLiq?: bigint
          lpBase?: bigint
          lpQuote?: bigint
        }
      | undefined
  }
  bvaultsCurrentEpoch: {
    [vault: Address]:
      | {
          Y: bigint
          yTokenTotalSupply: bigint
          pTokenSynthetic: bigint
          assetAmountForSwapYT: bigint
          yTokenAmountForSwapYT: bigint
        }
      | undefined
  }
  epoches: {
    [vaultEpocheId: `${Address}_${number}`]:
      | {
          epochId: bigint
          startTime: bigint
          duration: bigint
          redeemPool: Address
          yTokenTotal: bigint
          pTokenSynthetic: bigint
          vaultYTokenBalance: bigint
        }
      | undefined
  }

  epochesRedeemPool: {
    [vaultEpocheId: `${Address}_${number}`]:
      | {
          settled: boolean
        }
      | undefined
  }

  epochesYTprice: {
    [vaultEpocheId: `${Address}_${number}`]: { time: number; price: number }[]
  }

  updateBvaults: (bvcs: BVaultConfig[]) => Promise<BVaultsStore['bvaults']>
  updateBvaultsCurrentEpoch: (bvaults?: BVaultsStore['bvaults']) => Promise<BVaultsStore['bvaultsCurrentEpoch']>
  updateEpoches: (bvc: BVaultConfig, ids?: bigint[]) => Promise<BVaultsStore['epoches']>
  updateEpochesRedeemPool: (bvc: BVaultConfig, epoches?: BVaultsStore['epoches']) => Promise<BVaultsStore['epochesRedeemPool']>

  updateEpochesYTprice: (bvc: BVaultConfig, epochId: bigint) => Promise<BVaultsStore['epochesYTprice'][`${Address}_${number}`]>
}
export const sliceBVaultsStore: SliceFun<BVaultsStore> = (set, get, init = {}) => {
  const getLpAmount = async (bvcs: BVaultConfig[], map: BVaultsStore['bvaults']) => {
    const pc = getPC()
    await Promise.all(
      bvcs.map((bvc) => {
        const lp = LP_TOKENS[bvc.asset]
        if (!lp) return null
        return Promise.all([
          pc.readContract({ abi: abiCrocQuery, address: CrocQueryAddress[getCurrentChainId()], functionName: 'queryPrice', args: [lp.base, lp.quote, lp.poolType] }),
          pc.readContract({ abi: abiCrocQuery, address: CrocQueryAddress[getCurrentChainId()], functionName: 'queryLiquidity', args: [lp.base, lp.quote, lp.poolType] }),
          pc.readContract({ abi: erc20Abi, address: bvc.asset, functionName: 'totalSupply' }),
        ]).then((data) => {
          if (!data) return null
          const bvd = map[bvc.vault]!
          const [price, totalLiq, totalSupply] = data
          const lpLiq = (totalLiq * bvd.lockedAssetTotal) / totalSupply
          return pc.readContract({ abi: abiCalcLiq, address: CALC_LIQ[getCurrentChainId()], functionName: 'liqToTokens', args: [lpLiq, price] }).then(([base, quote]) => {
            bvd.lpLiq = lpLiq
            bvd.lpBase = base
            bvd.lpQuote = quote
          })
        })
      }),
    )
  }
  const updateBvaults = async (bvcs: BVaultConfig[]) => {
    const pc = getPC()
    const datas = await Promise.all(
      bvcs.map((bvc) =>
        Promise.all([
          // epochCount
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'epochIdCount' }),
          // pTokenTotal
          pc.readContract({ abi: erc20Abi, address: bvc.pToken, functionName: 'totalSupply' }),
          // lockedAssetTotal,
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'assetBalance' }),
          // fees f2
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'paramValue', args: [stringToHex('f2', { size: 32 })] }),
          // closed
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'closed' }).catch(() => false),
        ]).then<BVaultsStore['bvaults'][Address]>(([epochCount, pTokenTotal, lockedAssetTotal, f2, closed]) => ({ epochCount, pTokenTotal, lockedAssetTotal, f2, closed })),
      ),
    )
    const map = datas.reduce<BVaultsStore['bvaults']>((map, item, i) => ({ ...map, [bvcs[i].vault]: item }), {})
    set({ bvaults: { ...get().bvaults, ...map } })
    await getLpAmount(bvcs, map)
    set({ bvaults: { ...get().bvaults, ...map } })
    return map
  }

  const updateBvaultsCurrentEpoch = async (bvaults: BVaultsStore['bvaults'] = get().bvaults) => {
    const pc = getPC()
    const vaults = _.keys(bvaults).map((vault) => vault as Address)
    if (vaults.length == 0) return {}
    const datas = await Promise.all(
      vaults.map((vault) =>
        Promise.all([
          // Y  虚拟交易对的asset amount
          bvaults[vault]!.epochCount && vault !== '0xF778D2B9E0238D385008e916D7245F51959Ba279'
            ? pc.readContract({ abi: abiBVault, address: vault, functionName: 'Y' })
            : Promise.resolve(0n),
          // yTokenTotal
          bvaults[vault]!.epochCount ? pc.readContract({ abi: abiBVault, address: vault, functionName: 'yTokenTotalSupply', args: [bvaults[vault]!.epochCount] }) : 0n,
          // yTokenTotal
          bvaults[vault]!.epochCount ? getBvaultPtSynthetic(vault, bvaults[vault]!.epochCount!).then((res) => BigInt(res)) : 0n,
          bvaults[vault]!.epochCount ? pc.readContract({ abi: abiBVault, address: vault, functionName: 'assetTotalSwapAmount', args: [bvaults[vault]!.epochCount] }) : 0n,
          // vaultYTokenBalance
          bvaults[vault]!.epochCount ? pc.readContract({ abi: abiBVault, address: vault, functionName: 'yTokenUserBalance', args: [bvaults[vault]!.epochCount, vault] }) : 0n,
        ]).then(([Y, yTokenTotalSupply, pTokenSynthetic, assetAmountForSwapYT, vaultYTokenBalance]) => ({
          Y,
          yTokenTotalSupply,
          pTokenSynthetic,
          assetAmountForSwapYT: assetAmountForSwapYT,
          yTokenAmountForSwapYT: yTokenTotalSupply - vaultYTokenBalance,
        })),
      ),
    )
    const map = datas.reduce<BVaultsStore['bvaultsCurrentEpoch']>((map, item, i) => ({ ...map, [vaults[i]]: item }), {})
    set({ bvaultsCurrentEpoch: { ...get().bvaultsCurrentEpoch, ...map } })
    return map
  }

  const updateEpoches = async (bvc: BVaultConfig, ids?: bigint[]) => {
    const mIds = ids || _.range(1, parseInt(((get().bvaults[bvc.vault]?.epochCount || 0n) + 1n).toString())).map((num) => BigInt(num))
    if (mIds.length == 0) return {}
    const pc = getPC()
    const datas = await Promise.all(
      mIds.map((epochId) =>
        Promise.all([
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'epochInfoById', args: [epochId] }),
          // yTokenTotalSupply
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenTotalSupply', args: [epochId] }),
          getBvaultPtSynthetic(bvc.vault, epochId).then((res) => BigInt(res)),
          // balance yToken
          pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalance', args: [epochId, bvc.vault] }),
        ]).then<BVaultsStore['epoches'][`${Address}_${number}`]>(([epochInfo, yTokenTotalSupply, pTokenSynthetic, vaultYTokenBalance]) => ({
          ...epochInfo,
          yTokenTotal: yTokenTotalSupply,
          pTokenSynthetic,
          vaultYTokenBalance,
        })),
      ),
    )
    const map = datas.reduce<BVaultsStore['epoches']>((map, item) => ({ ...map, [`${bvc.vault}_${item!.epochId.toString()}`]: item }), {})
    set({ epoches: { ...get().epoches, ...map } })
    return map
  }

  const updateEpochesRedeemPool = async (bvc: BVaultConfig, epoches: BVaultsStore['epoches'] = get().epoches) => {
    const mepoches = _.keys(epoches).map((key) => ({ vault: key.split('_')[0], epochId: BigInt(key.split('_')[1]), epoch: epoches[key as any]! }))
    if (mepoches.length == 0) return {}
    const pc = getPC()
    const datas = await Promise.all(
      mepoches.map((epoch) => pc.readContract({ abi: abiRedeemPool, address: epoch.epoch.redeemPool, functionName: 'settled' }).then((settled) => ({ settled }))),
    )
    const map = datas.reduce<BVaultsStore['epochesRedeemPool']>((map, item, i) => ({ ...map, [`${bvc.vault}_${mepoches[i].epochId.toString()}`]: item }), {})
    set({ epochesRedeemPool: { ...get().epochesRedeemPool, ...map } })
    return map
  }

  const updateEpochesYTprice = async (bvc: BVaultConfig, epochId: bigint) => {
    const pc = getPC()
    pc.getBlock()
    pc.getBlockNumber()

    const getPrice = (blockNumber: bigint) =>
      Promise.all([
        pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'Y', blockNumber }),
        pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'yTokenUserBalance', args: [epochId, bvc.vault], blockNumber }),
      ]).then(([Y, yTokenUserBalance]) => ({}))
    return []
  }
  // init
  return {
    bvaults: {},
    bvaultsCurrentEpoch: {},
    epoches: {},
    epochesRedeemPool: {},
    epochesYTprice: {},
    ...init,
    updateBvaults,
    updateBvaultsCurrentEpoch,
    updateEpoches,
    updateEpochesRedeemPool,
    updateEpochesYTprice,
  }
}
