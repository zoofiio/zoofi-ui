'use client'

import { BASE_PATH } from '@/config/env'
import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

const SupportICONS: { [k: string]: string } = {
  BERA: 'BERA.svg',
  balance: 'balance.png',
  berachain: 'berachain.svg',
  berahub: 'berahub.svg',
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
  'USDC-HONEY': 'HONEY-USDC.svg',
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
  BYUSD: 'BYUSD.webp',
  Fire: 'Fire.png',
  Lnfi: 'lnfi.png',
  Reppo: 'reppo.png',
  Enreach: 'enreach.svg',
  Aethir: 'Aethir.svg',
  Nodeops: 'Nodeops.svg',
}

export function CoinIconImpl({ symbol, size = 48, url, style, ...p }: { symbol: string; className?: string; style?: CSSProperties; size?: number | string; url?: string }) {
  const supportIcon = SupportICONS[symbol]
  const src = `${BASE_PATH}/${supportIcon}`
  if (!supportIcon && !url) {
    return (
      <svg {...p} width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <text className='fill-primary/60' width='20' x='12' y='12' textAnchor='middle' fontSize={12} dominantBaseline='middle'>
          {symbol.slice(0, 2)}
        </text>
        <circle className='stroke-primary/60' cx='12' cy='12' r='11.5' strokeWidth={1} />
      </svg>
    )
  }
  return <img {...p} style={{ width: size, height: size, ...(style || {}) }} className={cn(p.className)} width={size} height={size} src={supportIcon ? src : url} alt={symbol} />
}


const ignoreDouble = ['logo-alt', 'status-green', 'status-red']
export function DoubleCoinIcon({ symbol1, symbol2, size = 48, url1, url2, className }: { symbol1: string, symbol2: string, className?: string, size?: number | string, url1?: string, url2?: string }) {
  return <div className={cn('flex items-center', className)}>
    <CoinIconImpl symbol={symbol1} size={size} url={url1} />
    <CoinIconImpl symbol={symbol2} size={size} url={url2} style={{ marginLeft: `-30%` }} />
  </div>
}

export function CoinIcon({ symbol, size = 48, url, ...p }: { symbol: string; className?: string; style?: CSSProperties; size?: number | string; url?: string }) {
  if (symbol.includes('-') && !ignoreDouble.includes(symbol)) {
    const [token1, token2] = symbol.split('-')
    return <DoubleCoinIcon {...p} symbol1={token1} symbol2={token2} size={size} />
  }
  return <CoinIconImpl {...p} symbol={symbol} size={size} url={url} />
}