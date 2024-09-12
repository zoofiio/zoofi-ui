import { apiBatchConfig, getCurrentChainId, multicallBatchConfig, SUPPORT_CHAINS } from '@/config/network'
import { useEffect } from 'react'
import { createPublicClient, http, PublicClient } from 'viem'
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import { useCurrentChainId } from './useCurrentChainId'

export function createCurrentPC() {
  const chainId = getCurrentChainId()
  const pc = createPublicClient({
    batch: { multicall: multicallBatchConfig },
    chain: SUPPORT_CHAINS.find((c) => c.id == chainId)!,
    transport: http(undefined, { batch: apiBatchConfig }),
  })
  const originRead = pc.readContract
  pc.readContract = async (...args) => {
    try {
      usePublicClientStore.getState().upReadingCount(1)
      // await isBusy()
      // @ts-ignore
      return await originRead(...args)
    } catch (error) {
      // console.error('readError', error, '\nArgs', [...args])
      throw error
    } finally {
      usePublicClientStore.getState().upReadingCount(-1)
    }
  }
  return pc
}

export type PCStore = { pc: PublicClient; chainId: number; readingCount: number; setPc: (chainId: number, pc: PublicClient) => void; upReadingCount: (add: 1 | -1) => void }
export const usePublicClientStore = create<PCStore>((set, get) => ({
  pc: createCurrentPC(),
  chainId: getCurrentChainId(),
  readingCount: 0,
  setPc: (chainId, pc) => {
    set({ pc, chainId })
  },
  upReadingCount: (add: 1 | -1) => set({ readingCount: get().readingCount + add }),
}))

export function usePcReadingCount() {
  return usePublicClientStore(useShallow((s) => s.readingCount))
}

export function useSetPublicClient() {
  const chainId = useCurrentChainId()
  const pcs = usePublicClientStore()
  useEffect(() => {
    if (pcs.chainId !== chainId) {
      const pc = createCurrentPC()
      console.info('setReadContract', chainId, pc)
      pcs.setPc(chainId, pc)
    }
  }, [chainId, pcs])
}

export function useWrapPublicClient() {
  return usePublicClientStore(useShallow((s) => s.pc))
}
