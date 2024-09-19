import { ETHSymbol, PLAIN_VAULTS_CONFIG, USB_ADDRESS, USBSymbol, VAULTS_CONFIG } from '@/config/swap'
import { Address } from 'viem'

export const getTokens = (chainId: number, filterNative = true) => {
  return VAULTS_CONFIG[chainId]
    .map((item) => ({
      symbol: item.assetTokenSymbol,
      address: item.assetTokenAddress,
    }))
    .concat(
      VAULTS_CONFIG[chainId].map((item) => ({
        symbol: item.xTokenSymbol,
        address: item.xTokenAddress,
      })),
    )
    .concat([
      {
        symbol: USBSymbol,
        address: USB_ADDRESS[chainId],
      },
    ])
    .concat(
      (PLAIN_VAULTS_CONFIG[chainId] || []).map((item) => ({
        symbol: item.assetTokenSymbol,
        address: item.assetToken,
      })),
    )
    .filter((item) => (filterNative ? item.symbol !== ETHSymbol : true))
}

export const LP_TOKENS: { [k: Address]: { poolType: bigint; base: Address; quote: Address } } = {
  '0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96': { poolType: 36000n, base: '0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03', quote: '0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c' },
  '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7': { poolType: 36000n, base: '0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03', quote: '0x7507c1dc16935b82698e4c63f2746a2fcf994df8' },
}
