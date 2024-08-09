'use client'

import * as React from 'react'

import { SUPPORT_CHAINS } from '@/config/network'
import { RainbowKitProvider, connectorsForWallets, lightTheme, darkTheme } from '@rainbow-me/rainbowkit'
import {
  bitgetWallet,
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  walletConnectWallet,
  tokenPocketWallet,
  gateWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { sepolia } from 'viem/chains'
import { WagmiProvider, createConfig, createStorage } from 'wagmi'

const walletConnectProjectId = 'b3ff10277f66a6ba31bbb88fb6ea4365'
// const ankrKey = 'e1a06837672f1dd89a4c70522941d3beebad120eafad005d79d77c42856d9310'
const ankrKey = '5da55021cad3ac57391c3292c373dec3a32bf9eaae63b74d4138d5d4a17dd554'

const ankrNetName: { [k: number]: string } = {
  [sepolia.id]: 'eth_sepolia',
}

import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider } from 'use-query-params'

import { FetcherProvider } from '@/providers/fetcher'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createClient, http } from 'viem'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useThemeState } from '@/components/theme-mode'

const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/45897/wand/version/latest',
  cache: new InMemoryCache(),
})

const batchConfig = { batchSize: 500, wait: 300 }

const qClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = React.useState<ReturnType<typeof createConfig>>()
  React.useEffect(() => {
    const storage = createStorage({
      storage: {
        getItem: (key) => window.localStorage.getItem(key),
        removeItem: (key) => window.localStorage.removeItem(key),
        setItem: (key, value) => {
          key !== 'wagmi.cache' && localStorage.setItem(key, value)
        },
      },
    })
    const appName = 'ZooFi'
    const connectors = connectorsForWallets(
      [
        {
          groupName: 'Recommended',
          wallets: [
            injectedWallet,
            metaMaskWallet,
            coinbaseWallet,
            okxWallet,
            bitgetWallet,
            tokenPocketWallet,
            gateWallet,
            walletConnectWallet,
          ],
        },
      ],
      {
        appName,
        projectId: walletConnectProjectId,
      },
    )

    setConfig(
      createConfig({
        connectors,
        storage,
        chains: SUPPORT_CHAINS,
        client: ({ chain }) =>
          createClient({
            chain,
            transport: http(
              ankrNetName[chain.id] ? `https://rpc.ankr.com/${ankrNetName[chain.id]}` : chain.rpcUrls.default.http[0],
              { batch: batchConfig },
            ),
            batch: { multicall: batchConfig },
          }),
      }),
    )
  }, [])
  const theme = useThemeState((s) => s.theme)
  if (!config) return null
  return (
    <ApolloProvider client={client}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={qClient}>
          <QueryParamProvider adapter={NextAdapterApp}>
            <RainbowKitProvider
              locale='en-US'
              modalSize='compact'
              theme={theme === 'dark' ? darkTheme() : lightTheme()}
            >
              <FetcherProvider>{children}</FetcherProvider>
            </RainbowKitProvider>
          </QueryParamProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ApolloProvider>
  )
}
