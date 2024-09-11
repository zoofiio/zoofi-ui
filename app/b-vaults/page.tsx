'use client'

import { BVaultMint, BVaultCard, BVaultHarvest, BVaultCardComming } from '@/components/b-vault'
import { MigrationTip } from '@/components/migrationv2'
import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { SimpleTabs } from '@/components/simple-tabs'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { ENV, isBETA } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { Grid } from '@tremor/react'
import { useSearchParams } from 'next/navigation'
import { ReactNode } from 'react'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

const SupportTabs = ['mint', 'harvest'] as const

export default function Vaults() {
  const chainId = useCurrentChainId()
  const bvcs = BVAULTS_CONFIG[chainId].filter((vc) => vc.onEnv && vc.onEnv.includes(ENV))
  const current = bvcs[0]
  const params = useSearchParams()
  const paramsVault = params.get('vault')
  const paramsTab = params.get('tab')
  const currentTab = SupportTabs.includes(paramsTab as any) ? (paramsTab as (typeof SupportTabs)[number]) : 'deposit'
  const currentVc = bvcs.find((item) => item.vault == paramsVault)

  return (
    <PageWrap>
      <div className='w-full max-w-[1160px] px-4 mx-auto md:pb-8'>
        <MigrationTip />
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
          <SimpleTabs
            listClassName='flex-wrap p-0 mb-5 md:gap-14'
            triggerClassName='text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap'
            contentClassName='gap-5'
            data={[
              {
                tab: 'Mint',
                content: <BVaultMint bvc={currentVc} />,
              },
              {
                tab: 'Harvest',
                content: <BVaultHarvest bvc={currentVc} />,
              },
            ]}
          />
        )}
      </div>
    </PageWrap>
  )
}
