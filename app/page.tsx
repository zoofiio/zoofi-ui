'use client'

import { CoinIcon } from '@/components/coinicon'
import { PageWrap } from '@/components/page-wrap'
import { VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useTVL, useTVLV1 } from '@/hooks/useTVL'
import { useTokenApys } from '@/hooks/useTokenApys'
import { useRouter } from 'next/navigation'
import BeraLine from '@/components/icons/BeraLine'
import BullLine from '@/components/icons/BullLine'
import PandaLine from '@/components/icons/PandaLine'
import VenomLine from '@/components/icons/VenomLine'
import React from 'react'
import { IconProps } from '@/components/icons/types'
import { isBETA } from '@/constants'
import { cn } from '@/lib/utils'

const cards: {
  icon: React.FunctionComponent<IconProps>
  tit: string
  sub: string
  className?: string
}[] = [
  { icon: BeraLine, tit: 'Interest Bear', sub: 'Stablecoin', className: 'card_beraline' },
  { icon: BullLine, tit: 'Leverage Bull', sub: 'Margin Token', className: 'card_bullline' },
  { icon: PandaLine, tit: 'Principal Panda', sub: 'Principal Token', className: 'card_pandaline' },
  { icon: VenomLine, tit: 'Boost Bribe Venom', sub: 'Yield Token', className: 'card_venomline' },
]

export default function Home() {
  const chainId = useCurrentChainId()
  const { tvl } = useTVL()
  const tvlV1 = useTVLV1()
  const tapys = useTokenApys()
  const vcs = VAULTS_CONFIG[chainId]
  const usdbVc = vcs.find((item) => item.assetTokenSymbol == 'USDB')
  const r = useRouter()

  return (
    <PageWrap>
      <div className='flex flex-col md:flex-row max-w-screen-[1160px] mx-auto px-4 gap-10 md:gap-20 h-[calc(100vh-100px)] pt-[5vh] md:pt-[10vh] pb-8 md:justify-center'>
        <div>
          <div className='flex md:mt-10 text-[5vw] md:text-[min(2.5rem,2.7vw)] !leading-normal font-semibold text-slate-700 dark:text-slate-50'>
            A Structured Protocol for Better <br />
            Liquidity Utilization.
          </div>
          <div className='flex gap-5 mt-8 w-fit justify-start flex-wrap'>
            <button className='btn-primary !text-sm w-[150px] !mx-0  mt-0' onClick={() => r.push('/l-vaults')}>
              Launch Dapp
            </button>
            <button className='text-sm h-10 rounded-lg bg-btndis w-[193px] flex justify-center items-center gap-2'>
              <CoinIcon size={24} symbol='berachain' />
              Built on berachain
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          {cards.map((item) => (
            <div key={item.tit} className={cn('card flex items-center gap-5 py-4', item.className)}>
              <item.icon className='text-[3.375rem] text-black dark:text-white' />
              <div className='flex flex-col gap-3'>
                <span className='font-semibold text-xl text-black dark:text-white text-[var(--primary-color)] dark:text-[var(--primary-color)]'>
                  {item.tit}
                </span>
                <span className='font-medium text-xs opacity-50 dark:text-white'>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        {isBETA && <div className='fixed left-0 top-0 z-50 px-1 text-xs bg-red-600 text-white'>Beta</div>}
      </div>
    </PageWrap>
  )
}
