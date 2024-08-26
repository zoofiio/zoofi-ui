'use client'

import { abiPtyPool } from '@/config/abi'
import { ETHSymbol, USB_ADDRESS, USBSymbol, VaultConfig } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useElementSizeCheck } from '@/hooks/useElementSizeCheck'
import { usePtypoolApy } from '@/hooks/usePtypoolApy'
import { useSyncHeight } from '@/hooks/useSyncHeight'
import { useWandContractRead } from '@/hooks/useWand'
import { useWrapContractWrite } from '@/hooks/useWrapContractWrite'
import { bnMin, fmtPercent, getBigint, parseEthers } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance } from '@/utils/display'
import { Divider, Grid } from '@tremor/react'
import clsx from 'clsx'
import { ReactNode, useContext, useMemo, useState } from 'react'
import { formatEther } from 'viem'
import { useAccount } from 'wagmi'
import { ApproveAndTx } from '../approve-and-tx'
import { AssetInput } from '../asset-input'
import { CoinIcon } from '../coinicon'
import ConnectBtn from '../connet-btn'
import { FmtPercent } from '../fmt-percent'
import { Spinner } from '../spinner'
import { Tip } from '../ui/tip'
import { WrapDiv } from '../ui/wrap-div'

interface DualInvestmentCardProps {
  vc: VaultConfig
  type?: 'buy' | 'sell'
}

const history = [
  { date: 'Aug-30-2023 08:33:59 AM +UTC', action: 'Bought 3.22 ETH at $2000', src: '' },
  { date: 'Aug-30-2023 08:33:59 AM +UTC', action: 'Bought 3.22 ETH at $2000', src: '' },
  { date: 'Aug-30-2023 08:33:59 AM +UTC', action: 'Bought 3.22 ETH at $2000', src: '' },
]

function TokenValue({ symbol, value, decimals }: { symbol: string; value?: bigint; decimals?: number }) {
  return (
    <div className='flex items-center gap-1'>
      <CoinIcon className='inline-block' size={16} symbol={symbol} />
      {displayBalance(value, decimals)}
    </div>
  )
}

export function PoolCard({ type, vc }: DualInvestmentCardProps) {
  const isBuy = type == 'buy'
  const chainId = useCurrentChainId()
  const stakeAddress = isBuy ? USB_ADDRESS[chainId] : vc.assetTokenAddress
  const matchAddress = isBuy ? vc.assetTokenAddress : vc.xTokenAddress
  const SELL = isBuy ? USBSymbol : vc.assetTokenSymbol
  const BUY = isBuy ? vc.assetTokenSymbol : USBSymbol
  const title = isBuy ? `Buy ${vc.assetTokenSymbol} Low` : `Sell ${vc.assetTokenSymbol} High`
  const poolAddress = isBuy ? vc.ptyPoolBelowAddress : vc.ptyPoolAboveAddress
  const { prices, balances, earns, vaultsState, assetLocked, vaultUSBTotal, usbApr } = useContext(FetcherContext)
  const vs = vaultsState[vc.vault]
  const earn = earns[poolAddress as any]
  const { address } = useAccount()
  const balance = balances[stakeAddress]
  // const [stakeAmount, setStakeAmount] = useState('')
  // const [unStakeAmount, setUnStakeAmount] = useState('')
  const [amount, setAmount] = useState('')
  const amountBn = parseEthers(amount)
  const STAKE_YIELD = isBuy ? vc.xTokenSymbol : vc.assetTokenSymbol
  const MATCH_YIELD = isBuy ? vc.assetTokenSymbol : vc.xTokenSymbol
  const tvl = useMemo(() => {
    return (earn.totalStake * getBigint(prices, stakeAddress, DECIMAL)) / DECIMAL
  }, [prices[stakeAddress], earn.totalStake])
  const targetAAR = isBuy ? vs?.AARS : vs?.AARU
  const assetAmount = getBigint(assetLocked, vc.assetTokenAddress)
  const usbTotal = getBigint(vaultUSBTotal, vc.vault)
  const targetPrice = useMemo(() => {
    if (!targetAAR || !vs.AARDecimals || assetAmount == 0n || usbTotal == 0n)
      return getBigint(prices, vc.assetTokenAddress)
    return (targetAAR * usbTotal * DECIMAL) / vs.AARDecimals / assetAmount / BigInt(1e9)
  }, [targetAAR, usbTotal, vs.AARDecimals, assetAmount])

  const mainTip = isBuy
    ? `Stake $USB, and when the ${vc.assetTokenSymbol} price falls to the target, it will trigger the purchase of ${vc.assetTokenSymbol} with staked $USB.`
    : `Stake ${vc.assetTokenSymbol}, and when the ${vc.assetTokenSymbol} price rises to the target, staked ${vc.assetTokenSymbol} will be sold.`

  const yieldForMatching = useWandContractRead({
    abi: abiPtyPool,
    address: poolAddress,
    functionName: 'getAccruedMatchingYields',
  })
  const ptypoolForMatching = getBigint(yieldForMatching, 'data')
  const discountRate = useMemo(() => {
    let staked = getBigint(earn, 'totalStake')
    if (staked == 0n || prices[stakeAddress] == 0n) return '0.00%'
    const AARDECIMALS = 10n ** (vs.AARDecimals || 10n)
    const targetPriceAART = (vs.AART - AARDECIMALS) * targetPrice
    if (targetPriceAART == 0n) return '0.00%'
    const deltaStaked = isBuy
      ? (vs.AART * vs.M_USB_ETH * DECIMAL - vs.M_ETH * targetPrice * AARDECIMALS) / (vs.AART - AARDECIMALS) / DECIMAL
      : (vs.M_ETH * targetPrice * AARDECIMALS - vs.AART * vs.M_USB_ETH * DECIMAL) / targetPriceAART
    staked = bnMin([staked, deltaStaked])
    return staked * prices[stakeAddress] > 0n
      ? fmtPercent((ptypoolForMatching * prices[matchAddress] * DECIMAL) / (staked * prices[stakeAddress]), 18, 3)
      : '0.00%'
  }, [
    earn.totalStake,
    ptypoolForMatching,
    matchAddress,
    stakeAddress,
    prices[matchAddress],
    prices[stakeAddress],
    isBuy,
  ])

  const apys = usePtypoolApy()
  const stakingApy = getBigint(apys[poolAddress as any], 'staking')
  const change =
    prices[vc.assetTokenAddress] > 0 && targetPrice > 0n
      ? isBuy
        ? ((prices[vc.assetTokenAddress] - targetPrice) * 10n ** 10n) / prices[vc.assetTokenAddress]
        : ((targetPrice - prices[vc.assetTokenAddress]) * 10n ** 10n) / prices[vc.assetTokenAddress]
      : 0n

  const triggerAmount = useMemo(() => {
    const AARDECIMALS = 10n ** (vs.AARDecimals || 10n)
    const price65 = ((vs.AART - AARDECIMALS) * targetPrice) / AARDECIMALS
    if (price65 == 0n) return 0n
    if (isBuy) {
      const deltaETH = (vs.AART * vs.M_USB_ETH * DECIMAL - vs.M_ETH * targetPrice * AARDECIMALS) / AARDECIMALS / price65
      const deltaUSB = (deltaETH * targetPrice) / DECIMAL
      // const userStake = 1000n * DECIMAL
      const userStake = earn.stake
      // (staked/pool) *(（AART*USB of ethvault-Value of ethvault）/(0.65*target price))
      const amount = earn.totalStake > deltaUSB && deltaUSB >= 0n ? (userStake * deltaUSB) / earn.totalStake : userStake
      return amount
    } else {
      const deltaETH = (vs.M_ETH * targetPrice * AARDECIMALS - vs.AART * vs.M_USB_ETH * DECIMAL) / AARDECIMALS / price65
      // const userStake = 1n * DECIMAL
      const userStake = earn.stake
      // console.info('info:', earn.totalStake > deltaETH,  earn.totalStake, deltaETH )
      // (staked/pool) *(（Value of ethvault - AART*USB of ethvault）/(0.65*target price))
      const amount = earn.totalStake > deltaETH && deltaETH >= 0n ? (userStake * deltaETH) / earn.totalStake : userStake
      return amount
    }
  }, [earn, vs, isBuy, targetPrice])

  const data = useMemo(() => {
    const infos: {
      key: string
      label: string
      value: ReactNode
      groupEnd?: boolean
      detail?: ReactNode
      tip?: string
    }[] = isBuy
      ? [
          {
            key: 'eth_price',
            label: `${vc.assetTokenSymbol} Price`,
            value: displayBalance(prices[vc.assetTokenAddress]),
          },
          {
            key: 'target_price',
            label: 'Target Price',
            value: (
              <div>
                {displayBalance(targetPrice)} (
                <FmtPercent value={change < 0n ? undefined : -change} decimals={10} plusI0={false} />)
              </div>
            ),
            groupEnd: true,
          },
          {
            key: 'apr_interest',
            label: `APY`,
            value: fmtPercent(usbApr.apr + stakingApy, usbApr.aprDecimals, 2),
            detail: (
              <div className='pl-2'>
                <div>
                  ~{USBSymbol} Interest: {fmtPercent(usbApr.apr, usbApr.aprDecimals, 2)}
                </div>
                <div>
                  ~{STAKE_YIELD} Yield: {fmtPercent(stakingApy, usbApr.aprDecimals, 2)}
                </div>
              </div>
            ),
            groupEnd: true,
          },
          {
            key: 'transacation_reward_pool',
            label: 'Reward Pool',
            tip: 'The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.',
            value: <TokenValue symbol={MATCH_YIELD} value={ptypoolForMatching} />,
          },
          {
            key: 'discount_rate',
            label: 'Reward Rate',
            tip: 'This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume',
            value: `${discountRate} (Est.)`,
          },
        ]
      : [
          {
            key: 'eth_price',
            label: `${vc.assetTokenSymbol} Price`,
            value: displayBalance(prices[vc.assetTokenAddress]),
          },
          {
            key: 'target_price',
            label: 'Target Price',
            value: (
              <div>
                {displayBalance(targetPrice)} (
                <FmtPercent value={change < 0n ? undefined : change} decimals={10} plusI0={true} />)
              </div>
            ),
            groupEnd: true,
          },
          {
            key: 'apr_yield',
            label: `APY(${STAKE_YIELD} Yield)`,
            value: fmtPercent(stakingApy, usbApr.aprDecimals, 2),
            groupEnd: true,
          },
          {
            key: 'transacation_reward_pool',
            label: 'Reward Pool',
            tip: 'The reward funds originates from protocol, and when a sell action is triggered, these funds will be distributed proportionally.',
            value: <TokenValue symbol={MATCH_YIELD} value={ptypoolForMatching} />,
          },
          {
            key: 'discount_rate',
            label: 'Reward Rate',
            tip: 'This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume',
            value: `${discountRate} (Est.)`,
          },
        ]
    return infos
  }, [earn, ptypoolForMatching])

  const addressData = useMemo(() => {
    const infos = isBuy
      ? [
          {
            key: 'successfully_brought',
            label: `Successfully Bought`,
            value: (
              <div className='flex items-center'>
                <TokenValue symbol={BUY} value={earn.match} />
                <span>+</span>
                <TokenValue symbol={MATCH_YIELD} value={earn.earnForMatch} />
                <Tip inFlex>From Reward Pool</Tip>
              </div>
            ),
          },

          {
            key: 'staking_earend',
            label: `${STAKE_YIELD} Earned`,
            value: <TokenValue symbol={STAKE_YIELD} value={earn.earn} />,
          },
        ]
      : [
          {
            key: 'successfully_sold',
            label: `Successfully Sold`,
            value: (
              <div className='flex items-center'>
                <TokenValue symbol={BUY} value={earn.match} />
                <span>+</span>
                <TokenValue symbol={MATCH_YIELD} value={earn.earnForMatch} />
                <Tip inFlex>From Reward Pool</Tip>
              </div>
            ),
          },
        ]
    return infos
  }, [earn, BUY, STAKE_YIELD, MATCH_YIELD])

  // writes
  const {
    write: claimAll,
    isDisabled: claimAllDisabled,
    isLoading: isClaimAllLoading,
  } = useWrapContractWrite({
    abi: abiPtyPool,
    address: poolAddress as any,
    functionName: 'claimAll',
  })

  // sync title height
  const ref = useSyncHeight<HTMLDivElement>(vc.vault)
  const [refCard, swapHead] = useElementSizeCheck(({ width }) => width < 512)

  return (
    <div className='card flex flex-col' ref={refCard as any}>
      <div className='flex gap-5 items-center justify-between' ref={ref}>
        <div className='flex gap-3 md:gap-5 items-center'>
          <div className='relative w-fit shrink-0'>
            <CoinIcon size={32} symbol={SELL} className='md:hidden' />
            <CoinIcon size={40} symbol={SELL} className='hidden md:block' />
            <CoinIcon size={16} symbol={BUY} className='absolute -right-1 -bottom-1 md:hidden' />
            <CoinIcon size={24} symbol={BUY} className='absolute -right-2 -bottom-2 hidden md:block' />
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h6 className='page-sub'>{title || 'title'}</h6>
              <Tip>{mainTip}</Tip>
            </div>
          </div>
        </div>
        <WrapDiv wrap={swapHead} className='flex flex-col-reverse gap-1 items-end'>
          {/* <PointsIcons icons={['blast', 'gold', 'wand']} /> */}
          <div>
            <div className='text-xs text-black dark:text-slate-50 font-medium text-right'>Total {SELL} Staked</div>
            <div className='text-base text-black dark:text-slate-50 text-end font-semibold'>
              {displayBalance(earn.totalStake)}
            </div>
          </div>
        </WrapDiv>
      </div>

      <Divider className='my-4 h-[1px] dark:bg-zinc-600 ' />

      <Grid numItemsSm={2} className='flex-1'>
        <Grid
          numItemsSm={1}
          className='gap-y-2 gap-x-7 sm:border-r-[1px] border-[#E4E4E7] dark:border-zinc-600 mb-3 md:mb-0 '
        >
          {data?.map((datum) => (
            <div key={datum.key} className={clsx('flex flex-col text-sm', { 'mb-4': datum.groupEnd })}>
              <div className='flex items-center flex-wrap'>
                <div className='text-black dark:text-slate-50 font-medium mr-[5px]'>
                  {datum.label} : {datum.tip && <Tip>{datum.tip}</Tip>}
                </div>
                <div className='text-neutral-900 dark:text-slate-50 ml-2'>{datum.value}</div>
              </div>
              {datum.detail}
            </div>
          ))}
        </Grid>
        {address && (
          <Grid numItemsSm={1} className='gap-x-1 pl-2'>
            <div className='w-full border-t-[1px] border-[#E4E4E7] dark:border-zinc-600 sm:border-0 sm:px-[0px]'>
              {addressData?.map((datum) => (
                <div key={datum.key} className='flex items-center flex-wrap mt-[8px] sm:mt-0 sm:mb-2'>
                  <div className='text-xs text-black dark:text-slate-50 whitespace-nowrap font-medium mr-[5px]'>
                    {datum.label} :
                  </div>
                  <div className='text-neutral-900 dark:text-slate-50 text-sm shrink-0 ml-2'>{datum.value}</div>
                </div>
              ))}
            </div>
            <div className='mt-auto h-fit'>
              <div className='w-full flex justify-center items-center'>
                <button
                  className='btn-primary flex items-center w-[60%] md:w-fit self-end justify-center gap-4 bg-[#64738B]'
                  disabled={claimAllDisabled || isClaimAllLoading}
                  onClick={() => claimAll()}
                >
                  <div className='flex px-10 py-2 gap-4 items-center whitespace-nowrap'>
                    {isClaimAllLoading && <Spinner />}
                    <span>Claim All</span>
                  </div>
                </button>
              </div>
              <div className='relative flex flex-col gap-1 mt-4 md:mt-[28px] justify-center items-center text-[#64748B] text-sm font-medium p-3 rounded-md bg-slate-100 dark:bg-transparent dark:text-slate-50'>
                <div className='flex items-center gap-1'>
                  Staked
                  <CoinIcon symbol={SELL} size={16} />
                  {displayBalance(earn.stake)}
                  <span
                    className='text-primary ml-[5px] cursor-pointer'
                    onClick={() => setAmount(formatEther(earn.stake))}
                  >
                    Max
                  </span>
                </div>
                <div className='flex items-center gap-1 pl-8'>
                  -{displayBalance(triggerAmount)}
                  <Tip inFlex>
                    This is the amount of staked {SELL} that will be {isBuy ? 'spent' : 'sold'} when price triggers.
                  </Tip>
                </div>
              </div>
            </div>
          </Grid>
        )}
      </Grid>
      {!address ? (
        <div className='w-full flex items-center justify-center mt-[30px]'>
          <ConnectBtn />
        </div>
      ) : (
        <div className='mt-4 md:mt-[30px]'>
          <AssetInput amount={amount} setAmount={setAmount} asset={SELL} balance={balance} checkBalance={false} />
          <div className='flex items-center justify-between'>
            <ApproveAndTx
              tx={'Stake'}
              disabled={amountBn <= 0n || amountBn > balance}
              onTxSuccess={() => {
                setAmount('')
              }}
              config={{
                abi: abiPtyPool,
                address: poolAddress as any,
                functionName: 'stake',
                args: [amountBn],
                value: SELL == ETHSymbol ? amountBn : 0n,
              }}
              className='mt-2 w-[calc(50%-10px)] !mx-0'
              approves={{ [stakeAddress]: amountBn }}
              spender={poolAddress}
            />
            <ApproveAndTx
              className='mt-2 w-[calc(50%-10px)] !mx-0'
              tx='Withdraw'
              disabled={amountBn <= 0n || amountBn > earn.stake}
              onTxSuccess={() => {
                setAmount('')
              }}
              config={{
                abi: abiPtyPool,
                address: poolAddress as any,
                functionName: 'withdraw',
                args: [amountBn],
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function GroupPoolCard({ vcs, type }: { vcs: VaultConfig[]; type: DualInvestmentCardProps['type'] }) {
  const [vc, setVC] = useState(vcs[vcs.length - 1])
  if (vcs.length == 0) return null
  if (vcs.length == 1) return <PoolCard vc={vcs[0]} type={type} />
  return (
    <div className='relative'>
      <PoolCard vc={vc} type={type} />
      <div className='absolute z-10 left-[86px] top-0 flex text-sm'>
        {vcs.map((item, index) => (
          <div
            key={'gdtc_' + index}
            className={clsx('cursor-pointer rounded-b-full border border-blue-500 px-1 py-1', {
              'bg-white text-black dark:text-slate-50': vc !== item,
              'bg-blue-500 text-white': vc === item,
            })}
            onClick={() => setVC(item)}
          >{`V${index + 1}`}</div>
        ))}
      </div>
    </div>
  )
}
