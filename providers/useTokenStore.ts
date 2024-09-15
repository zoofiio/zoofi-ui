import { proxyGetDef } from '@/lib/utils'
import { TokenStore } from './sliceTokenStore'
import { useStoreShallow } from './useBoundStore'

export function useBalances() {
  return useStoreShallow((s) => proxyGetDef<TokenStore['balances']>(s.sliceTokenStore.balances, 0n))
}
