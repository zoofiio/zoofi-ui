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
    //   vault: '0xD0f50De901bd0445dC04cA861B9D3D2b20a0f8C2',
    //   asset: '0x614352b4028f429168D153bA18DC7FEd667E1B4f',
    //   assetSymbol: 'iRED',
    //   pToken: '0xd10ceF701dCe7C60E009D193Cd7Cdbf4c415bCe6',
    //   pTokenSymbol: 'piRED',
    //   yTokenSymbol: 'yiRED',
    //   protocolAddress: ZooProtocolAddress,
    //   protocolSettingsAddress: ZooProtocolSettingsAddress,
    // },
    {
      vault: '0xc37dF6905923574AeFEb2aED3Ea3546b4112433a',
      asset: '0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96',
      assetSymbol: 'HONEY-USDC',
      pToken: '0x9CdcCf7784689e1Fe8C2ADDbdEb3b8D34c4F221b',
      pTokenSymbol: 'pHONEY-USDC',
      yTokenSymbol: 'yHONEY-USDC',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
    },
  ],
}
