import { BASE_PATH } from '@/config/env'
import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

const SupportICONS: { [k: string]: string } = {
  BERA: 'BERA.svg',
  balance: 'balance.png',
  berachain: 'berachain.svg',
  bg_home: 'bg_home.svg',
  blackLine: 'blackLine.svg',
  Bull: 'Bull.svg',
  coin: 'coin.png',
  discord: 'discord.png',
  discount: 'discount.png',
  ETH: 'ETH.svg',
  ethfi: 'ethfi.png',
  ETHx: 'ETHx.svg',
  galxe: 'galxe.png',
  gift: 'gift.png',
  gold: 'gold.png',
  greenCycle: 'greenCycle.png',
  GreenDot: 'GreenDot.svg',
  'HONEY-USDC': 'HONEY-USDC.svg',
  'HONEY-WBERA': 'HONEY-WBERA.webp',
  'HONEY-WBTC': 'HONEY-WBTC.svg',
  'HONEY-WETH': 'HONEY-WETH.svg',
  HONEY: 'HONEY.svg',
  iBGT: 'iBGT.webp',
  iRED: 'iRED.svg',
  'logo-alt': 'logo-alt.svg',
  Panda: 'Panda.svg',
  piRED: 'piRED.svg',
  'status-green': 'status-green.svg',
  'status-red': 'status-red.svg',
  twitter: 'twitter.png',
  USDC: 'USDC.svg',
  USDCx: 'USDCx.svg',
  USDT: 'USDT.svg',
  Venom: 'Venom.svg',
  WBERA: 'WBERA.svg',
  WBTC: 'WBTC.svg',
  WBTCx: 'WBTCx.svg',
  weeth: 'weeth.png',
  weETH: 'weETH.svg',
  weETHx: 'weETHx.svg',
  WETH: 'WETH.svg',
  xBERA: 'xBERA.svg',
  xiBGT: 'xiBGT.svg',
  yiRED: 'yiRED.svg',
  ZUSD: 'ZUSD.svg',
}

export function CoinIcon({ symbol, size = 48, ...p }: { symbol: string; className?: string; style?: CSSProperties; size?: number }) {
  const supportIcon = SupportICONS[symbol]
  const src = `${BASE_PATH}/${supportIcon}`
  if (!supportIcon) {
    return (
      <svg {...p} width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <text className='fill-primary/60' width='20' x='12' y='12' textAnchor='middle' fontSize={12} dominantBaseline='middle'>
          {symbol.slice(0, 2)}
        </text>
        <circle className='stroke-primary/60' cx='12' cy='12' r='11.5' strokeWidth={1} />
      </svg>
    )
  }
  return <img {...p} className={cn(p.className)} width={size} height={size} src={src} alt={symbol} />
}
