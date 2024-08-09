import { useMemo, useRef } from 'react'
import { useCurrentChainId } from './useCurrentChainId'

export function useMemoOfChainId<T>(create: () => T) {
  const chainId = useCurrentChainId()
  const refChain = useRef<{ [k: number]: T }>({})
  return useMemo(() => {
    if (!refChain.current[chainId]) {
      refChain.current[chainId] = create()
    }
    return refChain.current[chainId]
  }, [chainId])
}
