import { VaultConfig } from '@/config/swap'
import { Address, stringToHex } from 'viem'
import { SliceFun } from './types'
import { getPC } from './publicClient'
import { abiPriceFeed, abiPtyPool, abiVault, abiVaultQuery } from '@/config/abi'
import { DECIMAL, DECIMAL_PRICE } from '@/constants'

export type LVaultsStore = {
  lvaults: {
    [k: Address]: {
      // lockedAsset
      assetBalance: bigint
      usbTotalSupply: bigint
      vaultMode: number
      Y: bigint
      latestPrice: bigint
      // pools
      buyPoolTotalStaking: bigint
      sellPoolTotalStaking: bigint
      buyPoolBalance: bigint
      // discount
      CircuitBreakPeriod: bigint
      discountEnable: boolean
    } & (
      | {
          isStable: false
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
        }
      | {
          isStable: true
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
        }
    )
  }
  user: {
    [k: Address]:
      | {
          buyPool_userStakingBalance: bigint
          buyPool_earnedMatchedToken: bigint
          buyPool_earnedStakingYields: bigint
          buyPool_earnedMatchingYields: bigint
          sellPool_userStakingBalance: bigint
          sellPool_earnedMatchedToken: bigint
        //   sellPool_earnedStakingYields: bigint
          sellPool_earnedMatchingYields: bigint
        }
      | undefined
  }
  updateLVaults: (lvcs: VaultConfig[]) => Promise<LVaultsStore['lvaults']>
  updateUserLVault: (lvc: VaultConfig, user: Address) => Promise<LVaultsStore['user'][Address]>
}

export const sliceLVaultsStore: SliceFun<LVaultsStore> = (set, get, init = {}) => {
  const updateLVaults = async (lvcs: VaultConfig[]) => {
    const pc = getPC()
    if (lvcs.length == 0) return {}

    const datas = await Promise.all(
      lvcs.map((vc) =>
        Promise.all([
          pc.readContract({ abi: abiVaultQuery, address: vc.vaultQuery, functionName: vc.isStable ? 'getStableVaultState' : 'getVaultState', args: [vc.vault] }),
          pc.readContract({ abi: abiVault, address: vc.vault, functionName: 'assetBalance' }),
          pc.readContract({ abi: abiVault, address: vc.vault, functionName: 'usdTotalSupply' }),
          pc.readContract({ abi: abiVault, address: vc.vault, functionName: 'vaultMode' }),
          pc.readContract({ abi: abiVault, address: vc.vault, functionName: 'paramValue', args: [stringToHex('Y', { size: 32 })] }),
          vc.ptyPoolBelowAddress ? pc.readContract({ abi: abiPtyPool, address: vc.ptyPoolBelowAddress, functionName: 'totalStakingBalance' }) : Promise.resolve(0n),
          vc.ptyPoolAboveAddress ? pc.readContract({ abi: abiPtyPool, address: vc.ptyPoolAboveAddress, functionName: 'totalStakingBalance' }) : Promise.resolve(0n),
          vc.ptyPoolBelowAddress ? pc.getBalance({ address : vc.ptyPoolBelowAddress }): Promise.resolve(0n),
          pc.readContract({ abi: abiPriceFeed, address: vc.assetTokenFeed, functionName: 'latestPrice' }),
          pc.readContract({ abi: abiVault, address: vc.vault, functionName: 'paramValue', args: [stringToHex('CircuitBreakPeriod', { size: 32 })] }),
        ]).then<LVaultsStore['lvaults'][Address]>(
          ([state, assetBalance, usbTotalSupply, vaultMode, Y, buyPoolTotalStaking, sellPoolTotalStaking,buyPoolBalance, latestPrice, CircuitBreakPeriod]) => {
            const now = BigInt(Math.floor(new Date().getTime() / 1000))
            const discountEnable = vc.isStable
              ? (state as any).M_USDCx > 0n && state.aar < state.AARS
              : vaultMode == 2 && (state.aar >= (state as any).AARC || now - (state as any).AARBelowCircuitBreakerLineTime > CircuitBreakPeriod)
            return {
              ...{ ...state, isStable: !!vc.isStable },
              assetBalance,
              usbTotalSupply,
              vaultMode: vc.isStable ? (state.aar < state.AARS && (state as any).M_USDC > 0n ? 2 : 1) : vaultMode,
              Y,
              buyPoolTotalStaking,
              sellPoolTotalStaking,
              buyPoolBalance,
              latestPrice: (latestPrice * DECIMAL) / DECIMAL_PRICE,
              CircuitBreakPeriod,
              discountEnable,
            } as any
          },
        ),
      ),
    )
    const map = datas.reduce<LVaultsStore['lvaults']>((map, item, i) => ({ ...map, [lvcs[i].vault]: item }), {})
    set({ lvaults: { ...get().lvaults, ...map } })
    return map
  }

  const updateUserLVault = async (lvc: VaultConfig, user: Address) => {
    const pc = getPC()
    if (lvc.isStable) {
      return
    }
    const [
      buyPool_userStakingBalance,
      buyPool_earnedMatchedToken,
      buyPool_earnedStakingYields,
      buyPool_earnedMatchingYields,
      sellPool_userStakingBalance,
      sellPool_earnedMatchedToken,
    //   sellPool_earnedStakingYields,
      sellPool_earnedMatchingYields,
    ] = await Promise.all([
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolBelowAddress!, functionName: 'userStakingBalance', args: [user] }),
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolBelowAddress!, functionName: 'earnedMatchedToken', args: [user] }),
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolBelowAddress!, functionName: 'earnedStakingYields', args: [user] }).catch(() => 0n),
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolBelowAddress!, functionName: 'earnedMatchingYields', args: [user] }),
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolAboveAddress!, functionName: 'userStakingBalance', args: [user] }),
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolAboveAddress!, functionName: 'earnedMatchedToken', args: [user] }),
    //   pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolAboveAddress!, functionName: 'earnedStakingYields', args: [user] }).catch(() => 0n),
      pc.readContract({ abi: abiPtyPool, address: lvc.ptyPoolAboveAddress!, functionName: 'earnedMatchingYields', args: [user] }),
    ])
    const data: LVaultsStore['user'][Address] = {
      buyPool_userStakingBalance,
      buyPool_earnedMatchedToken,
      buyPool_earnedStakingYields,
      buyPool_earnedMatchingYields,
      sellPool_userStakingBalance,
      sellPool_earnedMatchedToken,
    //   sellPool_earnedStakingYields,
      sellPool_earnedMatchingYields,
    }
    set({ user: { ...get().user, [lvc.vault]: data } })
    return data
  }
  return { lvaults: {}, user: {}, ...init, updateLVaults, updateUserLVault }
}
