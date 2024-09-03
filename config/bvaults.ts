import { Address } from 'viem'
import { berachainTestnet } from './network'

export type BVaultConfig = {
  vault: Address
  asset: Address
  assetSymbol: string
  pToken: Address
  pTokenSymbol: string
  yToken: Address
  yTokenSymbol: string

  protocolAddress: Address
  protocolSettingsAddress: Address
  vaultQueryAddress: Address
}
export const ZooProtocolAddress = '0x28fb8512e1cac919e10694bD5CCa8d88f36Ab202'
export const ZooProtocolSettingsAddress = '0x853CeB293aaeAa8c378AA1357685b05A74c6B068'
export const BVaultQueryAddress = '0xa84AF09c38a1Cd5F714303C138A30ba66D051F7f'

export const BVAULTS_CONFIG: { [key: number]: BVaultConfig[] } = {
  [berachainTestnet.id]: [
    {
      vault: '0x2e2DDCa8caA76Cc17f72275A7c61EAa3810CAA3c',
      asset: '0x28fb8512e1cac919e10694bD5CCa8d88f36Ab202',
      assetSymbol: 'iRED',
      pToken: '0x',
      pTokenSymbol: 'piRED',
      yToken: '0x',
      yTokenSymbol: 'yiRED',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      vaultQueryAddress: BVaultQueryAddress,
    },
  ],
}
