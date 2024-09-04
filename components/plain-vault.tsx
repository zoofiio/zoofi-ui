'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import { AssetInput } from '@/components/asset-input'
import { Tip } from '@/components/ui/tip'
import { abiPlainVault } from '@/config/abi'
import { NATIVE_TOKEN_ADDRESS, PlainVaultConfig, USBSymbol } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { getBigint, parseEthers } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance } from '@/utils/display'
import { Button } from '@tremor/react'
import { useContext, useMemo, useRef, useState } from 'react'
import { Collapse } from 'react-collapse'
import { useAccount } from 'wagmi'
import ConnectBtn from './connet-btn'
import { PointsIcons } from './points-icons'
import { CoinIcon } from './icons/coinicon'
import { SimpleTabs } from './simple-tabs'

const arrowDown = (
  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
    <path
      d='M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z'
      fill='#6466F1'
    />
  </svg>
)

const arrowUp = (
  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
    <path
      d='M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z'
      fill='#6466F1'
    />
  </svg>
)

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

const cycle = (
  <div className='mr-[10px]'>
    <svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 0 5 5' fill='none'>
      <circle cx='2.5' cy='2.5' r='2.5' fill='#64748B' />
    </svg>
  </div>
)

function VaultSimple({ vc }: { vc: PlainVaultConfig }) {
  const { balances, prices, plainVaultsStat } = useContext(FetcherContext)
  const assetPrice = getBigint(prices, vc.assetToken)
  const asset = vc.assetTokenSymbol
  const [amount, setAmount] = useState('')
  const amountBn = parseEthers(amount)
  const balance = balances[vc.assetToken]
  const maxPairAssetOut = plainVaultsStat[vc.vault].userStaked
  // withdraw
  const [assetAmount, setAssetAmount] = useState('')
  const assetAmountBn = parseEthers(assetAmount)
  const redeemPrepareConfig = useMemo(() => {
    const base: Parameters<typeof ApproveAndTx>[0]['config'] = {
      abi: abiPlainVault,
      address: vc.vault,
      functionName: 'withdraw',
      args: [assetAmountBn],
    }
    // console.info('redeem:', base)
    return base
  }, [assetAmountBn, vc])
  return (
    <div className='w-full relative flex items-center justify-between'>
      <div className='bg-white relative border border-1 border-[#E4E4E7] p-5 rounded-[16px] w-full dark:bg-transparent dark:border dark:border-zinc-600'>
        <SimpleTabs
          data={[
            {
              tab: 'Deposit',
              content: (
                <div className='mt-4'>
                  <AssetInput
                    asset={asset}
                    exchange={displayBalance((assetPrice * amountBn) / DECIMAL)}
                    balance={balance}
                    amount={amount}
                    setAmount={setAmount}
                  />
                  <div className='text-xs text-[#64748B] dark:text-slate-50/60 leading-[12px] flex items-center pl-[5px] mt-[6px]'></div>
                  <ApproveAndTx
                    tx='Deposit'
                    disabled={amountBn <= 0n || amountBn > balance}
                    onTxSuccess={() => {
                      setAmount('')
                    }}
                    config={{
                      abi: abiPlainVault,
                      address: vc.vault,
                      args: [amountBn],
                      value: vc.assetToken == NATIVE_TOKEN_ADDRESS ? amountBn : 0n,
                      functionName: 'stake',
                    }}
                    approves={{ [vc.assetToken]: amountBn }}
                    spender={vc.vault}
                  />
                </div>
              ),
            },
            {
              tab: 'Withdraw',
              content: (
                <div className='mt-4'>
                  <div className='flex flex-col gap-2'>
                    <AssetInput
                      amount={assetAmount}
                      setAmount={setAssetAmount}
                      balance={maxPairAssetOut}
                      balanceTit='Deposited'
                      asset={asset}
                      exchange={displayBalance((assetPrice * assetAmountBn) / DECIMAL)}
                    />
                  </div>
                  <div className='text-xs text-[#64748B] dark:text-slate-50/60 leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]'>
                    <span className='flex'></span>
                  </div>

                  <ApproveAndTx
                    tx='Withdraw'
                    config={redeemPrepareConfig}
                    disabled={assetAmountBn <= 0n || assetAmountBn > maxPairAssetOut}
                    onTxSuccess={() => {
                      console.info('Redeem onSuccess:')
                      setAssetAmount('')
                    }}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

const ExpandUI = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => {
  return (
    <div className='flex md:hidden justify-center  items-center py-5'>
      <div
        className='px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer '
        onClick={onClick}
      >
        <span className='mr-[5px]'>{isOpen ? 'Hide' : 'Details'}</span>
        {isOpen ? arrowUp : arrowDown}
      </div>
    </div>
  )
}

export function PlainVault({ vc }: { vc: PlainVaultConfig }) {
  const { prices, plainVaultsStat } = useContext(FetcherContext)

  const assetPrice = getBigint(prices, vc.assetToken)
  // fake data
  const totalBn = plainVaultsStat[vc.vault].totalSupply
  const total = displayBalance(totalBn)
  const totalDep = displayBalance((totalBn * assetPrice) / DECIMAL)

  const { address } = useAccount()
  const [isOpen, setIsOpen] = useState(false)
  // console.log(vaultConfig)
  const x = `${vc.assetTokenSymbol}x`
  const onCollapseChange = () => {
    setIsOpen(!isOpen)
  }

  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className='card p-0'>
      <div
        ref={ref}
        className='w-full flex flex-col gap-5 md:flex-row justify-between items-center p-4 md:p-10 cursor-pointer'
        onClick={(e) => e.target == ref.current && onCollapseChange()}
      >
        <div className='flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5'>
          <div className='flex w-full relative md:w-[10rem] flex-shrink-0'>
            <CoinIcon symbol={vc.assetTokenSymbol} size={32} />
            <div className='ml-[5px] flex flex-col justify-between'>
              <div className='text-sm font-semibold whitespace-nowrap'>{vc.assetTokenSymbol}</div>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-medium'>
                ${displayBalance(assetPrice)}
              </div>
            </div>
            <PointsIcons icons={['ethfi', 'weeth', 'gold', 'wand']} className='ml-auto md:absolute top-10 left-0' />
          </div>
          <div className='h-[1px] w-full bg-[#E4E4E7] dark:bg-zinc-600 md:hidden' />
          <div className='grid grid-cols-3 md:grid-cols-6 gap-5 gap-y-[2rem] md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0'>
            <div className='flex flex-col justify-between relative gap-2 md:gap-0'>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
                Total Deposit
              </div>
              <div className='flex items-center'>
                <CoinIcon symbol={vc.assetTokenSymbol} size={14} />
                <span className='text-[14px] leading-[14px] font-medium ml-[5px]'>{total}</span>
              </div>
              <div className='absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px]'>
                ~${totalDep}
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
                {USBSymbol} Debt
              </div>
              <div className='flex items-center'>
                <CoinIcon className='mx-1' symbol={USBSymbol} size={14} />
                <span className='text-[14px] leading-[14px] font-medium ml-[5px]'>{'0.00'}</span>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
                {x}
                <Tip>This is a margin token, representing open position in the vault.</Tip>
              </div>
              <div className='flex items-center'>
                <CoinIcon className='mx-1' symbol={x} size={14} />
                <span className='text-[14px] leading-[14px] font-medium ml-[5px]'>{'0.00'}</span>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
                AAR
                <Tip>Asset Adequacy Ratio</Tip>
              </div>
              <div className='flex items-center'>
                <span className='text-[14px] leading-[14px] font-medium'>{'n/a'}</span>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
                Status
              </div>
              <div className='flex items-center'>
                <span className='text-[14px] leading-[14px] font-medium'>{'n/a'}</span>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
                Discount Offer
              </div>
              <div className='flex items-center'>
                <span className='text-[14px] leading-[14px] font-medium'>{'n/a'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='items-center text-xs text-[#6466F1] cursor-pointer hidden md:flex' onClick={onCollapseChange}>
          <span className='mr-[5px]'>{isOpen ? 'Hide' : 'Details'}</span>
          {isOpen ? arrowUp : arrowDown}
        </div>
      </div>
      <Collapse isOpened={isOpen} className='ease-linear'>
        <div className='w-full rounded-b-[16px] bg-[#F2F5F9] dark:bg-transparent p-4 md:p-6 dark:border-t dark:border-zinc-600'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='hidden md:flex'>
              <div className='md:h-full mb-5 md:mb-0 flex items-center'>
                <div className='flex mr-[55px] items-center'>
                  <CoinIcon symbol={x} size={32} className='shrink-0' />
                  <div className='ml-[5px] flex flex-col justify-between'>
                    <div className='text-sm font-semibold'>{x}</div>
                  </div>
                  <Button className='rounded ml-4'>Comming soon</Button>
                </div>
              </div>
            </div>
            <div className='w-full  flex items-center justify-center'>
              {address && vc && vc.vault.length == 42 ? (
                <VaultSimple vc={vc} />
              ) : vc && vc.vault.length == 42 ? (
                <ConnectBtn />
              ) : (
                <Button className='rounded'>Comming soon</Button>
              )}
            </div>
          </div>
          <ExpandUI onClick={onCollapseChange} isOpen={isOpen} />
        </div>
      </Collapse>
      {!isOpen && <ExpandUI onClick={onCollapseChange} isOpen={isOpen} />}
    </div>
  )
}
