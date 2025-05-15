'use client'
  ; (BigInt.prototype as any).toJSON = function () {
    return this.toString()
  }

import BeraLine from '@/components/icons/BeraLine'
import BullLine from '@/components/icons/BullLine'
import PandaLine from '@/components/icons/PandaLine'
import VenomLine from '@/components/icons/VenomLine'
import { CoinIcon } from '@/components/icons/coinicon'
import { IconProps } from '@/components/icons/types'
import { PageWrap } from '@/components/page-wrap'
import { BBtn } from '@/components/ui/bbtn'
import { ENV, isLNT } from '@/constants'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useHover } from 'react-use'
import { toBVault, toLntVault, toLVault } from './routes'
// import LntPage from './lnt-vaults/page'
import { LntLandingPage } from '@/components/lnt-landing-page';
import Link from 'next/link';
// import { LntLandingPage } from '@/components/lnt-landing-page';

type CardItemType = {
  icon: React.FunctionComponent<IconProps>
  tit: string
  sub: string
  className?: string
  hoverIconBg?: string
  hoverTextColor?: string
}

const cards: CardItemType[] = [
  { icon: BeraLine, tit: 'Interest Bear', sub: 'Stablecoin', hoverTextColor: '#ff8080' },
  { icon: BullLine, tit: 'Leverage Bull', sub: 'Margin Token', hoverTextColor: '#53baff' },
  {
    icon: PandaLine,
    tit: 'Principal Panda',
    sub: 'Principal Token',
    hoverTextColor: '#0ed19a',
  },
  {
    icon: VenomLine,
    tit: 'Boost Bribe Venom',
    sub: 'Yield Token',
    hoverTextColor: '#ebc013',
  },
]
function CardItem(item: CardItemType) {
  const [element] = useHover((isHover) => (
    <div key={item.tit} className={cn('card flex items-center gap-5 py-4', item.className)}>
      <item.icon showbg={isHover} showOutline className={cn('text-[3.375rem] ', isHover ? 'text-white' : 'text-black dark:text-white')} />
      <div className='flex flex-col gap-3'>
        <span style={{ color: isHover ? item.hoverTextColor : '' }} className={cn('font-semibold text-xl', 'text-black dark:text-white')}>
          {item.tit}
        </span>
        <span className='font-medium text-xs opacity-50 dark:text-white'>{item.sub}</span>
      </div>
    </div>
  ))
  return element
}

const investors = ['binance', 'ventures', 'certik', 'signum', 'definancex', 'okventures', 'bigbrain', 'pragma', 'cms', 'dorahacks']

function MainUI() {
  const r = useRouter()
  return <PageWrap>
    <div className='flex flex-col md:flex-row max-w-[1160px] mx-auto px-4 gap-10 md:gap-20 h-[calc(100vh-100px)] pt-[5vh] md:pt-[10vh] pb-8 md:justify-center'>
      <div>
        <div className='flex md:mt-10 text-[5vw] md:text-[min(2.5rem,2.7vw)] !leading-normal font-semibold text-slate-700 dark:text-slate-50'>
          A Structured Protocol for Better <br />
          Liquidity Utilization.
        </div>
        <div className='flex gap-5 mt-8 justify-start flex-wrap'>
          {/* <BBtn className='text-sm !w-[150px] !mx-0  mt-0' onClick={() => isLNT ? toLntVault(r) : toBVault(r)}>
            Launch Dapp
          </BBtn> */}
          {/* <BBtn hiddenBorder className='text-sm h-10 !w-[193px] flex justify-center items-center gap-2' onClick={() => open('https://www.berachain.com', '_blank')}>
            <CoinIcon size={24} symbol='berachain' />
            Built on Berachain
          </BBtn> */}
          <div className='text-black/60 dark:text-white/60 flex items-center gap-2'>
            <CoinIcon symbol='Fire' size={21} />
            <Link href={'/lnt'} className='underline underline-offset-[3px]'>Liquid Node Token</Link>
          </div>
        </div>
        <div className='mt-8 text-xl font-semibold text-[#7B7B7B]'>Investors & Backers</div>
        <div className='mt-5 flex gap-y-5 gap-x-10 items-center flex-wrap max-w-[37.5rem]'>
          {investors.map(item => (<div className='w-20 flex justify-center items-center' key={item}>
            <img className={cn('object-contain invert dark:invert-0', item == 'pragma' ? 'w-[4.375rem]' : 'w-20')} src={`/investors/${item}.png`} />
          </div>))}
        </div>
      </div>

      <div className='flex flex-col gap-6 min-w-[18.75rem]'>
        {cards.map((item) => (
          <CardItem key={item.tit} {...item} />
        ))}
      </div>
    </div>
  </PageWrap>
}

export default function Home() {
  return isLNT ? <LntLandingPage /> : <MainUI />
}
