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
}

export const BVAULTS_CONFIG: { [key: number]: BVaultConfig[] } = {
  [berachainTestnet.id]: [
    {
      vault: '0x',
      asset: '0x',
      assetSymbol: 'iRED',
      pToken: '0x',
      pTokenSymbol: 'piRED',
      yToken: '0x',
      yTokenSymbol: 'yiRED',
    },
  ],
}
