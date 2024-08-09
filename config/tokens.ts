import { ETHSymbol, PLAIN_VAULTS_CONFIG, USB_ADDRESS, USBSymbol, VAULTS_CONFIG } from '@/config/swap'

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
