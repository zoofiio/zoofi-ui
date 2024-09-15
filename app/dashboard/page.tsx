'use client'
import { PageWrap } from '@/components/page-wrap'
import { PLAIN_VAULTS_CONFIG, VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { FetcherContext } from '@/providers/fetcher'
import { TableCell as _TableCell } from '@tremor/react'
import { useContext } from 'react'
import { useAccount } from 'wagmi'

const TableCell = (p: React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>) => {
  return <_TableCell {...p} className={`!p-3 w-max ${p.className}`} />
}

const greenPoint = (
  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
    <circle cx='7' cy='7' r='5' fill='white' stroke='#00DE9C' strokeWidth='4' />
  </svg>
)

const redPoint = (
  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
    <circle cx='7' cy='7' r='5' fill='white' stroke='#FF3D3D' strokeWidth='4' />
  </svg>
)

export default function Dashboard() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId] || []
  const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  const { prices, usbApr } = useContext(FetcherContext)
  const { address } = useAccount()

  return <PageWrap>Comming Soon</PageWrap>
}
