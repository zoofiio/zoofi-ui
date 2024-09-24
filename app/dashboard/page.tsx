'use client'
import { CoinIcon } from '@/components/icons/coinicon'
import { PageWrap } from '@/components/page-wrap'
import STable from '@/components/simple-table'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { USBSymbol, VAULTS_CONFIG } from '@/config/swap'
import { LP_TOKENS } from '@/config/tokens'
import { DECIMAL, ENV } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useLoadBVaults, useLoadLVaults } from '@/hooks/useLoads'
import { useTVL } from '@/hooks/useTVL'
import { fmtAAR, fmtPercent, getBigint } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { useStoreShallow } from '@/providers/useBoundStore'
import { calcBVaultBoost, calcBVaultPTApy } from '@/providers/useBVaultsData'
import { displayBalance } from '@/utils/display'
import { TableCell as _TableCell } from '@tremor/react'

import { ReactNode, useContext, useMemo } from 'react'

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

function DashItem({ title, sub, tHeader, tData }: { title: ReactNode; sub?: ReactNode; tHeader: ReactNode[]; tData: ReactNode[][] }) {
  return (
    <div className='card whitespace-nowrap'>
      {typeof title == 'string' ? <div className='text-2xl leading-none font-semibold'>{title}</div> : title}
      {typeof sub == 'string' ? <div className='text-[2rem] text-primary leading-none font-semibold mt-2'>{sub}</div> : sub}
      <div className='my-4 h-[1px] bg-border/60 dark:bg-border'></div>
      <div className='w-full overflow-x-auto'>
        <STable headerClassName='border-b-0' header={tHeader} data={tData} />
      </div>
    </div>
  )
}

function TVLItem() {
  const tvl = useTVL()
  const data: ReactNode[][] = useMemo(() => {
    return tvl.tvlItems.map((item) => [
      <div key='icon' className='flex gap-2 items-center'>
        {<CoinIcon symbol={item.symbol} size={20} />}
        <span>{item.symbol}</span>
      </div>,
      `$${displayBalance(item.usdAmount)}`,
      displayBalance(item.amount),
    ])
  }, [tvl.tvlItems])
  return <DashItem title='Total Value Locked' sub={`$${displayBalance(tvl.tvl)}`} tHeader={['Asset', 'NAV', 'Amount']} tData={data} />
}
function LVaultsItem() {
  const lvaults = useStoreShallow((s) => s.sliceLVaultsStore.lvaults)
  const chainId = useCurrentChainId()
  const lvcs = VAULTS_CONFIG[chainId]
  const { prices } = useContext(FetcherContext)
  const data: ReactNode[][] = useMemo(() => {
    return lvcs.map((lvc) => [
      <div key='icon' className='flex gap-2 items-center'>
        {<CoinIcon symbol={lvc.assetTokenSymbol} size={20} />}
        <span>{lvc.assetTokenSymbol}</span>
      </div>,
      <div key='total'>
        <div key='icon' className='flex gap-2 items-center'>
          {<CoinIcon symbol={lvc.assetTokenSymbol} size={14} />}
          <span>{displayBalance(lvaults[lvc.vault]?.assetBalance || 0n)}</span>
        </div>
        <div className='opacity-60'>~{displayBalance((getBigint(lvaults[lvc.vault], 'assetBalance') * prices[lvc.assetTokenAddress]) / DECIMAL)}</div>
      </div>,
      <div key='debt' className='flex gap-2 items-center'>
        {<CoinIcon symbol={USBSymbol} size={14} />}
        <span>{displayBalance(getBigint(lvaults[lvc.vault], 'usbTotalSupply'))}</span>
      </div>,
      fmtAAR(getBigint(lvaults[lvc.vault], 'aar'), 10n),
      <div key='status' className='flex gap-2 items-center'>
        {(lvaults[lvc.vault]?.vaultMode || 0) <= 1 ? greenPoint : redPoint}
        <span>{(lvaults[lvc.vault]?.vaultMode || 0) <= 1 ? 'Stability' : 'Adjustment'}</span>
      </div>,
      <div key='discount' className='flex gap-2 items-center'>
        {lvaults[lvc.vault]?.discountEnable ? redPoint : greenPoint}
        <span>{lvaults[lvc.vault]?.discountEnable ? 'YES' : 'NO'}</span>
      </div>,
    ])
  }, [lvaults, lvcs, prices])
  return <DashItem title='L-Vault' tHeader={['Vaults', 'Total Deposit', `${USBSymbol} Debt`, 'AAR', 'Status', 'Discount Offer']} tData={data} />
}
function BVaultsItem() {
  const chainId = useCurrentChainId()
  const bvcs = BVAULTS_CONFIG[chainId].filter((item) => (item.onEnv || []).includes(ENV))
  const bvaults = useStoreShallow((s) => s.sliceBVaultsStore.bvaults)
  const prices = useStoreShallow((s) => s.sliceTokenStore.prices)
  const data: ReactNode[][] = useMemo(() => {
    return bvcs.map((bvc) => [
      <div key='icon' className='flex gap-2 items-center'>
        {<CoinIcon symbol={bvc.assetSymbol} size={20} />}
        <span>{bvc.assetSymbol}</span>
      </div>,
      <div key='total' className='flex gap-8 items-start'>
        <div>
          <div key='icon' className='flex gap-2 items-center'>
            {<CoinIcon symbol={bvc.assetSymbol} size={14} />}
            <span>{displayBalance(getBigint(bvaults, [bvc.vault, 'lockedAssetTotal']))}</span>
          </div>
          <div className='opacity-60'>~{displayBalance((getBigint(bvaults, [bvc.vault, 'lockedAssetTotal']) * getBigint(prices, [bvc.asset])) / DECIMAL)}</div>
        </div>
        {!!LP_TOKENS[bvc.asset] && (
          <div>
            <div key='icon' className='flex gap-2 items-center'>
              {<CoinIcon symbol={bvc.assetSymbol.split('-')[0]} size={14} />}
              <span>{displayBalance(getBigint(bvaults, [bvc.vault, 'lpBase']))}</span>
            </div>
            <div key='icon' className='flex gap-2 items-center'>
              {<CoinIcon symbol={bvc.assetSymbol.split('-')[1]} size={14} />}
              <span>{displayBalance(getBigint(bvaults, [bvc.vault, 'lpQuote']))}</span>
            </div>
          </div>
        )}
      </div>,
      <div key='status' className='flex gap-2 items-center'>
        {greenPoint}
        <span>Epoch {getBigint(bvaults, [bvc.vault, 'epochCount']).toString()}</span>
      </div>,
      fmtPercent(calcBVaultPTApy(bvc.vault), 10),
      `${displayBalance(calcBVaultBoost(bvc.vault), 0, 2)}X`,
    ])
  }, [bvcs, bvaults, prices])
  return <DashItem title='B-Vault' tHeader={['Vaults', 'Total Deposit', 'Status', 'PT APY', 'YT Boost']} tData={data} />
}
export default function Dashboard() {
  useLoadLVaults()
  useLoadBVaults()
  return (
    <PageWrap>
      <div className='w-full max-w-[1200px] px-4 mx-auto flex flex-col gap-5 md:pb-8'>
        <TVLItem />
        <LVaultsItem />
        <BVaultsItem />
      </div>
    </PageWrap>
  )
}
