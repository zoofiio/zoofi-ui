import { getPtypoolYields } from '@/config/api'
import { usePlainVualtsReads } from '@/hooks/usePlainVaultsReads'
import { Address } from 'viem'

export type LVaultDTO = {
  vault: Address
  state: {
    M_ETH: bigint
    P_ETH: bigint
    P_ETH_DECIMALS: bigint
    M_USB_ETH: bigint
    M_ETHx: bigint
    aar: bigint
    AART: bigint
    AARS: bigint
    AARU: bigint
    AARC: bigint
    AARDecimals: bigint
    RateR: bigint
    AARBelowSafeLineTime: bigint
    AARBelowCircuitBreakerLineTime: bigint
    settingsDecimals: bigint
  } & {
    Y: bigint
  }
  aar: bigint
}
export type LVaultDetailsDTO = {}
export type UserLVaultDTO = {}

export type LVaultsDataStore = {
  balances: { [k: string]: bigint }
  totalSupplies: { [k: string]: bigint }
  prices: { [k: string]: bigint }
  assetLocked: { [k: string]: bigint }

  aar: { [k: Address | string]: number }
  vaultUSBTotal: { [k: Address]: bigint }
  vaultsMode: { [k: Address | string]: number }
  vaultsDiscount: { [k: Address | string]: boolean }
  vaultsState: {
    [k: Address | string]: {
      M_ETH: bigint
      P_ETH: bigint
      P_ETH_DECIMALS: bigint
      M_USB_ETH: bigint
      M_ETHx: bigint
      aar: bigint
      AART: bigint
      AARS: bigint
      AARU: bigint
      AARC: bigint
      AARDecimals: bigint
      RateR: bigint
      AARBelowSafeLineTime: bigint
      AARBelowCircuitBreakerLineTime: bigint
      settingsDecimals: bigint
    } & {
      Y: bigint
    }
  }
  stableVaultsState: {
    [k: Address | string]: {
      M_USDC: bigint
      P_USDC: bigint
      P_USDC_DECIMALS: bigint
      M_USB_USDC: bigint
      M_USDCx: bigint
      aar: bigint
      AARS: bigint
      AARDecimals: bigint
      RateR: bigint
      AARBelowSafeLineTime: bigint
    } & {
      Y: bigint
    }
  }

  earns: {
    [k: Address]: {
      stake: bigint
      stakeSymbol: string
      match: bigint
      matchSymbol: string
      earn: bigint
      earnSymbol: string
      earnForMatch: bigint
      totalStake: bigint
      balance: bigint
    }
  }

  usbApr: {
    apr: bigint
    aprDecimals: number
  }

  // ptypoolYields?: UnPromise<typeof getPtypoolYields>
  // plainVaultsStat: ReturnType<typeof usePlainVualtsReads>
  lvaults: { [k: Address]: LVaultDTO }
  lvaultsDetails: { [k: Address]: LVaultDetailsDTO }
  userLvaults: { [k: Address]: UserLVaultDTO }
}
