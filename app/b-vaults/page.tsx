'use client'

import { BVaultCard, BVaultCardComming, BVaultHarvest, BVaultMint } from '@/components/b-vault'
import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { SimpleTabs } from '@/components/simple-tabs'
import { BVaultConfig, BVAULTS_CONFIG } from '@/config/bvaults'
import { ENV } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useBoundStore } from '@/providers/useBoundStore'
import { useBVault, useEpochesData } from '@/providers/useBVaultsData'
import { useQuery } from '@tanstack/react-query'
import { Grid } from '@tremor/react'
import _ from 'lodash'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useMemo } from 'react'
import { Address } from 'viem'
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
      const bs = useBoundStore.getState().sliceBVaultsStore
      await bs.updateEpoches(bvc)
      await bs.updateEpochesRedeemPool(bvc)
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

  return (
    <SimpleTabs
      listClassName='flex-wrap p-0 mb-5 md:gap-14'
      triggerClassName='text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap'
      contentClassName='gap-5'
      data={[
        {
          tab: 'Mint',
          content: <BVaultMint bvc={bvc} />,
        },
        {
          tab: 'Harvest',
          content: <BVaultHarvest bvc={bvc} />,
        },
      ]}
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
  useQuery({
    queryKey: [bvcs],
    queryFn: async () => {
      const bs = useBoundStore.getState().sliceBVaultsStore
      await bs.updateBvaults(bvcs)
      await bs.updateBvaultsCurrentEpoch()
      return true
    },
  })
  const { address } = useAccount()
  const tokens = useMemo(
    () =>
      bvcs
        .map((b) => [b.asset, b.pToken])
        .flat()
        .reduce<Address[]>((union, item) => (union.includes(item) ? union : [...union, item]), []),
    [bvcs],
  )
  useQuery({
    queryKey: ['UpdateBvautlsTokens', tokens],
    queryFn: async () => {
      await useBoundStore.getState().sliceTokenStore.updateTokenTotalSupply(tokens)
      await useBoundStore.getState().sliceTokenStore.updateTokenPrices(tokens)
      return true
    },
    throwOnError(error, query) {
      console.error(error)
      return false
    },
  })
  useQuery({
    queryKey: ['UpdateUserBvautlsTokens', tokens, address],
    queryFn: async () => {
      if (!address) return false
      await useBoundStore.getState().sliceTokenStore.updateTokensBalance(tokens, address)
      return true
    },
  })
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
