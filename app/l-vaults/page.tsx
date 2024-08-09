'use client'

import { MigrationTip } from '@/components/migrationv2'
import { VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { Grid, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react'
import { useSearchParams } from 'next/navigation'
import { ReactNode } from 'react'
import { AiFillNotification } from 'react-icons/ai'
import { LVaultSimpleWrap, VaultCollapse, VaultSimple } from '../../components/vault-collapse'
import { DualTokenCard } from '@/components/dual-token-card'
import { LVaultsDiscount } from '@/components/vault-discount'

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
    <div className='w-full max-w-screen-xl px-4 mx-auto md:pb-8'>
      <MigrationTip />

      {/* <BlastPointCards /> */}
      {!currentVc ? (
        <>
          <h2 className='page-title'>Vaults</h2>
          <div className='w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[24px] md:leading-[14px]'>
            <div className=''>
              <AiFillNotification size={20} />
            </div>
            <div className='text-sm ml-1 '>Depositing assets into the Vaults</div>
          </div>
          <Grid numItems={1} numItemsMd={2} numItemsLg={3} className='gap-3 mt-4'>
            {vcs.map((item, index) => (
              <VaultCollapse key={`group_vault_item_${index}`} vc={item} />
            ))}
            {/* {pvcs.map((item, index) => (
          <PlainVault vc={item} key={`plain_vault_item_${index}`} />
          ))} */}
          </Grid>
        </>
      ) : (
        <>
          <TabGroup>
            <TabList variant='line' defaultValue={currentTab}>
              <Tab value='deposit'>Deposit</Tab>
              <Tab value='yield'>Price Trigger Yield</Tab>
              <Tab value='discount'>Discount Offer</Tab>
            </TabList>
            <TabPanels className='mt-8'>
              <TabPanel>
                <LVaultSimpleWrap vc={currentVc} />
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  <DualTokenCard vc={currentVc} type='buy' />
                  <DualTokenCard vc={currentVc} type='sell' />
                </div>
              </TabPanel>
              <TabPanel>
                <LVaultsDiscount vc={currentVc} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </>
      )}
    </div>
  )
}
