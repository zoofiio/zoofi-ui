'use client'
import { USB_ADDRESS } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useEthersProvider } from '@/hooks/useEthersProvider'
import { useMemoOfChainId } from '@/hooks/useMemoOfChain'
import { useUpdatePtypoolApy } from '@/hooks/usePtypoolApy'
import { proxyGetDef } from '@/lib/utils'
import { ReactNode, createContext } from 'react'
import { useResetBVaultsData } from './useBVaultsData'
import { useSetLVaultPrices, useUSBApr } from './useLVaultsData'

export interface FetcherContextInterface {
  prices: { [k: string]: bigint }
  usbApr: {
    apr: bigint
    aprDecimals: number
  }
  // bVaultsData: ReturnType<typeof useBVaultsData>
}

export const FetcherContext = createContext<FetcherContextInterface>({
  prices: proxyGetDef({}, 0n),
  usbApr: {
    apr: 0n,
    aprDecimals: 10,
  },
  // bVaultsData: defBVaultsData(),
})

export const FetcherProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  useResetBVaultsData()
  const chainId = useCurrentChainId()
  useEthersProvider()
  const prices: FetcherContextInterface['prices'] = useMemoOfChainId(() => proxyGetDef({ [USB_ADDRESS[chainId]]: DECIMAL }, 0n))
  useSetLVaultPrices(prices)
  const usbApr = useUSBApr()
  useUpdatePtypoolApy(prices)

  return (
    <FetcherContext.Provider
      value={{
        prices,
        usbApr,
      }}
    >
      {children}
    </FetcherContext.Provider>
  )
}
