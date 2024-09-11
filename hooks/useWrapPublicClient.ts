import { apiBatchConfig, multicallBatchConfig, SUPPORT_CHAINS } from '@/config/network'
import { useEffect } from 'react'
import { createPublicClient, http, PublicClient } from 'viem'
import { create } from 'zustand'
import { useCurrentChainId } from './useCurrentChainId'
import { genPromiseObj } from '@/lib/utils'
import _ from 'lodash'

export const usePublicClientStore = create<{ pc?: PublicClient; chainId?: number; setPc: (chainId: number, pc: PublicClient) => void }>((set) => ({
  setPc: (chainId, pc) => {
    set({ pc, chainId })
  },
}))

// const stat: { lastTime: number; count: number; current?: ReturnType<typeof genPromiseObj> } = { lastTime: 0, count: 0 }
// export async function isBusy(): Promise<void> {
//   stat.count++
//   const now = new Date().getTime()
//   if (now - stat.lastTime > 1000) {
//     stat.count = 1
//   }
//   let needRety = false
//   return new Promise<void>((resolve) => {
//     count++
//     if (count < apiBatchConfig.batchSize) {
//       resolve()
//     } else {
//       needRety = true
//       setTimeout(resolve, 1000)
//     }
//   }).then(() => (needRety ? isBusy() : Promise.resolve()))
// }

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
          // @ts-ignore
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
