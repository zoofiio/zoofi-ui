import { getBigint, proxyGetDef } from '@/lib/utils'
import { useMemoOfChainId } from './useMemoOfChain'
import { usePtypoolApy } from './usePtypoolApy'
import { useValutsLeverageRatio } from './useVaultLeverageRatio'
import { useContext, useMemo } from 'react'
import { FetcherContext } from '@/providers/fetcher'
import { useCurrentChainId } from './useCurrentChainId'
import { NATIVE_TOKEN_ADDRESS, USB_ADDRESS, VAULTS_CONFIG } from '@/config/swap'
import { parseUnits } from 'viem'

export function useTokenApys() {
  const tokenapys: { [k: string]: bigint } = useMemoOfChainId(() => proxyGetDef({}, 0n))
  const chainId = useCurrentChainId()
  const { prices, usbApr, stableVaultsState } = useContext(FetcherContext)
  const levrages = useValutsLeverageRatio()
  const apys = usePtypoolApy()
  useMemo(() => {
    const vcs = VAULTS_CONFIG[chainId]
    const usbApyPoolBuy = getBigint(apys[vcs[0].ptyPoolBelowAddress as any], 'staking')
    // 0.06504987 Points/Block/ETH
    tokenapys[USB_ADDRESS[chainId]] = usbApr.apr
    tokenapys['USB_END'] = usbApr.apr + usbApyPoolBuy
    const base = parseUnits('0.1', 10)
    vcs.forEach((vc) => {
      if (vc.assetTokenAddress != NATIVE_TOKEN_ADDRESS) {
        const levrageSub = levrages[vc.vault] > 1n ? parseUnits(`${(levrages[vc.vault] - 1).toFixed(2)}`, 10) : 0n
        const mDecimal = parseUnits('1', 10)
        // tokenapys[vc.xTokenAddress] =
        //   (levrageSub * (base - (stableVaultsState[vc.vault].Y * stableVaultsState[vc.vault].aar) / mDecimal) +
        //     base * mDecimal) /
        //   mDecimal
        // console.info(vc.xTokenSymbol,levrageSub, base, stableVaultsState[vc.vault].Y, stableVaultsState[vc.vault].aar)
        tokenapys[vc.xTokenAddress] = (levrageSub * (base - stableVaultsState[vc.vault].Y * stableVaultsState[vc.vault].aar/ mDecimal) + base * mDecimal) / mDecimal
      }
    })
    return null
  }, [chainId, prices, levrages, usbApr, apys, stableVaultsState])
  return tokenapys
}
