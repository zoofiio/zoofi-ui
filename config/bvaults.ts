import { Address } from 'viem'
import { berachainTestnet } from './network'

export type BVaultConfig = {
  vault: Address
  asset: Address
  assetSymbol: string
  pToken: Address
  pTokenSymbol: string
  yTokenSymbol: string
  protocolAddress: Address
  protocolSettingsAddress: Address
}
export const ZooProtocolAddress = '0xF86a9a53D963B7a845F3496a97d0dB11cEc3c4E0'
export const ZooProtocolSettingsAddress = '0x97d82C639835F4EfaCC366fdE78CA0c4EC2a2A83'

export const BVAULTS_CONFIG: { [key: number]: BVaultConfig[] } = {
  [berachainTestnet.id]: [
    // {
    //   vault: '0x07e3583C65565469521501e94c93C05F41ADBB4c',
    //   asset: '0x614352b4028f429168D153bA18DC7FEd667E1B4f',
    //   assetSymbol: 'iRED',
    //   pToken: '0x3A217AA5e018bDfd7Cc09653FA3CBd7633EAD138',
    //   pTokenSymbol: 'piRED',
    //   yTokenSymbol: 'yiRED',
    //   protocolAddress: ZooProtocolAddress,
    //   protocolSettingsAddress: ZooProtocolSettingsAddress,
    // },
    {
      vault: '0x6a6B9817d221816187aD335030b0EF7c17051EfA',
      asset: '0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96',
      assetSymbol: 'HONEY-USDC',
      pToken: '0xbB6A3a94cccAe455444e9a1E1CD478CAc278Be3E',
      pTokenSymbol: 'pHONEY-USDC',
      yTokenSymbol: 'yHONEY-USDC',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
    },
    {
      vault: '0xF778D2B9E0238D385008e916D7245F51959Ba279',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x1f779e869E4769bD9129b7FE8B3a46350FA2Fbe7',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
    },
    {
      vault: '0x2fbf17c3861079d948383175719C89143754F1e7',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x243fcAD9A9C25bAdfbfebE9f7319404b7B90914E',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
    },
  ],
}
