'use client'

import { BVault, BVaultCard } from '@/components/b-vault'
import { MigrationTip } from '@/components/migrationv2'
import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { isBETA } from '@/constants'
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
  const bvcs = BVAULTS_CONFIG[chainId]
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
        {/* {!currentVc && (
          <>
            <div className='page-title'>B-Vaults</div>
            <Noti data='A pendle-like product with more innovation.' />
            <Grid numItems={1} numItemsMd={2} numItemsLg={3} className='gap-5 mt-4'>
              {bvcs.map((item, index) => (
                <BVaultCard key={`group_vault_item_${index}`} vc={item} />
              ))}
            </Grid>
          </>
        )} */}
        {current && isBETA && (
          <>
            <div className='page-title'>B-Vaults</div>
            <Noti data='A pendle-like product with more innovation.' />
            <BVault bvc={current} />
          </>
        )}
      </div>
    </PageWrap>
  )
}
