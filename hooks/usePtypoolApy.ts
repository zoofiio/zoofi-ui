import { USB_ADDRESS, VAULTS_CONFIG } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { FetcherContextInterface } from '@/providers/fetcher'
import { useEffect } from 'react'
import { Address, parseUnits } from 'viem'
import { create } from 'zustand'
import { useCurrentChainId } from './useCurrentChainId'

type Apys = { [k: Address]: { staking: bigint; matching: bigint } }

export const usePtypoolApy = create<Apys & { update: (data: Partial<Apys>) => void }>((set) => ({
  update: set,
}))

export function useUpdatePtypoolApy(
  earns: FetcherContextInterface['earns'],
  prices: FetcherContextInterface['prices'],
  vaultsState: FetcherContextInterface['vaultsState'],
) {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const total = Object.values(earns).reduce((sum, item) => item.totalStake + sum, 0n)
  const { update } = usePtypoolApy()
  useEffect(() => {
    vcs.forEach((vc) => {
      const vs = vaultsState[vc.vault]

      if (vc.ptyPoolAboveAddress && earns[vc.ptyPoolAboveAddress]) {
        update({
          [vc.ptyPoolAboveAddress]: {
            staking: parseUnits('0.025', 10),
            // staking: sellStakingApy(vc.ptyPoolAboveAddress),
            matching: 0n,
          },
        })
      }
      if (vc.ptyPoolBelowAddress && earns[vc.ptyPoolBelowAddress]) {
        const staked = earns[vc.ptyPoolBelowAddress].totalStake * prices[USB_ADDRESS[chainId]]
        console.info('hhh:', staked)
        const apy =
          staked > 0n && vs.settingsDecimals > 0n
            ? (vs.M_ETHx * vs.Y * prices[vc.xTokenAddress] * DECIMAL) / 2n / staked / vs.settingsDecimals ** 10n
            : 0n
        update({
          [vc.ptyPoolBelowAddress]: {
            staking: (apy * 10n ** 10n) / DECIMAL,
            // staking: buyStakingApy(vc.ptyPoolBelowAddress),
            matching: 0n,
          },
        })
      }
    })
  }, [vcs, total, earns, prices, vaultsState])
}
