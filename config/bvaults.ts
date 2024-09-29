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
  bQueryAddres: Address
  lpPoolIdx?: number
  onEnv?: ('beta' | 'test' | 'prod')[]
}
export const ZooProtocolAddress = '0xF86a9a53D963B7a845F3496a97d0dB11cEc3c4E0'
export const ZooProtocolSettingsAddress = '0x97d82C639835F4EfaCC366fdE78CA0c4EC2a2A83'
export const CrocQueryAddress: { [k: number]: Address } = {
  [berachainTestnet.id]: '0x8685CE9Db06D40CBa73e3d09e6868FE476B5dC89',
}

export const HONEY_Address: { [k: number]: Address } = {
  [berachainTestnet.id]: '0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03',
}
export const BQueryAddress: { [k: number]: Address } = {
  [berachainTestnet.id]: '0x66871426D7A7E2CD1Cb5171ed2ebCf6E755a64Bc',
}

export const BVAULTS_CONFIG: { [key: number]: BVaultConfig[] } = {
  [berachainTestnet.id]: [
    // new
    {
      vault: '0x686C72Aecf2D08410A8270D514B0Dc3Cc72e5288',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x19fa905c43B7B3e4698266250f2f7909610b54B1',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta'],
    },
    {
      vault: '0xB0a0C11a77E67acBD161cc44743a1774f2C4Fff5',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x8b117042C1C6C45656bE0A2160CEbD405C6016bc',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta', 'test'],
    },
    {
      vault: '0xF4396DEe48A44A2191ec5763Fc4b6E5aDE7e41e7',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0xb6fa36aEF82BaF2589Cc31c69A33624612c95Ed9',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta'],
    },
    {
      vault: '0x90e0A49726c2fF0fa6e4382446688AF883d10133',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0xEA45BD60bc0f7848759ACaE9B938c24D2Ea7481c',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta'],
    },
    {
      vault: '0x9700FEa232560E4048DD924623491926282125bE',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x575287Cd8CB9A49e0EE00Bf0C71Eac337Ab8FeBa',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta'],
    },
  ],
}

export const CALC_LIQ: { [k: number]: Address } = {
  [berachainTestnet.id]: '0xa6b985dDa4D24B66fd4Ac2041395a82DcAdfD877',
}
