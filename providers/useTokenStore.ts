import { proxyGetDef } from '@/lib/utils'
import { TokenStore } from './sliceTokenStore'
import { useStore } from './useBoundStore'

export function useBalances() {
  return useStore((s) => proxyGetDef<TokenStore['balances']>(s.sliceTokenStore.balances, 0n), ['sliceTokenStore.balances'])
}
