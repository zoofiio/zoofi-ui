import { fmtPercent, swapThrusterLink } from '@/lib/utils'
import { CoinIcon } from './coinicon'

import { beraChains, isBerachain } from '@/config/network'
import { ETHSymbol, NATIVE_TOKEN_ADDRESS, USB_ADDRESS, USBSymbol, VaultConfig, VAULTS_CONFIG } from '@/config/swap'
import { getTokens } from '@/config/tokens'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useElementSizeCheck } from '@/hooks/useElementSizeCheck'
import { usePtypoolApy } from '@/hooks/usePtypoolApy'
import { useTokenApys } from '@/hooks/useTokenApys'
import { useValutsLeverageRatio } from '@/hooks/useVaultLeverageRatio'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance, displayBalanceWithUnit } from '@/utils/display'
import { useContext, useMemo } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Address } from 'viem'
import { PointsIcons } from './points-icons'
import { useThemeState } from './theme-mode'

type PointItem = {
  symbol: string
  tit: string
  sub: string
  total: string
  link?: { text: string; url: string }
}

// background: linear-gradient(90deg, #C2B7FD 0%, #6366F1 100%);

const bgMap: { [k: string]: string } = {
  ZUSD: 'linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)',
  ZUSD_dark: 'linear-gradient(90deg, #C2B7FD 0%, #6366F1 100%)',
  xiBGT: 'rgba(238, 234, 254, 1)',
  xiBGT_dark: 'linear-gradient(90deg, #C2B7FD 0%, #746D97 100%)',
  HONEY: 'rgba(226, 254, 182, 1)',
  xHONEY_dark: '#E2FEB6',
}
const titBgMap: { [k: string]: string } = {
  ZUSD: 'rgba(255, 255, 255, 1)',
  xiBGT: 'rgba(219, 210, 255, 1)',
  xHONEY: 'rgba(196, 241, 126, 1)',
}

export function useVcPoints(vc: VaultConfig) {
  const chainId = useCurrentChainId()
  const { prices, usbApr, vaultsState, stableVaultsState } = useContext(FetcherContext)
  const levrages = useValutsLeverageRatio()
  const apys = usePtypoolApy()
  const tapys = useTokenApys()
  const items = useMemo(() => {
    const points: PointItem[] = []
    const musb = vc.isStable ? stableVaultsState[vc.vault].M_USB_USDC : vaultsState[vc.vault].M_USB_ETH

    // 0.06504987 Points/Block/ETH
    const perDecimals = 8
    const perBlockEth = 6504987n
    const ethPrice = prices[NATIVE_TOKEN_ADDRESS]
    const usbPrice = prices[USB_ADDRESS[chainId]]
    const calcPoint = (price: bigint, count: bigint = 100n) => {
      const weekBlocks = 302400n
      if (ethPrice == 0n) return '0'
      return displayBalanceWithUnit((perBlockEth * weekBlocks * price * count) / ethPrice, 0, perDecimals)
    }
    points.push({
      symbol: USBSymbol,
      tit: `APY:${fmtPercent(tapys[USB_ADDRESS[chainId]], 10)} ~ ${fmtPercent(tapys['USB_END'], 10)}`,
      sub: '~ Interest + Earning',
      total: `Total Minted: ${displayBalance(musb, 0)}`,
    })
    const tit = 'Leverage the Bull'
    const sub =
      vc.isStable && isBerachain()
        ? `~ ${levrages[vc.vault].toFixed(2)}x Berachain Native Yield`
        : `~ ${levrages[vc.vault].toFixed(2)}x Leveraged long on ${vc.assetTokenSymbol}`
    points.push({
      symbol: vc.xTokenSymbol,
      tit,
      sub,
      total: `Total Minted: ${displayBalance(musb, 0)}`,
    })
    return points
  }, [chainId, prices, levrages, usbApr, apys])
  return items
}

export function PointCard({ symbol, tit, sub, total, link }: PointItem) {
  const theme = useThemeState((s) => s.theme)
  return (
    <div
      style={{
        boxShadow: '0px 0px 12px 0px rgba(187, 215, 144, 0.4)',
      }}
      className='rounded-2xl overflow-hidden bg-white text-base flex flex-col dark:bg-slate-950'
    >
      <div
        className='flex md:flex-wrap items-center p-4 gap-2 dark:text-black'
        style={{ background: bgMap[`${symbol}_${theme}`] || bgMap[symbol] }}
      >
        <CoinIcon symbol={symbol} size={42} className='shrink-0' />
        <div className='font-semibold'>{symbol}</div>
        <div className='whitespace-nowrap text-center text-sm ml-auto flex flex-col items-center flex-1'>
          <div className='rounded-full px-2 py-[2px] w-fit' style={{ background: titBgMap[symbol] }}>
            {tit}
          </div>
          <div className='mt-1'>{sub}</div>
        </div>
      </div>
      {/* <div className='flex-1' /> */}
      <div className='flex justify-between p-4 whitespace-nowrap text-sm items-center gap-2'>
        <div className='font-medium text-slate-500 dark:text-slate-50/60 self-start text-xs items-center gap-1'>
          <span className='font-semibold text-sm'>{total}</span>
        </div>
        {link && (
          <a
            className='underline text-slate-500 dark:text-slate-50 flex items-center gap-1'
            href={link.url}
            target='_blank'
          >
            {link.text} <GoArrowUpRight />
          </a>
        )}
      </div>
    </div>
  )
}

export function PointCards({ vc }: { vc: VaultConfig }) {
  const items = useVcPoints(vc)
  const [ref, useSwiper] = useElementSizeCheck(({ width }) => width < 970)
  if (items.length == 0) return null
  return (
    <div ref={ref as any} className='grid grid-cols-1 md:grid-cols-2 gap-5 md:pb-[60px]'>
      {!useSwiper && items.map((item) => <PointCard key={item.symbol} {...item} />)}
      {useSwiper && (
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
            renderBullet: function (index: number, className: string) {
              return '<div class="' + className + '"></div>'
            },
          }}
          className='-translate-x-[1rem] !px-4 !pb-10 !w-screen'
          modules={[Pagination]}
        >
          {items.map((item) => (
            <SwiperSlide key={item.symbol}>
              <PointCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
