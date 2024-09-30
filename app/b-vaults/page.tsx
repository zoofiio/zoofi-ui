'use client'

import { BVaultCard, BVaultCardComming, BVaultHarvest, BVaultMint, BVaultRedeem } from '@/components/b-vault'
import { BVaultAddReward } from '@/components/bvault-add-reward'
import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { SimpleTabs } from '@/components/simple-tabs'
import { abiBVault } from '@/config/abi'
import { BVaultConfig, BVAULTS_CONFIG } from '@/config/bvaults'
import { ENV, isBETA, isLOCL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useLoadBVaults } from '@/hooks/useLoads'
import { getPC } from '@/providers/publicClient'
import { useBoundStore } from '@/providers/useBoundStore'
import { useBVault, useEpochesData } from '@/providers/useBVaultsData'
import { useQuery } from '@tanstack/react-query'
import { Grid } from '@tremor/react'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useMemo } from 'react'
import { useAccount } from 'wagmi'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

const SupportTabs = ['mint', 'harvest'] as const

function BVaultPage({ bvc }: { bvc: BVaultConfig }) {
  const { address } = useAccount()
  const bvd = useBVault(bvc.vault)

  useQuery({
    queryKey: ['UpdateVaultDetails', bvc, bvd],
    queryFn: async () => {
      if (bvd.epochCount == 0n) return false
      await useBoundStore.getState().sliceBVaultsStore.updateEpoches(bvc)
      return true
    },
  })
  const epoches = useEpochesData(bvc.vault)
  useQuery({
    queryKey: ['UpdateUserData', bvc, epoches, address],
    queryFn: async () => {
      if (epoches.length == 0 || !address) return false
      console.info('epochesOld:', epoches)
      await useBoundStore.getState().sliceUserBVaults.updateEpoches(bvc, address!, epoches)
      return true
    },
  })
  const { data: showAddReward } = useQuery({
    queryKey: ['checkIsBriber', address, bvc],
    queryFn: async () => {
      if (!address) return false
      const pc = getPC()
      const passes = await Promise.all([
        pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'isBriber', args: [address] }),
        pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'owner' }).then((owner) => owner == address),
      ])
      return passes.includes(true)
    },
  })
  const data =
    showAddReward && isLOCL
      ? [
          {
            tab: bvd.closed ? 'Redeem' : 'Mint',
            content: bvd.closed ? (
              <div className='max-w-4xl mx-auto pt-8'>
                <BVaultRedeem bvc={bvc} />
              </div>
            ) : (
              <BVaultMint bvc={bvc} />
            ),
          },
          {
            tab: 'Harvest',
            content: <BVaultHarvest bvc={bvc} />,
          },
          {
            tab: 'Add Reward',
            content: <BVaultAddReward bvc={bvc} />,
          },
        ]
      : [
          {
            tab: bvd.closed ? 'Redeem' : 'Mint',
            content: bvd.closed ? (
              <div className='max-w-4xl mx-auto pt-8'>
                <BVaultRedeem bvc={bvc} />
              </div>
            ) : (
              <BVaultMint bvc={bvc} />
            ),
          },
          {
            tab: 'Harvest',
            content: <BVaultHarvest bvc={bvc} />,
          },
        ]
  return (
    <SimpleTabs
      listClassName='flex-wrap p-0 mb-5 md:gap-14'
      triggerClassName='text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap'
      contentClassName='gap-5'
      data={data}
    />
  )
}

export default function Vaults() {
  const chainId = useCurrentChainId()
  const bvcs = useMemo(() => BVAULTS_CONFIG[chainId].filter((vc) => vc.onEnv && vc.onEnv.includes(ENV)), [chainId, ENV])
  const params = useSearchParams()
  const paramsVault = params.get('vault')
  const paramsTab = params.get('tab')
  const currentTab = SupportTabs.includes(paramsTab as any) ? (paramsTab as (typeof SupportTabs)[number]) : 'deposit'
  const currentVc = bvcs.find((item) => item.vault == paramsVault)
  // useUpdateBVaultsData(bvcs)
  useLoadBVaults()
  return (
    <PageWrap>
      <div className='w-full max-w-[1160px] px-4 mx-auto md:pb-8'>
        {!currentVc ? (
          <>
            <div className='page-title'>B-Vaults</div>
            <Noti data='A pendle-like product with more innovation.' />
            <Grid numItems={1} numItemsMd={2} numItemsLg={3} className='gap-5 mt-4'>
              {bvcs.map((item, index) => (
                <BVaultCard key={`group_vault_item_${index}`} vc={item} />
              ))}
              {bvcs.length == 0 && (
                <>
                  <BVaultCardComming symbol='HONEY-USDC' />
                  <BVaultCardComming symbol='HONEY-WBTC' />
                  <BVaultCardComming symbol='HONEY-WETH' />
                </>
              )}
            </Grid>
          </>
        ) : (
          <BVaultPage bvc={currentVc} />
        )}
      </div>
    </PageWrap>
  )
}
