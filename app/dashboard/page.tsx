'use client'
import ConnectBtn from '@/components/connet-btn'
import { CoinIcon } from '@/components/coinicon'
import { Tip } from '@/components/ui/tip'
import { NATIVE_TOKEN_ADDRESS, PLAIN_VAULTS_CONFIG, USB_ADDRESS, USBSymbol, VAULTS_CONFIG } from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useTVL, useTVLV1 } from '@/hooks/useTVL'
import { fmtAAR, fmtPercent, getBigint } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance } from '@/utils/display'
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableCell as _TableCell,
} from '@tremor/react'
import Image from 'next/image'
import { Fragment, useContext } from 'react'
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
  const {
    prices,
    assetLocked,
    vaultUSBTotal,
    balances,
    earns,
    vaultsState,
    vaultsMode,
    vaultsDiscount,
    stableVaultsState,
    usbApr,
    plainVaultsStat,
  } = useContext(FetcherContext)
  const { address } = useAccount()

  const usbBalance = balances[USB_ADDRESS[chainId]]
  const usbStakingAmount = Object.values(earns)
    .filter((e) => e.stakeSymbol == USBSymbol)
    .reduce((sum, e) => sum + e.stake, 0n)
  const usbTotal = usbBalance + usbStakingAmount
  const earnSellTotalStatedUSD = vcs
    .filter((vc) => !vc.isStable)
    .reduce(
      (sum, vc) => sum + (earns[vc.ptyPoolAboveAddress as any].stake * prices[vc.assetTokenAddress]) / DECIMAL,
      0n,
    )
  const AARDecimals = BigInt(usbApr.aprDecimals)
  const addPerDay = AARDecimals > 0n ? (usbTotal * usbApr.apr) / 10n ** AARDecimals / 365n : 0n
  const usbAPR = fmtPercent(usbApr.apr, usbApr.aprDecimals)

  const { tvl: currentTvl, tvlItems } = useTVL()
  const tvlV1 = useTVLV1()
  const tvl = currentTvl + tvlV1
  const myTotalForPvc = pvcs.reduce((sum, pvc) => {
    return sum + (plainVaultsStat[pvc.vault].userStaked * prices[pvc.assetToken]) / DECIMAL
  }, 0n)
  const myTotalValue = vcs.reduce((sum, { xTokenAddress: xAddress }) => {
    return sum + (balances[xAddress] * prices[xAddress]) / DECIMAL
  }, usbTotal + earnSellTotalStatedUSD + myTotalForPvc)

  return (
    <div className='mx-auto max-w-screen-xl px-4'>
      <div className='page-title mb-4'>Protocol Overview</div>
      <Grid numItemsSm={2} className={'gap-3'}>
        <div className='card'>
          <div>
            <div className='page-sub'>Total Value Locked</div>
            <div className='text-indigo-500 dark:text-violet-300 text-xl font-semibold'>${displayBalance(tvl)}</div>
          </div>
          <Divider className='my-4 h-[1px] dark:bg-zinc-600' />
          <Table className='text-[14px] dark:text-slate-50'>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Assets</TableHeaderCell>
                <TableHeaderCell>NAV</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody className=''>
              {tvlItems.map(({ symbol, name, address, price, amount }) => (
                <TableRow key={name} className='dark:border-transparent'>
                  <TableCell className='flex items-center gap-2'>
                    <Image width={24} height={24} src={`/${symbol}.svg`} alt='' />
                    {name}
                  </TableCell>
                  <TableCell>${displayBalance(price)}</TableCell>
                  <TableCell>{displayBalance(amount)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className='card border relative px-0 pb-0 overflow-hidden'>
          <div className='px-[1.5rem]'>
            <div className='page-sub'>My Account</div>
            <div className='text-indigo-500 dark:text-violet-300 text-xl font-semibold'>
              ${displayBalance(myTotalValue)}
            </div>
          </div>

          <div className='px-[1.5rem]'>
            <Divider className='my-4 h-[1px] dark:bg-zinc-600' />
          </div>

          {!address && (
            <div className='w-full h-[108px] md:h-[50%] flex justify-center items-center'>
              <ConnectBtn />
            </div>
          )}
          {address && vcs.length > 0 && (
            <div className=' w-full overflow-x-auto'>
              <div className='w-max min-w-[100%]'>
                <Table className='min-w-[100%] w-fit  px-[1.5rem] text-[14px] '>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Assets</TableHeaderCell>
                      <TableHeaderCell>Balance</TableHeaderCell>
                      <TableHeaderCell>Open Position</TableHeaderCell>
                      <TableHeaderCell>
                        <div className='flex items-center'>
                          Margin Loan
                          <Tip>Repay your margin loan to redeem the asset corresponding to your open position.</Tip>
                        </div>
                      </TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vcs.map((x, index) => {
                      const symbol = x.xTokenSymbol
                      const xBalance = getBigint(balances, x.xTokenAddress)
                      const vs = vaultsState[x.vault]
                      const vs_s = stableVaultsState[x.vault]
                      const xTotalBn = x.isStable ? vs_s.M_USDCx : vs.M_ETHx
                      const totalBn = x.isStable ? vs_s.M_USDC : vs.M_ETH
                      const mUsbBn = x.isStable ? vs_s.M_USB_USDC : vs.M_USB_ETH
                      const myOpenPosition = xTotalBn > 0n ? (xBalance * totalBn) / xTotalBn : 0n
                      const myMarginLoan = xTotalBn > 0n ? -(xBalance * mUsbBn) / xTotalBn : 0n
                      return (
                        <Fragment key={symbol + index}>
                          <TableRow className='dark:border-transparent'>
                            <TableCell className='flex items-center gap-2'>
                              <CoinIcon symbol={symbol} size={24} />
                              {symbol + x.version}
                            </TableCell>
                            <TableCell>{displayBalance(xBalance)}</TableCell>
                            <TableCell className='flex items-center gap-1'>
                              <CoinIcon symbol={x.assetTokenSymbol} size={20} /> {displayBalance(myOpenPosition)}
                            </TableCell>
                            <TableCell>${displayBalance(myMarginLoan)}</TableCell>
                          </TableRow>
                        </Fragment>
                      )
                    })}
                    {/* {pvcs.map((x, index) => {
                      const symbol = x.assetTokenSymbol
                      const xBalance = plainVaultsStat[x.vault].userStaked
                      return (
                        <Fragment key={symbol + index}>
                          <TableRow>
                            <TableCell className='flex items-center gap-2'>
                              <CoinIcon symbol={symbol} size={24} />
                              {symbol}
                            </TableCell>
                            <TableCell>{displayBalance(xBalance)}</TableCell>
                            <TableCell className='flex items-center gap-1'>{'n/a'}</TableCell>
                            <TableCell>{'n/a'}</TableCell>
                          </TableRow>
                        </Fragment>
                      )
                    })} */}
                  </TableBody>
                </Table>
                <div className='w-full mt-[50px] flex flex-col text-sm text-gray-500 justify-between gap-3 py-5 px-9 bg-zinc-200 dark:bg-zinc-900 dark:text-slate-50'>
                  <div className='flex items-center w-full gap-2'>
                    {vcs
                      .filter((vc) => !vc.isStable && vc.ptyPoolAboveAddress)
                      .map((x, index) => {
                        const symbol = x.assetTokenSymbol
                        const staked = earns[x.ptyPoolAboveAddress as any].stake
                        return (
                          <Fragment key={'sell_hight_stake' + index}>
                            <CoinIcon size={24} symbol={symbol} className={index > 0 ? 'ml-auto' : ''} />
                            <div>{symbol}</div>
                            <div className={index > 0 ? 'mr-auto' : ''}>Staked:{displayBalance(staked)}</div>
                          </Fragment>
                        )
                      })}
                    {pvcs.length > 0 && (
                      <>
                        <CoinIcon size={24} symbol='weETH' className='ml-auto' />
                        <div>{'weETH'}</div>
                        <div className='mr-auto'>
                          Deposited:{displayBalance(plainVaultsStat[pvcs[0].vault].userStaked)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className='w-fit'>
                    <div className='flex items-center gap-2'>
                      <CoinIcon size={24} symbol={USBSymbol} />
                      <div>{USBSymbol}</div>
                      <div>{displayBalance(usbTotal)}</div>
                      <div>(Staked:{displayBalance(usbStakingAmount)})</div>
                      <div className='text-[#10B981] text-sm font-medium'>
                        +{displayBalance(addPerDay)}(APY:{usbAPR})
                      </div>
                    </div>
                    <div className='text-right text-[#64748B] dark:text-slate-50/60 text-xs font-medium'>
                      Estimated increase in 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Grid>

      <Grid numItemsSm={1} className={'gap-3 mt-[30px]'}>
        <div className='card border'>
          <Table className='text-[14px]'>
            <TableHead>
              <TableRow>
                <TableHeaderCell className='font-medium'>Vaults</TableHeaderCell>
                <TableHeaderCell className='font-medium'>Total Deposit</TableHeaderCell>
                <TableHeaderCell className='font-medium'>{USBSymbol} Debt</TableHeaderCell>
                <TableHeaderCell className='font-medium'>
                  AAR<Tip>Asset Adequacy Ratio</Tip>
                </TableHeaderCell>
                <TableHeaderCell className='font-medium'>Status</TableHeaderCell>
                <TableHeaderCell className='font-medium'>Discount Offer</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody className='text-black dark:text-slate-50'>
              {vcs.map((a, index) => (
                <TableRow key={a.assetTokenSymbol + index} className='dark:border-zinc-600'>
                  <TableCell className='flex items-center gap-2 text-[16px] font-semibold'>
                    <CoinIcon symbol={a.assetTokenSymbol} size={24} />
                    {a.assetTokenSymbol + a.version}
                  </TableCell>
                  <TableCell>
                    <>
                      <div className='flex items-center gap-2 text-[14px] font-medium'>
                        <CoinIcon symbol={a.assetTokenSymbol} size={14} />
                        {displayBalance(assetLocked[a.assetTokenAddress])}
                      </div>
                      <div className='text-[#64738B] dark:text-slate-50/60 text-xs font-medium'>
                        ~${displayBalance((prices[a.assetTokenAddress] * assetLocked[a.assetTokenAddress]) / DECIMAL)}
                      </div>
                    </>
                  </TableCell>
                  <TableCell className='flex items-center gap-2 text-[14px] font-medium'>
                    <CoinIcon symbol={USBSymbol} size={14} />
                    {displayBalance(vaultUSBTotal[a.vault])}
                  </TableCell>
                  <TableCell className='text-[14px] font-medium'>
                    {a.isStable
                      ? fmtAAR(stableVaultsState[a.vault].aar, stableVaultsState[a.vault].AARDecimals)
                      : fmtAAR(vaultsState[a.vault].aar, vaultsState[a.vault].AARDecimals)}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center text-[14px] font-medium'>
                      {vaultsMode[a.vault] <= 1 ? (
                        <>
                          {greenPoint} <span className='ml-[5px]'>Stability</span>
                        </>
                      ) : (
                        <>
                          {redPoint} <span className='ml-[5px]'>Adjustment</span>
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center text-[14px] font-medium'>
                      {vaultsDiscount[a.vault] ? (
                        <>
                          {redPoint} <span className='ml-[5px]'>Yes</span>
                        </>
                      ) : (
                        <>
                          {greenPoint} <span className='ml-[5px]'>No</span>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {pvcs.map((a, index) => (
                <TableRow key={a.assetTokenSymbol + index} className='dark:border-zinc-600'>
                  <TableCell className='flex items-center gap-2 text-[16px] font-semibold'>
                    <CoinIcon symbol={a.assetTokenSymbol} size={24} />
                    {a.assetTokenSymbol}
                  </TableCell>
                  <TableCell>
                    <>
                      <div className='flex items-center gap-2 text-[14px] font-medium'>
                        <CoinIcon symbol={a.assetTokenSymbol} size={14} />
                        {displayBalance(plainVaultsStat[a.vault].totalSupply)}
                      </div>
                      <div className='text-[#64738B] dark:text-slate-50/60  text-xs font-medium'>
                        ~$
                        {displayBalance((prices[a.assetToken] * plainVaultsStat[a.vault].totalSupply) / DECIMAL)}
                      </div>
                    </>
                  </TableCell>
                  <TableCell className='flex items-center gap-2 text-[14px] font-medium'>
                    <CoinIcon symbol={USBSymbol} size={14} />
                    {displayBalance(vaultUSBTotal[a.vault])}
                  </TableCell>
                  <TableCell className='text-[14px] font-medium'>n/a</TableCell>
                  <TableCell className='text-[14px] font-medium'>n/a</TableCell>
                  <TableCell className='text-[14px] font-medium'>n/a</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Grid>

      {/* <Assets className={'mt-20'} /> */}
    </div>
  )
}
