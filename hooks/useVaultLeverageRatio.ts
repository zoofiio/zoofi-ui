import { VAULTS_CONFIG, VaultConfig } from '@/config/swap'
import { aarToNumber } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { useContext, useMemo } from 'react'
import { useCurrentChainId } from './useCurrentChainId'
import { useMemoOfChainId } from './useMemoOfChain'
import { Address } from 'viem'

function proxyGetDef<T extends object>(obj: T, def: any) {
  const get = function (target: T, p: string) {
    const hasValue = p in target
    if (hasValue && (target as any)[p] !== null && (target as any)[p] !== undefined) {
      return (target as any)[p]
    }
    return def
  }
  return new Proxy(obj, { get }) as T
}

export function useVaultLeverageRatio(vc?: VaultConfig) {
  const { vaultsState, stableVaultsState } = useContext(FetcherContext)
  const vs = vaultsState[vc?.vault || 'null']
  const vs_s = stableVaultsState[vc?.vault || 'null']
  const aarNum = vc?.isStable ? aarToNumber(vs_s.aar, vs_s.AARDecimals) : aarToNumber(vs.aar, vs.AARDecimals)
  const leverage = Math.max(0, 1 + 1 / (aarNum - 1))
  return leverage
}

export function useValutsLeverageRatio() {
  const { vaultsState, stableVaultsState } = useContext(FetcherContext)
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const leverageMap: { [k: Address]: number } = useMemoOfChainId(() => proxyGetDef({}, 0))
  vcs.forEach((vc) => {
    const vs = vaultsState[vc?.vault || 'null']
    const vs_s = stableVaultsState[vc?.vault || 'null']
    const aarNum = vc?.isStable ? aarToNumber(vs_s.aar, vs_s.AARDecimals) : aarToNumber(vs.aar, vs.AARDecimals)
    leverageMap[vc.vault] = Math.max(0, 1 + 1 / (aarNum - 1))
  })
  return leverageMap
}
