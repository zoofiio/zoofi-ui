import { isPROD } from '@/constants'
import { providers } from 'ethers'
import { Address, Chain, defineChain } from 'viem'

export const berachainTestnet = defineChain({
  id: 80084,
  name: 'Berachain Bartio',
  nativeCurrency: {
    decimals: 18,
    name: 'BERA Token',
    symbol: 'BERA',
  },
  rpcUrls: {
    default: { http: ['https://bartio.rpc.berachain.com'] },
  },
  blockExplorers: {
    default: {
      name: 'Routescan',
      url: 'https://80084.testnet.routescan.io/',
    },
  },
  testnet: true,
})

export const beraChains = [berachainTestnet]
export const SUPPORT_CHAINS: readonly [Chain, ...Chain[]] = [...beraChains].filter(
  (item) =>
    // isPROD ? !item.testnet : true,
    true,
) as any

export const refChainId: { id: number } = { id: berachainTestnet.id }
export const getCurrentChainId = () => {
  return refChainId.id
}

export const setCurrentChainId = (id: number) => {
  if (SUPPORT_CHAINS.find((item) => item.id == id)) refChainId.id = id
}

export function isBerachain() {
  return !!beraChains.find((item) => item.id == getCurrentChainId())
}

export const refEthersProvider: {
  provider?: providers.FallbackProvider | providers.JsonRpcProvider
} = {}

export const BEX_URLS: { [k: number]: string } = {
  [berachainTestnet.id]: 'https://bartio.bex.berachain.com',
}
export const getBexPoolURL = (pool: Address) => `${BEX_URLS[getCurrentChainId()]}/pool/${pool}`
