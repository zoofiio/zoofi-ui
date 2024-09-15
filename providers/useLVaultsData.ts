import { USB_ADDRESS, VaultConfig, VAULTS_CONFIG } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useMemoOfChainId } from '@/hooks/useMemoOfChain'
import { aarToNumber, proxyGetDef, retry } from '@/lib/utils'
import { Address } from 'viem'
import { BoundStoreType, useBoundStore, useStoreShallow } from './useBoundStore'
import { useAccount } from 'wagmi'
import { getCurrentChainId } from '@/config/network'

export const defLVault = proxyGetDef<Exclude<BoundStoreType['sliceLVaultsStore']['lvaults'][Address], undefined>>({ vaultMode: 0, discountEnable: false }, 0n)
export const defUserLVault = proxyGetDef<Exclude<BoundStoreType['sliceLVaultsStore']['user'][Address], undefined>>({}, 0n)
export function useLVault(vault: Address) {
  return useStoreShallow((s) => s.sliceLVaultsStore.lvaults[vault] || defLVault)
}

export function useUserLVault(vault: Address) {
  return useStoreShallow((s) => s.sliceLVaultsStore.user[vault] || defUserLVault)
}

export function useVaultLeverageRatio(vc: VaultConfig) {
  const lvd = useLVault(vc.vault)
  const aarNum = aarToNumber(lvd.aar, lvd.AARDecimals)
  const leverage = Math.max(0, 1 + 1 / (aarNum - 1))
  return leverage
}

export function useValutsLeverageRatio() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const leverageMap: { [k: Address]: number } = useMemoOfChainId(() => proxyGetDef({}, 0))
  const lvaults = useStoreShallow((s) => s.sliceLVaultsStore.lvaults)
  vcs.forEach((vc) => {
    const vs = lvaults[vc.vault]
    const aarNum = vs ? aarToNumber(vs.aar, vs.AARDecimals) : 0
    leverageMap[vc.vault] = Math.max(0, 1 + 1 / (aarNum - 1))
  })
  return leverageMap
}

export function useSetLVaultPrices(prices: { [k: Address]: bigint }) {
  const lvaults = useStoreShallow((s) => s.sliceLVaultsStore.lvaults)
  const totalSupply = useStoreShallow((s) => s.sliceTokenStore.totalSupply)
  const chainId = useCurrentChainId()
  VAULTS_CONFIG[chainId].forEach((vc) => {
    const lvd = lvaults[vc.vault] || defLVault
    const _assetTotal = lvd.assetBalance
    const assetPrice = lvd.latestPrice
    const _usbTotalSupply = lvd.usbTotalSupply
    const xTotalSupply = totalSupply[vc.xTokenAddress] || 0n
    let xPrice =
      xTotalSupply > 0n && _assetTotal > 0n && assetPrice > 0n && _usbTotalSupply > 0n && _assetTotal * assetPrice > _usbTotalSupply * DECIMAL
        ? (_assetTotal * assetPrice - _usbTotalSupply * DECIMAL) / xTotalSupply
        : 0n
    prices[vc.xTokenAddress] = xPrice
    prices[vc.assetTokenAddress] = assetPrice
    // aar < 100%
    if (xTotalSupply > 0n && _assetTotal > 0n && assetPrice > 0n && _usbTotalSupply > 0n && _assetTotal * assetPrice < _usbTotalSupply * DECIMAL) {
      prices[USB_ADDRESS[chainId]] = (_assetTotal * assetPrice) / _usbTotalSupply
    }
  })
}

export function useUSBApr() {
  const chainId = useCurrentChainId()
  const lvaults = useStoreShallow((s) => s.sliceLVaultsStore.lvaults)
  let enableCount = 0
  let multiTotal = 0n
  let total = 0n
  VAULTS_CONFIG[chainId].forEach((vc) => {
    const lvd = lvaults[vc.vault] || defLVault
    if (lvd.isStable) {
      multiTotal += (lvd.M_USB_USDC * lvd.Y * lvd.aar) / 10n ** lvd.AARDecimals
      total += lvd.M_USB_USDC
      if (lvd.M_USB_USDC > 0n && lvd.Y > 0n) {
        enableCount++
      }
    } else {
      multiTotal += lvd.M_USB_ETH * lvd.Y
      total += lvd.M_USB_ETH
      if (lvd.M_USB_ETH > 0n && lvd.Y > 0n) {
        enableCount++
      }
    }
  })
  return { apr: total > 0n ? multiTotal / total : 0n, aprDecimals: 10 }
}

export function useUpLVaultOnUserAction(vc: VaultConfig) {
  const { address } = useAccount()
  return () => {
    retry(
      async () => {
        if (!address) return
        const lvs = useBoundStore.getState().sliceLVaultsStore
        const tokens = [vc.assetTokenAddress, vc.xTokenAddress, USB_ADDRESS[getCurrentChainId()]]
        await Promise.all([
          lvs.updateLVaults([vc]),
          lvs.updateUserLVault(vc, address),
          useBoundStore.getState().sliceTokenStore.updateTokensBalance(tokens, address),
          useBoundStore.getState().sliceTokenStore.updateTokenTotalSupply(tokens),
        ])
      },
      3,
      1000,
    ).catch(console.error)
  }
}
