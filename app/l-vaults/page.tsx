'use client'

import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { PoolCard } from '@/components/pools'
import { SimpleTabs } from '@/components/simple-tabs'
import { LVaultsDiscount } from '@/components/vault-discount'
import { VaultConfig, VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useLoadLVaults } from '@/hooks/useLoads'
import { tabToSearchParams } from '@/lib/utils'
import { useBoundStore } from '@/providers/useBoundStore'
import { useQuery } from '@tanstack/react-query'
import { Grid } from '@tremor/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { LVaultCard, LVaultComming, LVaultSimpleWrap } from '../../components/l-vault'
import { toLVault } from '../routes'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

function LVaultPage({ vc, tab }: { vc: VaultConfig; tab?: string }) {
  const { address } = useAccount()

  useQuery({
    queryKey: ['UpdateUserLVault', vc, address],
    queryFn: async () => {
      if (!address) return false
      await useBoundStore.getState().sliceLVaultsStore.updateUserLVault(vc, address)
      return true
    },
  })
  const r = useRouter()
  const data = [
    {
      tab: 'Deposit',
      content: <LVaultSimpleWrap vc={vc} />,
    },
    {
      tab: 'Price Trigger Yield',
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <PoolCard vc={vc} type='buy' />
          <PoolCard vc={vc} type='sell' />
        </div>
      ),
    },
    {
      tab: 'Discount Offer',
      content: <LVaultsDiscount vc={vc} />,
    },
  ]
  const currentTab = data.find((item) => tabToSearchParams(item.tab) == tab)?.tab || data[0].tab
  return (
    <SimpleTabs
      listClassName='flex-wrap p-0 mb-5 md:gap-14'
      triggerClassName='text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap'
      contentClassName='gap-5'
      currentTab={currentTab}
      onTabChange={(tab) => toLVault(r, vc.vault, tab)}
      data={data}
    />
  )
}

export default function Vaults() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  // const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  // const groupsVcs = useMemo(() => Object.values(_.groupBy(vcs, 'assetTokenSymbol')), [vcs])
  const params = useSearchParams()
  const paramsVault = params.get('vault')
  const paramsTab = params.get('tab')
  const currentVc = vcs.find((item) => item.vault == paramsVault)
  useLoadLVaults()
  return (
    <PageWrap>
      <div className='w-full max-w-[1160px] px-4 mx-auto md:pb-8'>
        {!currentVc ? (
          <>
            <div className='page-title'>L-Vaults</div>
            <Noti data='Deposit assets into the Vaults to pair-mint stablecoin and margin token' />
            <Grid numItems={1} numItemsMd={2} numItemsLg={3} className='gap-5 mt-4'>
              {vcs.map((item, index) => (
                <LVaultCard key={`group_vault_item_${index}`} vc={item} />
              ))}
              <LVaultComming symbol='iRED' />
            </Grid>
          </>
        ) : (
          <LVaultPage vc={currentVc} tab={paramsTab as string} />
        )}
      </div>
    </PageWrap>
  )
}
