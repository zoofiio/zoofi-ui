import * as React from 'react'
import { Config, useClient, usePublicClient } from 'wagmi'
import { providers } from 'ethers'
import { Chain, Client, PublicClient, Transport, type HttpTransport } from 'viem'
import { refEthersProvider } from '@/config/network'

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback')
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    )
  return new providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const client = useClient<Config>({ chainId })
  return React.useMemo(() => {
    client && (refEthersProvider.provider = clientToProvider(client))
    return refEthersProvider.provider
  }, [client])
}
