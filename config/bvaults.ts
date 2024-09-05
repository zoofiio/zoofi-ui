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
export const ZooProtocolAddress = '0x6763511669c0202dBC6396583a0bb70D481803F5'
export const ZooProtocolSettingsAddress = '0xf65408DdB28c052ab593555361162067d66bE15F'

export const BVAULTS_CONFIG: { [key: number]: BVaultConfig[] } = {
  [berachainTestnet.id]: [
    {
      vault: '0xf13035cf330921D71C4c7120d3966400045429AC',
      asset: '0xdDEe6A193C33Af0E4641c80fAfAbD447C03fFf07',
      assetSymbol: 'iRED',
      pToken: '0xc156ea7A76e0B4e10D355861450E6FEB658ace2a',
      pTokenSymbol: 'piRED',
      yTokenSymbol: 'yiRED',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
    },
    {
      vault: '0xb167b0D3118ba521C1c5C61011bD9Cb071a50bb3',
      asset: '0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96',
      assetSymbol: 'HONEY-USDC',
      pToken: '0xC71537F14a2577F14Aa1988a981fe575908E15C9',
      pTokenSymbol: 'pHONEY-USDC',
      yTokenSymbol: 'yHONEY-USDC',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
    },
  ],
}
