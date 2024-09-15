import { USB_ADDRESS, VAULTS_CONFIG } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useStoreShallow } from '@/providers/useBoundStore'
import { useEffect } from 'react'
import { Address, parseUnits } from 'viem'
import { create } from 'zustand'
import { useCurrentChainId } from './useCurrentChainId'

type Apys = { [k: Address]: { staking: bigint; matching: bigint } }

export const usePtypoolApy = create<Apys & { update: (data: Partial<Apys>) => void }>((set) => ({
  update: set,
}))

export function useUpdatePtypoolApy(prices: { [k: Address]: bigint }) {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const lvaults = useStoreShallow((s) => s.sliceLVaultsStore.lvaults)
  useEffect(() => {
    console.info('updatePtypoolApy')
    vcs.forEach((vc) => {
      const vs = lvaults[vc.vault]
      if (vc.ptyPoolAboveAddress && vs && vs.sellPoolTotalStaking) {
        usePtypoolApy.getState().update({
          [vc.ptyPoolAboveAddress]: {
            staking: parseUnits('0.025', 10),
            // staking: sellStakingApy(vc.ptyPoolAboveAddress),
            matching: 0n,
          },
        })
      }
      if (vc.ptyPoolBelowAddress && vs && vs.buyPoolTotalStaking && !vs.isStable) {
        const staked = vs && vs.sellPoolTotalStaking * prices[USB_ADDRESS[chainId]]
        const apy = staked > 0n && vs.settingsDecimals > 0n ? (vs.M_ETHx * vs.Y * prices[vc.xTokenAddress] * DECIMAL) / 2n / staked / vs.settingsDecimals ** 10n : 0n
        usePtypoolApy.getState().update({
          [vc.ptyPoolBelowAddress]: {
            staking: (apy * 10n ** 10n) / DECIMAL,
            // staking: buyStakingApy(vc.ptyPoolBelowAddress),
            matching: 0n,
          },
        })
      }
    })
  }, [vcs, lvaults, prices, chainId])
}
