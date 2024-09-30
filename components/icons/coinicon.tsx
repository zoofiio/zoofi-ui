import { BASE_PATH } from '@/config/env'
import { useQuery } from '@tanstack/react-query'
import { CSSProperties } from 'react'

const TypeMap = {
  iBGT: 'webp',
  ['HONEY-WBERA']: 'webp',
} as const

type TypeMapKeys = keyof typeof TypeMap

export function CoinIcon({ symbol, size = 48, ...p }: { symbol: string; className?: string; style?: CSSProperties; size?: number }) {
  const end = symbol in TypeMap ? TypeMap[symbol as TypeMapKeys] : 'svg'
  const src = `${BASE_PATH}/${symbol}.${end}`

  const { data: url, isError } = useQuery({
    queryKey: ['loadCoinIcon', src],
    queryFn: () =>
      new Promise<string>((reslove, reject) => {
        const img = new Image()
        img.onload = () => {
          reslove(src)
        }
        img.onerror = (e) => {
          reject(e)
        }
        img.src = src
      }),
  })

  if (!url && isError) {
    return (
      <svg {...p} width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <text className='fill-primary' width='20' x='12' y='12' textAnchor='middle' fontSize={12} dominantBaseline='middle'>
          {symbol.slice(0, 2)}
        </text>
        <circle className='stroke-primary' cx='12' cy='12' r='12' />
      </svg>
    )
  }
  return <img {...p} width={size} height={size} src={url || src} alt={symbol} />
}
