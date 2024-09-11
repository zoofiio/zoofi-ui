import { apiBatchConfig, multicallBatchConfig, SUPPORT_CHAINS } from '@/config/network'
import { useEffect } from 'react'
import { createPublicClient, http, PublicClient } from 'viem'
import { create } from 'zustand'
import { useCurrentChainId } from './useCurrentChainId'

export const usePublicClientStore = create<{ pc?: PublicClient; chainId?: number; setPc: (chainId: number, pc: PublicClient) => void }>((set) => ({
  setPc: (chainId, pc) => {
    set({ pc, chainId })
  },
}))

let count = 0
setInterval(() => {
  if (count >= apiBatchConfig.batchSize) {
    count = 0
  }
}, 1000)

export async function isBusy(): Promise<void> {
  let needRety = false
  return new Promise<void>((resolve) => {
    count++
    if (count < apiBatchConfig.batchSize) {
      resolve()
    } else {
      needRety = true
      setTimeout(resolve, 1000)
    }
  }).then(() => (needRety ? isBusy() : Promise.resolve()))
}

export function useSetPublicClient() {
  const chainId = useCurrentChainId()
  const pcs = usePublicClientStore()
  useEffect(() => {
    if (pcs.chainId !== chainId || !pcs.pc) {
      const pc = createPublicClient({
        batch: { multicall: multicallBatchConfig },
        chain: SUPPORT_CHAINS.find((c) => c.id == chainId)!,
        transport: http(undefined, { batch: apiBatchConfig }),
      })
      const originRead = pc.readContract
      pc.readContract = async (...args) => {
        try {
          // await isBusy()
          return await originRead(...args)
        } catch (error) {
          console.error('readError', error, '\nArgs', [...args])
          throw error
        } finally {
        }
      }
      console.info('setReadContract', chainId, pc)
      pcs.setPc(chainId, pc)
    }
  }, [chainId, pcs])
}

export function useWrapPublicClient() {
  const pcs = usePublicClientStore()
  return pcs.pc
}
