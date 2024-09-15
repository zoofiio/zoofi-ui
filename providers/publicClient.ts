import { apiBatchConfig, getCurrentChainId, multicallBatchConfig, SUPPORT_CHAINS } from '@/config/network'
import { useReadingCountStore } from '@/hooks/useWrapPublicClient'
import { createPublicClient, http, PublicClient } from 'viem'

const pcMaps: { [id: number]: { pcs: PublicClient[]; current: number } } = {}
function createPCS(chainId: number) {
  const chain = SUPPORT_CHAINS.find((c) => c.id == chainId)!
  if (!chain || chain.rpcUrls.default.http.length == 0) throw `No Chain for chianId:${chainId}`
  const pcs = chain.rpcUrls.default.http.map((url) => {
    const pc = createPublicClient({
      batch: { multicall: multicallBatchConfig },
      chain: SUPPORT_CHAINS.find((c) => c.id == chainId)!,
      transport: http(url, { batch: apiBatchConfig }),
    })
    const originRead = pc.readContract
    pc.readContract = async (...args) => {
      try {
        useReadingCountStore.getState().upReadingCount(1)
        // await isBusy()
        // @ts-ignore
        return await originRead(...args)
      } catch (error) {
        console.error('readError', error, '\nArgs', [...args])
        throw error
      } finally {
        useReadingCountStore.getState().upReadingCount(-1)
      }
    }
    return pc
  })
  return pcs
}
export function getPC(chainId: number = getCurrentChainId()) {
  if (!pcMaps[chainId]) {
    pcMaps[chainId] = { pcs: createPCS(chainId), current: 0 }
  }
  const item = pcMaps[chainId]
  const pc = item.pcs[item.current]
  item.current++
  if (item.current >= item.pcs.length) item.current = 0
  return pc
}
