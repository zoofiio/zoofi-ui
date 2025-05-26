'use client'

import { DISCORD_LINK, DOC_LINK, TWITTER_LINK } from '@/constants'

import { DomainRef } from '@/hooks/useConfigDomain'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { TbBook2, TbBrandDiscordFilled, TbBrandX } from 'react-icons/tb'
import { CoinIcon } from './icons/coinicon'
import { BBtn } from './ui/bbtn'

export function Header() {
  const pathname = usePathname()
  const showLanuchApp = pathname === '/'
  const social_networks = useMemo(
    () => [
      { name: 'doc', url: DOC_LINK(), icon: TbBook2 },
      { name: 'Twitter', url: TWITTER_LINK, icon: TbBrandX },
      { name: 'Discord', url: DISCORD_LINK, icon: TbBrandDiscordFilled },
    ],
    [DomainRef.value],
  )
 
  return (
    <div className='h-[72px] fixed w-full flex bg-slate-50/30 backdrop-blur-lg dark:text-slate-50 dark:bg-slate-900/30 z-30'>
      <header className='h-[72px] w-full max-w-[1300px] inset-0 mx-auto flex items-center justify-between px-4   z-30 ml-[calc(100vw - 100%)] '>
        <div className='flex items-center'>
          <Link href={'/'} className='font-semibold flex pr-1 items-center text-base leading-7'>
            <CoinIcon symbol='logo-alt' size={90} />
          </Link>
        </div>
        <div className='flex items-center gap-1 md:gap-4'>
          {/* Social networks */}
          <div className='hidden lg:flex items-center gap-3'>
            {social_networks.map(({ url, icon, name }) => {
              const Icon = icon
              return (
                <Link key={name} href={url} className='text-slate-300 hover:text-primary'>
                  <Icon />
                </Link>
              )
            })}
          </div>
          {showLanuchApp && <BBtn className='text-sm !w-[150px] !mx-0  mt-0' onClick={() => window.open('https://app.zoofi.io/b-vaults')}>
            Launch App
          </BBtn>}
        </div>
      </header>
    </div>
  )
}
