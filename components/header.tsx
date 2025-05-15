'use client'

import { berachain, berachainTestnet, SUPPORT_CHAINS } from '@/config/network'
import { DISCORD_LINK, DOC_LINK, ENV, isLNT, TWITTER_LINK } from '@/constants'

import { abiMockPriceFeed, abiVault } from '@/config/abi'
import { BASE_PATH } from '@/config/env'
import { LNTVAULTS_CONFIG } from '@/config/lntvaults'
import { VAULTS_CONFIG } from '@/config/swap'
import { DomainRef } from '@/hooks/useConfigDomain'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useWandContractRead } from '@/hooks/useWand'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useChainModal } from '@rainbow-me/rainbowkit'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { LuBox, LuLineChart, LuSettings, LuSettings2, LuUserCircle } from 'react-icons/lu'
import { TbBook2, TbBrandDiscordFilled, TbBrandX, TbChevronDown } from 'react-icons/tb'
import { useWindowSize } from 'react-use'
import { useAccount } from 'wagmi'
import ConnectBtn from './connet-btn'
import { CoinIcon } from './icons/coinicon'
import { ThemeMode } from './theme-mode'
import { sepolia } from 'viem/chains'
import { Tip } from './ui/tip'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { BBtn } from './ui/bbtn'
import { toBVault, toLntVault } from '@/app/routes'

const NetName: { [k: number]: string } = {
  [berachainTestnet.id]: 'Berachain Bartio',
  [berachain.id]: 'Berachain',
}

const NetIcon: { [k: number]: string } = {
  [berachainTestnet.id]: `${BASE_PATH}/berachain.svg`,
  [berachain.id]: `${BASE_PATH}/berachain.svg`,
  [sepolia.id]: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzI1MjkyRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTguMTkgMTQuNzcgMTQgMTguMjFsNS44LTMuNDQtNS44IDguMTktNS44MS04LjE5WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNCAxNi45My01LjgxLTMuNDRMMTQgNC4zNGw1LjgxIDkuMTVMMTQgMTYuOTNaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTQuNzciIHkyPSIyMi45NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K',
}

export function useShowAdmin() {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  const { data: owner } = useWandContractRead({
    abi: abiVault,
    address: isLNT ? LNTVAULTS_CONFIG[chainId]?.[0]?.vault : BVAULTS_CONFIG[chainId]?.[0]?.vault,
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
    address: VAULTS_CONFIG[chainId]?.[1]?.assetTokenFeed,
    functionName: 'isTester',
    args: [address as any],
    query: { enabled: !!address },
  })
  return !!isTester
}

export function Header() {
  const pathname = usePathname()
  const { width } = useWindowSize(window.innerWidth, window.innerHeight)
  const showLinks = pathname !== '/' && pathname !== '/lnt'
  const hiddenTitle = showLinks && width < 1024
  // const modal = useModal()
  const chainId = useCurrentChainId()
  const { openChainModal } = useChainModal()
  const showAdmin = useShowAdmin()
  const showTester = useShowTester()
  const links = useMemo(() => {
    const links = [
      ...(ENV.includes("lnt") ? [
        { href: '/lnt-vaults', label: 'LNT-Vaults', icon: LuBox },
        { href: '/lnts', label: 'LNTS', icon: LuBox },
      ] : [
        { href: '/b-vaults', label: 'B-Vaults', icon: LuBox },
        { href: '/l-vaults', label: 'L-Vaults', icon: LuBox, disable: true },
        { href: '/portfolio', label: 'Portfolio', icon: LuUserCircle },
        { href: '/dashboard', label: 'Dashboard', icon: LuLineChart },
      ]),
    ]
    showAdmin && links.push({ href: '/admin', label: 'Admin', icon: LuSettings })
      ; (showTester || showAdmin) && links.push({ href: '/tester', label: 'Tester', icon: LuSettings2 })
    return links
  }, [showAdmin, showTester])

  const { chain, address } = useAccount()
  const showDefNet = !chain || SUPPORT_CHAINS.findIndex((item) => item.id == chain.id) == -1 || SUPPORT_CHAINS.length <= 1
  const social_networks = useMemo(
    () => [
      { name: 'doc', url: DOC_LINK(), icon: TbBook2 },
      { name: 'Twitter', url: TWITTER_LINK, icon: TbBrandX },
      { name: 'Discord', url: DISCORD_LINK, icon: TbBrandDiscordFilled },
    ],
    [DomainRef.value],
  )
  const r = useRouter()
  return (
    <div className='h-[72px] fixed w-full flex bg-slate-50/30 backdrop-blur-lg dark:text-slate-50 dark:bg-slate-900/30 z-30'>
      <header className='h-[72px] w-full max-w-[1300px] inset-0 mx-auto flex items-center justify-between px-4   z-30 ml-[calc(100vw - 100%)] '>
        <div className='flex items-center'>
          <Link href={'/'} className='font-semibold flex pr-1 items-center text-base leading-7'>
            <CoinIcon symbol='logo-alt' size={90} />
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
                {links.map(({ href, label, icon, disable }) => {
                  const Icon = icon
                  return (
                    <DropdownMenu.Item key={label}>
                      {disable ?
                        <Tip node={
                          <Link
                            className='flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-gray-700/30'
                            href={'javascript:void(0);'}
                          >
                            <Icon />
                            {label}
                          </Link>
                        }>
                          Coming Soon
                        </Tip>
                        : <Link
                          className='flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-gray-700/30'
                          href={href}
                        >
                          <Icon />
                          {label}
                        </Link>}
                    </DropdownMenu.Item>
                  )
                })}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        {/* Render App routes */}
        {showLinks ? (
          <div className='hidden lg:flex flex-1 px-5 items-center gap-10'>
            {links.map(({ href, label, icon, disable }) => {
              const Icon = icon
              if (disable) return <Tip key={label} node={
                <Link
                  className='text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1 text-slate-700 dark:text-slate-50 opacity-50'
                  href={'javascript:void(0);'}
                >
                  <Icon />
                  {label}
                </Link>
              }>
                Coming Soon
              </Tip>

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
          {showDefNet && showLinks && (
            <div
              className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-50 font-medium rounded-full cursor-pointer'
              onClick={() => openChainModal && openChainModal()}
            >
              <Image width={24} height={24} src={NetIcon[chainId]} alt='' />
              <div className='hidden sm:block'>{NetName[chainId]}</div>
            </div>
          )}
          {!showLinks && <BBtn className='text-sm !w-[150px] !mx-0  mt-0' onClick={() => isLNT ? toLntVault(r) : toBVault(r)}>
            Launch Dapp
          </BBtn>}
          {showLinks && <ConnectBtn />}
        </div>
      </header>
    </div>
  )
}
