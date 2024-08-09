'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import { AssetInput } from '@/components/asset-input'
import { CoinIcon } from '@/components/coinicon'
import { abiVault, abiVaultQuery } from '@/config/abi'
import {
  PROTOCOL_SETTINGS_ADDRESS,
  USBSymbol,
  USB_ADDRESS,
  VAULTS_CONFIG,
  VAULT_QUERY_ADDRESS,
  VaultConfig,
} from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useWandContractRead } from '@/hooks/useWand'
import { aarToNumber, fmtAAR, fmtPercent, getBigint, parseEthers } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance } from '@/utils/display'
import Image from 'next/image'
import { useContext, useMemo, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

const ValutArea = ({ asset }: { asset: string }) => {
  const { vaultsState, stableVaultsState, vaultsDiscount } = useContext(FetcherContext)
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const vc = vcs.find((item) => item.assetTokenSymbol == asset) as VaultConfig
  const token = vc.assetTokenSymbol
  const discountEnable = vaultsDiscount[vc.vault]
  const discountSate = discountEnable ? 'Discount available' : 'No discount'
  const isTrigger = !discountEnable
  const vs = vaultsState[vc.vault]
  const vs_s = stableVaultsState[vc.vault]
  const { rate } = useDiscountRate(vc)
  const [left1, left2] = useMemo(() => {
    if (vc.isStable) {
      if (!vs_s) return ['50%', '50%']
      const aaru = 2
      const start = aaru / 2
      const toPercent = (num: number) => {
        return (Math.max(0, Math.min(1, (num - start) / (aaru - start))) * 100).toFixed(2) + '%'
      }
      const aars = aarToNumber(vs_s.AARS, vs_s.AARDecimals)
      const aar = aarToNumber(vs_s.aar, vs_s.AARDecimals)
      return [toPercent(aar), toPercent(aars)]
    } else {
      if (!vs) return ['50%', '50%']
      const aaru = aarToNumber(vs.AARU, vs.AARDecimals)
      const aar = aarToNumber(vs.aar, vs.AARDecimals)
      const aars = aarToNumber(vs.AARS, vs.AARDecimals)
      const aart = aarToNumber(vs.AART, vs.AARDecimals)
      const start = aaru / 2
      const toPercent = (num: number) => {
        return (Math.max(0, Math.min(1, (num - start) / (aaru - start))) * 100).toFixed(2) + '%'
      }
      const left1 = toPercent(aar)
      if (isTrigger) return [left1, toPercent(aars)]
      return [left1, toPercent(aart)]
    }
  }, [vc.isStable, vs.AARU, vs.aar, vs.AARS, vs.AART, vs_s.AARS, vs_s.aar, isTrigger])

  const currentAar = vc.isStable ? fmtAAR(vs_s.aar, vs_s.AARDecimals) : fmtAAR(vs.aar, vs.AARDecimals)
  const triggerAar = vc.isStable
    ? fmtAAR(vs_s.AARS, vs_s.AARDecimals)
    : isTrigger
    ? fmtAAR(vs.AARS, vs.AARDecimals)
    : fmtAAR(vs.AART, vs.AARDecimals)

  const aarMark = (
    <div
      style={{ position: 'relative', left: left1, transform: 'translate(-50%,0)' }}
      className='flex flex-col items-center w-fit rounded-md'
    >
      <div className='text-xs flex flex-col justify-center items-center p-1.5 px-4'>
        <span className='text-neutral-400 whitespace-nowrap'>Current AAR</span>
        <span className='font-medium dark:text-violet-300'>{currentAar}</span>
      </div>

      <svg
        width='10'
        height='8'
        viewBox='0 0 10 8'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-slate-950 dark:fill-slate-50'
        fill='currentColor'
      >
        <path d='M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z' />
      </svg>
    </div>
  )

  const triggerOrEndDiscount = (
    <div
      style={{ position: 'relative', left: left2, transform: 'translate(-50%,0)' }}
      className='flex flex-col items-center w-fit rounded-md'
    >
      <svg
        className='rotate-180'
        width='10'
        height='8'
        viewBox='0 0 10 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z' fill={isTrigger ? '#E83B3B' : '#54E83B'} />
      </svg>

      <div className='text-xs flex flex-col justify-center items-center p-1.5 px-4'>
        <span className='font-medium dark:text-violet-300'>AAR={triggerAar}</span>
        <span className='text-neutral-400 whitespace-nowrap'>{isTrigger ? 'Trigger discount' : 'Discount end'}</span>
      </div>
    </div>
  )

  return (
    <div className='bg-white border border-neutral-200 rounded-3xl flex flex-col items-center mb-4 md:flex-row p-4 w-full md:mb-[30px] dark:bg-transparent dark:border-zinc-600'>
      <div className='flex flex-col items-center h-fit gap-4'>
        <div className='md:w-[180px] flex items-center'>
          <CoinIcon symbol={vc.assetTokenSymbol} size={32} className='mr-[10px] md:hidden' />
          <CoinIcon symbol={vc.assetTokenSymbol} size={54} className='mr-[10px] hidden md:block' />
          <div>
            <h3 className='text-md md:text-xl font-bold'>{token} Vault</h3>
            <div className='text-xs flex items-center gap-2'>
              {!discountEnable && (
                <div className='flex items-center text-neutral-700 dark:text-slate-50 gap-1'>
                  <div
                    className={twMerge(
                      'w-3 h-3 shrink-0 rounded-full',
                      !discountEnable ? 'bg-green-500' : 'bg-red-500',
                    )}
                  />
                  {discountSate}
                </div>
              )}
            </div>
          </div>
        </div>
        {discountEnable && (
          <div className='text-sm flex items-center gap-2'>
            <div className={twMerge('w-3 h-3 shrink-0 rounded-full bg-red-500')} /> Discount Rate: {rate}
          </div>
        )}
      </div>
      <div className='w-full md:w-[calc(100%-170px)] p-4 rounded-lg flex flex-col gap-2'>
        {aarMark}
        <div className='flex items-center'>
          <div className='rounded-full shrink-0 w-[3px] h-[3px] bg-[#64748B] dark:bg-violet-300' />
          <div className="h-px flex-1 bg-[#64748B] dark:bg-violet-300 after:content-['AAR'] after:inline-block after:text-right after:w-full after:text-xs after:text-[#64748B] dark:after:text-slate-50" />
          <div className='rounded-full shrink-0 w-[3px] h-[3px] bg-[#64748B] dark:bg-violet-300' />
        </div>
        {triggerOrEndDiscount}
      </div>
    </div>
  )
}

function useDiscountRate(vc: VaultConfig) {
  const { prices } = useContext(FetcherContext)
  const chainId = useCurrentChainId()
  const { data: oneUsbXOut } = useWandContractRead({
    abi: abiVaultQuery,
    address: VAULT_QUERY_ADDRESS[chainId],
    functionName: vc.isStable ? 'calcUsbToMarginTokensForStableVault' : 'calcUsbToMarginTokens',
    args: [vc.vault, PROTOCOL_SETTINGS_ADDRESS[chainId], parseEthers('1')],
  })
  const oneUsbXoutValue = getBigint(oneUsbXOut, [1])
  // const xOut = (oneUsbXoutValue * usbAmountBn) / DECIMAL
  const xRatePrice = useMemo(() => {
    if (oneUsbXoutValue == 0n) return 0n
    return (parseEthers('1') * DECIMAL) / oneUsbXoutValue
  }, [oneUsbXoutValue])
  const rate = useMemo(() => {
    const xPrice = prices[vc.xTokenAddress]
    if (!xPrice || xPrice == 0n || xRatePrice == 0n) return '0.00%'
    if (xRatePrice >= xPrice) return '0.00%'
    return fmtPercent(((xPrice - xRatePrice) * DECIMAL) / xPrice, 18, 2)
  }, [prices[vc.xTokenAddress], xRatePrice])
  return { rate, oneUsbXoutValue }
}

export function LVaultsDiscount({ vc }: { vc: VaultConfig }) {
  const { balances, prices, vaultsDiscount } = useContext(FetcherContext)
  const chainId = useCurrentChainId()
  const vcs = useMemo(() => VAULTS_CONFIG[chainId].filter((item) => !item.disableIn), [chainId])
  const options = useMemo(() => vcs.map((vc) => ({ value: vc.vault, label: vc.xTokenSymbol })), [vcs])
  const [_coin, setCoin] = useState<(typeof options)[0]>(options[0])
  const coin = options.find((item) => item === _coin) ? _coin : options[0]
  //   const vc = vcs.find((item) => item.vault == coin.value) as VaultConfig
  const discountEnable = vaultsDiscount[vc.vault]
  const isTrigger = !discountEnable
  const xPrice = getBigint(prices, vc.xTokenAddress)

  const usbBalance = balances[USB_ADDRESS[chainId]]

  const [usbAmount, setUsbAmount] = useState('')
  const usbAmountBn = parseEthers(usbAmount)
  const swapEnable = usbAmountBn != 0n && usbAmountBn <= usbBalance && discountEnable
  const { rate, oneUsbXoutValue } = useDiscountRate(vc)
  const xOut = (oneUsbXoutValue * usbAmountBn) / DECIMAL
  const onSelectChange = (e: any) => {
    console.log(e)
    setCoin(e)
  }

  return (
    <div className=''>
      <div className='bg-indigo-50 dark:bg-s1 p-6 mt-[30px] rounded-3xl relative'>
        {/* <h3 className='text-indigo-500 dark:text-slate-50 font-medium text-xl'>Discount Offer</h3> */}
        <p className='text-indigo-900 dark:text-slate-50/80 mt-4'>
          {/* <Image
            src='/discount.png'
            style={{ shapeOutside: 'circle(39% at 64% -38%)' }}
            width={300}
            height={204}
            className='float-right -mt-[130px] -mr-20'
            alt=''
          /> */}
          Due to fluctuations in the prices of collateral, when the AAR decreases, the protocol will offer users the
          opportunity to purchase xToken at a discount with ${USBSymbol}. This means that you can engage in arbitrage.
        </p>
      </div>

      <div className='grid grid-cols-1 mt-5 gap-2 md:grid-cols-2 md:gap-4 md:gap-8 md:mt-8'>
        <div className='w-full'>
          {vcs.map((vc) => (
            <ValutArea key={`vault_area_${vc.assetTokenSymbol}`} asset={vc.assetTokenSymbol} />
          ))}
        </div>
        <div className='w-full bg-white border border-neutral-200 p-4 mb-4 md:p-[30px] md:pt-[60px] rounded-3xl md:mb-[30px] dark:bg-transparent dark:border-zinc-600'>
          <div className='flex flex-col items-center gap-2 w-full mx-auto'>
            <AssetInput
              asset={USBSymbol}
              amount={usbAmount}
              setAmount={setUsbAmount}
              balance={usbBalance}
              exchange={displayBalance((usbAmountBn * getBigint(prices, USB_ADDRESS[chainId], DECIMAL)) / DECIMAL)}
            />

            <div className='flex items-center justify-center w-full'>
              <div className='flex-1' />
              <LuChevronDown className='w-6 h-6 text-neutral-500  border border-neutral-200 rounded-full my-[10px]' />
              <div className='flex-1' />
            </div>
            <div className='w-full flex-1 text-right text-neutral-700 dark:text-slate-50/60 text-md whitespace-nowrap'>
              Discount Rate: {isTrigger ? '--' : rate}
            </div>
            <AssetInput
              asset={coin.label}
              amount={displayBalance(xOut)}
              exchange={displayBalance((xPrice * xOut) / DECIMAL)}
              readonly
              hasInput
              options={options}
              defaultValue={options[0]}
              onChange={onSelectChange}
            />
          </div>
          <ApproveAndTx
            tx='Swap'
            disabled={!swapEnable}
            onTxSuccess={() => {
              setUsbAmount('')
            }}
            config={{
              abi: abiVault,
              address: vc.vault,
              functionName: 'usbToMarginTokens',
              args: [usbAmountBn],
              enabled: swapEnable,
            }}
            approves={{ [USB_ADDRESS[chainId]]: usbAmountBn }}
            spender={vc.vault}
          />
        </div>
      </div>
    </div>
  )
}
