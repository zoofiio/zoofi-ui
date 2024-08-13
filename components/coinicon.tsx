import { BASE_PATH } from '@/config/env'
import { CSSProperties, useState } from 'react'

const TypeMap = {
  iBGT: 'png',
  xiBGT: 'png',
  ZUSD: 'png',
} as const

type TypeMapKeys = keyof typeof TypeMap

export function CoinIcon({
  symbol,
  size = 48,
  ...p
}: {
  symbol: string
  className?: string
  style?: CSSProperties
  size?: number
}) {
  const end = symbol in TypeMap ? TypeMap[symbol as TypeMapKeys] : 'svg'
  const src = `${BASE_PATH}/${symbol}.${end}`
  return <img {...p} width={size} height={size} src={src} alt={symbol} />
}
