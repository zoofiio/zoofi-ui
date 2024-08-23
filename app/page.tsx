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

const cards: {
  icon: React.FunctionComponent<IconProps>
  tit: string
  sub: string
}[] = [
  { icon: BeraLine, tit: 'Interest Bera', sub: 'Stablecoin' },
  { icon: BullLine, tit: 'Leverage Bull', sub: 'Margin Token' },
  { icon: PandaLine, tit: 'Principal Panda', sub: 'Principal Token' },
  { icon: VenomLine, tit: 'Boost Bribe Venom', sub: 'Yield Token' },
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
      <div
        className='flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 gap-10 md:gap-20 h-[calc(100vh-100px)] pt-[5vh] md:pt-[10vh] pb-8 md:justify-center'
      >
        <div>
          <h1 className='flex md:mt-10 text-lg sm:text-xl md:text-2xl xl:text-4xl font-extrabold text-slate-700 dark:text-slate-50'>
            {/* <svg
          className='mr-2 animate-bounce self-end shrink-0'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 0C9.37146 3.70633 12.2937 6.62854 16 8C12.2937 9.37146 9.37146 12.2937 8 16C6.62854 12.2937 3.70633 9.37146 0 8C3.70633 6.62854 6.62854 3.70633 8 0Z'
            fill='#10B981'
          />
        </svg> */}
            A Structured Protocol for Better <br />
            Liquidity Utilization.
            {/* <svg
          className='ml-2 animate-bounce shrink-0'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 0C9.37146 3.70633 12.2937 6.62854 16 8C12.2937 9.37146 9.37146 12.2937 8 16C6.62854 12.2937 3.70633 9.37146 0 8C3.70633 6.62854 6.62854 3.70633 8 0Z'
            fill='#6366F1'
          />
        </svg> */}
          </h1>
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
            <div key={item.tit} className='card flex items-center gap-5'>
              <item.icon className="text-[3.375rem] text-black dark:text-white"/>
              <div className='flex flex-col gap-3'>
                <span className='font-semibold text-xl text-black dark:text-white'>{item.tit}</span>
                <span className='font-medium text-xs opacity-50 dark:text-white'>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='w-full px-4 pb-8 md:pt-8 text-3xl font-extrabold text-slate-700 dark:text-slate-50'>
        <span className='text-lg whitespace-nowrap'>Total Value Locked:</span> ${displayBalance(tvl + tvlV1)}
      </div> */}
      </div>
    </PageWrap>
  )
}
