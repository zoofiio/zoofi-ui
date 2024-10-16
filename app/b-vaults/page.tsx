'use client'

import { BVaultB, BVaultCard, BVaultCardComming, BVaultP, BVaultRedeem } from '@/components/b-vault'
import { BVaultAddReward } from '@/components/bvault-add-reward'
import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { SimpleTabs } from '@/components/simple-tabs'
import { abiBVault } from '@/config/abi'
import { BVaultConfig, BVAULTS_CONFIG } from '@/config/bvaults'
import { ENV, isBETA } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useLoadBVaults } from '@/hooks/useLoads'
import { tabToSearchParams } from '@/lib/utils'
import { getPC } from '@/providers/publicClient'
import { useBoundStore } from '@/providers/useBoundStore'
import { useBVault, useEpochesData } from '@/providers/useBVaultsData'
import { useQuery } from '@tanstack/react-query'
import { Grid } from '@tremor/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ReactNode, useMemo } from 'react'
import { useAccount } from 'wagmi'
import { toBVault } from '../routes'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

const SupportTabs = ['redeem', 'principal_panda', 'boost_venom'] as const

function BVaultPage({ bvc, currentTab }: { bvc: BVaultConfig; currentTab?: string }) {
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
  const odata = [
    {
      tab: bvd.closed ? 'Redeem' : 'Principal Panda',
      content: bvd.closed ? (
        <div className='max-w-4xl mx-auto pt-8'>
          <BVaultRedeem bvc={bvc} />
        </div>
      ) : (
        <BVaultP bvc={bvc} />
      ),
    },
    {
      tab: 'Boost Venom',
      content: <BVaultB bvc={bvc} />,
    },
  ]
  const data =
    showAddReward && isBETA
      ? [
          ...odata,
          {
            tab: 'Add Reward',
            content: <BVaultAddReward bvc={bvc} />,
          },
        ]
      : odata
  const ctab = data.find((item) => tabToSearchParams(item.tab) == currentTab)?.tab
  const r = useRouter()

  return (
    <SimpleTabs
      currentTab={ctab}
      onTabChange={(tab) => toBVault(r, bvc.vault, tab)}
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
  const currentTab = SupportTabs.includes(paramsTab as any) ? (paramsTab as (typeof SupportTabs)[number]) : ''
  const currentVc = bvcs.find((item) => item.vault == paramsVault)
  // useUpdateBVaultsData(bvcs)
  useLoadBVaults()
  return (
    <PageWrap>
      <div className='w-full max-w-[1232px] px-4 mx-auto md:pb-8'>
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
          <BVaultPage bvc={currentVc} currentTab={currentTab} />
        )}
      </div>
    </PageWrap>
  )
}
