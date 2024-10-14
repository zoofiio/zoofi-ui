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
  [berachainTestnet.id]: '0xDf1126d3627b7f5D2a44d978A7180AcbD3c34aB6',
}

export const BVAULTS_CONFIG: { [key: number]: BVaultConfig[] } = {
  [berachainTestnet.id]: [
    // new
    {
      vault: '0x74D124D12B2ef774C99f6c304feD0A1aA7A797cB',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0xF8362a475d72Cb257612Bf0F0A48558288fFe379',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta', 'test'],
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
      vault: '0x5C88005534FB5C5B01445eC5bC944ebA0818554f',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x19f4cE524268a01bfAFf8B433110d8304b096be0',
      pTokenSymbol: 'pHONEY-BERA',
      yTokenSymbol: 'yHONEY-BERA',
      protocolAddress: ZooProtocolAddress,
      protocolSettingsAddress: ZooProtocolSettingsAddress,
      bQueryAddres: BQueryAddress[berachainTestnet.id],
      onEnv: ['beta'],
    },
    {
      vault: '0x9Ef9cE44c82111e967904059edf12701e17e6C03',
      asset: '0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7',
      assetSymbol: 'HONEY-WBERA',
      pToken: '0x0C2553919748093b0760EA825C85dc5a72142932',
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
