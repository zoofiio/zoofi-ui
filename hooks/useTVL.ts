import {
  NATIVE_TOKEN_ADDRESS,
  OLD_VAULTS_CONFIG,
  PLAIN_VAULTS_CONFIG,
  USB_ADDRESS,
  VAULTS_CONFIG,
  VAULT_QUERY_ADDRESS,
} from '@/config/swap'
import { useCurrentChainId } from './useCurrentChainId'
import { useContext } from 'react'
import { FetcherContext } from '@/providers/fetcher'
import { DECIMAL } from '@/constants'
import { useWandContractReads } from './useWand'

import { abiPtyPool, abiVaultQuery } from '@/config/abi'
import { getBigint } from '@/lib/utils'

export function useTVLV1() {
  const chainId = useCurrentChainId()
  const ethVC = OLD_VAULTS_CONFIG[chainId]?.[0]
  const usdbVC = OLD_VAULTS_CONFIG[chainId]?.[1]
  const { prices } = useContext(FetcherContext)
  const { data } = useWandContractReads({
    contracts: [
      {
        abi: abiVaultQuery,
        address: VAULT_QUERY_ADDRESS[chainId],
        functionName: 'getVaultState',
        args: [ethVC?.vault],
      },
      {
        abi: abiVaultQuery,
        address: VAULT_QUERY_ADDRESS[chainId],
        functionName: 'getStableVaultState',
        args: [usdbVC?.vault],
      },
      {
        abi: abiPtyPool,
        address: ethVC?.ptyPoolAboveAddress,
        functionName: 'totalStakingBalance',
      },
    ],
  })

  const depositETH = getBigint(data, [0, 'result', 'M_ETH'])
  const depositUSDB = getBigint(data, [1, 'result', 'M_USDC'])
  const stakingETH = getBigint(data, [2, 'result'])
  return (
    ((depositETH + stakingETH) * prices[NATIVE_TOKEN_ADDRESS]) / DECIMAL +
    (depositUSDB * prices[usdbVC?.assetTokenAddress]) / DECIMAL
  )
}

export function useTVL() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  const { earns, prices, totalSupplies, vaultUSBTotal, plainVaultsStat } = useContext(FetcherContext)
  const vaultUsbTotal = vcs.map((v) => vaultUSBTotal[v.vault]).reduce((a, b) => a + b, 0n)
  const tvlItems = [{ name: USBSymbol, symbol: USBSymbol, address: USB_ADDRESS[chainId] }]
    .concat(
      vcs.map((v) => ({
        name: v.xTokenSymbol + v.version,
        symbol: v.xTokenSymbol,
        address: v.xTokenAddress,
      })),
    )
    .map((item) => {
      const price = prices[item.address]
      const amount = item.symbol == USBSymbol ? vaultUsbTotal : totalSupplies[item.address]
      const usdAmount = (price * amount) / DECIMAL
      return {
        ...item,
        price,
        amount,
        usdAmount,
      }
    })
    .concat(
      vcs
        .filter((vc) => !vc.isStable)
        .map((vc) => {
          const amount = earns[vc.ptyPoolAboveAddress as any].totalStake + earns[vc.ptyPoolBelowAddress as any].balance
          const price = prices[vc.assetTokenAddress]
          const usdAmount = (price * amount) / DECIMAL
          return {
            name: vc.assetTokenSymbol + vc.version,
            symbol: vc.assetTokenSymbol,
            address: vc.assetTokenAddress,
            price,
            amount,
            usdAmount,
          }
        }),
    )
    .concat(
      pvcs.map((pvc) => {
        const price = prices[pvc.assetToken]
        const amount = plainVaultsStat[pvc.vault].totalSupply
        const usdAmount = (price * amount) / DECIMAL
        return {
          name: pvc.assetTokenSymbol,
          symbol: pvc.assetTokenSymbol,
          address: pvc.assetToken,
          price,
          amount,
          usdAmount,
        }
      }),
    )

  const tvl = tvlItems.reduce((_sum, item) => _sum + item.usdAmount, 0n)
  return { tvl, tvlItems }
}
