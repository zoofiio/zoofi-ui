'use client'

import { PoolCard } from '@/components/pools'
import { MigrationTip } from '@/components/migrationv2'
import { Noti } from '@/components/noti'
import { SimpleTabs } from '@/components/simple-tabs'
import { LVaultsDiscount } from '@/components/vault-discount'
import { VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { Grid } from '@tremor/react'
import { useSearchParams } from 'next/navigation'
import { ReactNode } from 'react'
import { AiFillNotification } from 'react-icons/ai'
import { LVaultSimpleWrap, VaultCollapse, VaultCollapseComming } from '../../components/vault-collapse'
import { PageWrap } from '@/components/page-wrap'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

const SupportTabs = ['deposit', 'yield', 'discount'] as const

export default function Vaults() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  // const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  // const groupsVcs = useMemo(() => Object.values(_.groupBy(vcs, 'assetTokenSymbol')), [vcs])
  const params = useSearchParams()
  const paramsVault = params.get('vault')
  const paramsTab = params.get('tab')
  const currentTab = SupportTabs.includes(paramsTab as any) ? (paramsTab as (typeof SupportTabs)[number]) : 'deposit'
  const currentVc = vcs.find((item) => item.vault == paramsVault)

  return (
    <PageWrap>
      <div className='w-full max-w-[1160px] px-4 mx-auto md:pb-8'>
        <MigrationTip />

        {/* <BlastPointCards /> */}
        {!currentVc ? (
          <>
            <div className='page-title'>L-Vaults</div>
            <Noti data='Deposit assets into the Vaults to pair-mint stablecoin and margin token' />
            <Grid numItems={1} numItemsMd={2} numItemsLg={3} className='gap-5 mt-4'>
              {vcs.map((item, index) => (
                <VaultCollapse key={`group_vault_item_${index}`} vc={item} />
              ))}
              <VaultCollapseComming symbol='iRED'/>
            </Grid>
          </>
        ) : (
          <>
            <SimpleTabs
              listClassName='flex-wrap p-0 mb-5 md:gap-14'
              triggerClassName='text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap'
              contentClassName='gap-5'
              data={[
                {
                  tab: 'Deposit',
                  content: <LVaultSimpleWrap vc={currentVc} />,
                },
                {
                  tab: 'Price Trigger Yield',
                  content: (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                      <PoolCard vc={currentVc} type='buy' />
                      <PoolCard vc={currentVc} type='sell' />
                    </div>
                  ),
                },
                {
                  tab: 'Discount Offer',
                  content: <LVaultsDiscount vc={currentVc} />,
                },
              ]}
            />
          </>
        )}
      </div>
    </PageWrap>
  )
}
