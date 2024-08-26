'use client'

import { berachainTestnet, SUPPORT_CHAINS } from '@/config/network'
import { DISCORD_LINK, DOC_LINK, TWITTER_LINK } from '@/constants'

import { abiMockPriceFeed, abiVault } from '@/config/abi'
import { VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useWandContractRead } from '@/hooks/useWand'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useChainModal } from '@rainbow-me/rainbowkit'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { LuBox, LuDollarSign, LuLineChart, LuPaperclip, LuSettings, LuSettings2, LuTag } from 'react-icons/lu'
import { TbBook2, TbBrandDiscordFilled, TbBrandX, TbChevronDown } from 'react-icons/tb'
import { useWindowSize } from 'react-use'
import { useAccount } from 'wagmi'
import ConnectBtn from './connet-btn'
import { ThemeMode } from './theme-mode'
import { DomainRef } from '@/hooks/useConfigDomain'
import { BASE_PATH } from '@/config/env'
import { CoinIcon } from './coinicon'

const NetName: { [k: number]: string } = {
  [berachainTestnet.id]: 'Berachain Bartio',
}

const NetIcon: { [k: number]: string } = {
  [berachainTestnet.id]: `${BASE_PATH}/berachain.svg`,
}

export function useShowAdmin() {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  const { data: owner } = useWandContractRead({
    abi: abiVault,
    address: VAULTS_CONFIG[chainId]?.[0]?.vault,
    functionName: 'owner',
    query: { enabled: !!address },
  })
  return !!address && address == owner
}

export function useShowTester() {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  const { data: isTester } = useWandContractRead({
    abi: abiMockPriceFeed,
    address: VAULTS_CONFIG[chainId]?.[0]?.assetTokenFeed,
    functionName: 'isTester',
    args: [address as any],
    query: { enabled: !!address },
  })
  return !!isTester
}

export function Header() {
  const pathname = usePathname()
  const { width } = useWindowSize(window.innerWidth, window.innerHeight)
  const hiddenTitle = pathname !== '/' && width < 1024
  // const modal = useModal()
  const chainId = useCurrentChainId()
  const { openChainModal } = useChainModal()
  const showAdmin = useShowAdmin()
  const showTester = useShowTester()
  const links = useMemo(() => {
    const links = [
      // { href: '/early', label: 'Early Access', icon: LuPaperclip },
      { href: '/l-vaults', label: 'L-Vaults', icon: LuBox },
      { href: '/b-vaults', label: 'B-Vaults', icon: LuBox },
      // { href: '/earn', label: 'Earn', icon: LuDollarSign },
      // { href: '/discount', label: 'Discount Offer', icon: LuTag },
      // { href: '/dashboard', label: 'Dashboard', icon: LuLineChart },
    ]
    showAdmin && links.push({ href: '/admin', label: 'Admin', icon: LuSettings })
    showTester && links.push({ href: '/tester', label: 'Tester', icon: LuSettings2 })
    return links
  }, [showAdmin, showTester])

  const { chain, address } = useAccount()
  const showDefNet =
    !chain || SUPPORT_CHAINS.findIndex((item) => item.id == chain.id) == -1 || SUPPORT_CHAINS.length <= 1
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
            <CoinIcon symbol='logo-alt' size={90}/>
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              className={clsx('flex text-slate-500 dark:text-slate-50 font-medium items-center capitalize text-sm whitespace-nowrap', {
                hidden: !hiddenTitle,
              })}
            >
              {pathname.split('/')[1]}
              <TbChevronDown />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className='z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md dark:bg-gray-800 dark:border-gray-700'>
                {links.map(({ href, label, icon }) => {
                  const Icon = icon
                  return (
                    <DropdownMenu.Item key={label}>
                      <Link
                        className='flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-gray-700/30'
                        href={href}
                      >
                        <Icon />
                        {label}
                      </Link>
                    </DropdownMenu.Item>
                  )
                })}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        {/* Render App routes */}
        {pathname !== '/' ? (
          <div className='hidden lg:flex flex-1 px-5 items-center gap-10'>
            {links.map(({ href, label, icon }) => {
              const Icon = icon

              return (
                <Link
                  className={clsx(
                    'text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1',
                    pathname === href ? 'text-slate-700 dark:text-slate-50' : 'text-slate-500 dark:text-slate-50/50',
                  )}
                  key={href}
                  href={href}
                >
                  <Icon />
                  {label}
                </Link>
              )
            })}
          </div>
        ) : null}

        <div className='flex items-center gap-1 md:gap-4'>
          {/* Social networks */}
          <ThemeMode />
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
          {showDefNet && pathname !== '/' && (
            <div
              className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-50 font-medium rounded-full cursor-pointer'
              onClick={() => openChainModal && openChainModal()}
            >
              <Image width={24} height={24} src={NetIcon[chainId]} alt='' />
              <div className='hidden sm:block'>{NetName[chainId]}</div>
            </div>
          )}
          {pathname !== '/' && <ConnectBtn />}
        </div>
      </header>
    </div>
  )
}
