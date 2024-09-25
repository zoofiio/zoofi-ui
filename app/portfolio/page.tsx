'use client'
import { PageWrap } from '@/components/page-wrap'
import STable, { TableProps } from '@/components/simple-table'
import { useLoadBVaults, useLoadLVaults, useLoadUserBVaults, useLoadUserLVaults } from '@/hooks/useLoads'
import BeraLine from '@/components/icons/BeraLine'
import BullLine from '@/components/icons/BullLine'
import { CoinIcon } from '@/components/icons/coinicon'
import PandaLine from '@/components/icons/PandaLine'
import VenomLine from '@/components/icons/VenomLine'
import { Tip } from '@/components/ui/tip'
import { USB_ADDRESS, USBSymbol, VaultConfig, VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { fmtPercent, fmtTime } from '@/lib/utils'
import { defLVault, useUSBApr } from '@/providers/useLVaultsData'
import { useBalances } from '@/providers/useTokenStore'
import { displayBalance } from '@/utils/display'
import { Address } from 'viem'
import { useBoundStore } from '@/providers/useBoundStore'
import { BVaultConfig, BVAULTS_CONFIG } from '@/config/bvaults'
import { DECIMAL, ENV } from '@/constants'
import { LP_TOKENS } from '@/config/tokens'
import { calcBVaultPTApy } from '@/providers/useBVaultsData'
import { UserBVaultsStore } from '@/providers/sliceUserBVaults'
import { ReactNode, useMemo } from 'react'
import _ from 'lodash'

function PortfolioItem({
  title,
  sub,
  tHeader,
  tData,
  tableProps,
}: {
  title: ReactNode
  sub?: ReactNode
  tHeader: ReactNode[]
  tData: ReactNode[][]
  tableProps?: Omit<TableProps, 'header' | 'data'>
}) {
  return (
    <div className='card whitespace-nowrap'>
      {typeof title == 'string' ? <div className='text-2xl leading-none font-semibold'>{title}</div> : title}
      {typeof sub == 'string' ? <div className='text-[2rem] text-primary leading-none font-semibold mt-2'>{sub}</div> : sub}
      <div className='my-4 h-[1px] bg-border/60 dark:bg-border'></div>
      <div className='w-full overflow-x-auto'>
        <STable headerClassName='border-b-0' tbodyClassName='text-sm font-medium' header={tHeader} data={tData} {...(tableProps || {})} />
      </div>
    </div>
  )
}

const IconMap = { BeraLine, BullLine, PandaLine, VenomLine } as const

function IconTitle(p: { icon: keyof typeof IconMap; tit: string }) {
  const Micon = IconMap[p.icon]
  return (
    <div className='flex text-2xl leading-none font-semibold items-center gap-4'>
      <Micon className='text-[2rem]' showBg />
      <span>{p.tit}</span>
    </div>
  )
}

function CoinText(p: { symbol: string; txt?: string; size?: number }) {
  return (
    <div className='flex gap-2 items-center'>
      {<CoinIcon symbol={p.symbol} size={p.size || 20} />}
      <span>{p.txt || p.symbol}</span>
    </div>
  )
}
function InterestItem() {
  const { apr, aprDecimals } = useUSBApr()
  const chainId = useCurrentChainId()
  const balances = useBalances()
  const usbBalance = balances[USB_ADDRESS[chainId]]
  const yieldDay = (usbBalance * apr) / 365n / 10n ** BigInt(aprDecimals)
  return (
    <PortfolioItem
      title={<IconTitle tit='Interest Bear' icon='BeraLine' />}
      tHeader={['', 'Balance', 'APY', 'Est. Yield/day']}
      tData={[[<CoinText key='icon' symbol={USBSymbol} />, displayBalance(usbBalance), fmtPercent(apr, aprDecimals), displayBalance(yieldDay)]]}
    />
  )
}
function LeverageItem() {
  const chainId = useCurrentChainId()
  const lvcs = VAULTS_CONFIG[chainId]
  const balances = useBalances()

  const data: ReactNode[][] = useMemo(() => {
    const calcMyOpenPosition = (vc: VaultConfig) => {
      const s = useBoundStore.getState()
      const vs = s.sliceLVaultsStore.lvaults[vc.vault] || defLVault
      const totalBn = vs.isStable ? vs.M_USDC : vs.M_ETH
      const xTotalBn = vs.isStable ? vs.M_USDCx : vs.M_ETHx
      // const mUsbBn = vs.isStable ? vs.M_USB_USDC : vs.M_USB_ETH
      const myOpenPosition = xTotalBn > 0n ? (balances[vc.xTokenAddress] * totalBn) / xTotalBn : 0n
      return myOpenPosition
    }
    const calcMyMarginLoan = (vc: VaultConfig) => {
      const s = useBoundStore.getState()
      const vs = s.sliceLVaultsStore.lvaults[vc.vault] || defLVault
      // const totalBn = vs.isStable ? vs.M_USDC : vs.M_ETH
      const xTotalBn = vs.isStable ? vs.M_USDCx : vs.M_ETHx
      const mUsbBn = vs.isStable ? vs.M_USB_USDC : vs.M_USB_ETH
      const myMarginLoan = xTotalBn > 0n ? -(balances[vc.xTokenAddress] * mUsbBn) / xTotalBn : 0n
      return myMarginLoan
    }
    return lvcs.map((lvc) => [
      <CoinText key='coin' symbol={lvc.xTokenSymbol} />,
      displayBalance(balances[lvc.xTokenAddress]),
      <CoinText key='openposit' symbol={lvc.assetTokenSymbol} txt={displayBalance(calcMyOpenPosition(lvc))} />,
      <CoinText key='marginloan' symbol={USBSymbol} txt={displayBalance(calcMyMarginLoan(lvc))} />,
    ])
  }, [balances, lvcs])
  return (
    <PortfolioItem
      title={<IconTitle tit='Leverage Bull' icon='BullLine' />}
      tHeader={[
        '',
        'Balance',
        'Open Position',
        <div>
          Margin Loan
          <Tip>Repay your margin loan to redeem asset corresponding to your open position.</Tip>
        </div>,
      ]}
      tData={data}
    />
  )
}

function PrincipalItem() {
  const chainId = useCurrentChainId()
  const bvcs = useMemo(() => BVAULTS_CONFIG[chainId].filter((bvc) => (bvc.onEnv || []).includes(ENV)), [chainId])

  const data: ReactNode[][] = useMemo(() => {
    const s = useBoundStore.getState()
    const inRedeem = (bvc: BVaultConfig) => {
      return (s.sliceUserBVaults.epoches[bvc.vault] || []).reduce((sum, item) => sum + item.redeemingBalance, 0n)
    }
    const claimAble = (bvc: BVaultConfig) => {
      return (s.sliceUserBVaults.epoches[bvc.vault] || []).reduce((sum, item) => sum + item.claimableAssetBalance, 0n)
    }
    const yieldDay = (bvc: BVaultConfig) => {
      const balance = s.sliceTokenStore.balances[bvc.pToken] || 0n
      return (calcBVaultPTApy(bvc.vault) * balance) / 10n ** 10n / 365n
    }
    const datas = bvcs.map((bvc) => {
      const pBalance = s.sliceTokenStore.balances[bvc.pToken] || 0n
      const pRedeeming = inRedeem(bvc)
      const pClaimAble = claimAble(bvc)
      const pTotalUser = pBalance + pRedeeming + pClaimAble
      const lp = LP_TOKENS[bvc.asset]
      const [baseSymbol, quoteSymbol] = lp ? bvc.assetSymbol.split('-') : ['', '']
      const totalLP = s.sliceBVaultsStore.bvaults[bvc.vault]?.lpLiq || 0n
      const totalLPBase = s.sliceBVaultsStore.bvaults[bvc.vault]?.lpBase || 0n
      const totalLPQuote = s.sliceBVaultsStore.bvaults[bvc.vault]?.lpQuote || 0n
      const uBase = lp && totalLP && totalLPBase && pTotalUser ? (pTotalUser * totalLPBase) / totalLP : 0n
      const uQuote = lp && totalLP && totalLPQuote && pTotalUser ? (pTotalUser * totalLPQuote) / totalLP : 0n
      const fmtTotalUser = displayBalance(pTotalUser)
      return { bvc, pBalance, pRedeeming, pClaimAble, lp, baseSymbol, quoteSymbol, uBase, uQuote, fmtTotalUser }
    })
    const maxFmtTotalUserLength = datas.reduce((max, item) => Math.max(max, item.fmtTotalUser.length), 0)
    const fmtTotalUserWidth = Math.round(maxFmtTotalUserLength * 5 + 20)
    return datas.map(({ bvc, pBalance, pRedeeming, pClaimAble, lp, fmtTotalUser, baseSymbol, quoteSymbol, uBase, uQuote }) => {
      return [
        <CoinText key={'coin'} symbol={bvc.assetSymbol} txt={bvc.pTokenSymbol} size={32} />,
        displayBalance(pBalance),
        displayBalance(pRedeeming),
        displayBalance(pClaimAble),
        <div key={'total'} className='flex items-center gap-2'>
          <div style={{ width: fmtTotalUserWidth }}>{fmtTotalUser}</div>
          {lp && (
            <div>
              <CoinText size={14} symbol={baseSymbol} txt={displayBalance(uBase)} />
              <CoinText size={14} symbol={quoteSymbol} txt={displayBalance(uQuote)} />
            </div>
          )}
        </div>,
        fmtPercent(calcBVaultPTApy(bvc.vault), 10),
        displayBalance(yieldDay(bvc)),
      ]
    })
  }, [bvcs, useBoundStore.getState()])
  return (
    <PortfolioItem
      title={<IconTitle tit='Principal Panda' icon='PandaLine' />}
      tHeader={['', 'Balance', 'In Redemption', 'Claimable', 'Total Amount', 'APY', 'Est.Yield/day']}
      tData={data}
    />
  )
}
//

function BoostItem() {
  const chainId = useCurrentChainId()
  const bvcs = useMemo(() => BVAULTS_CONFIG[chainId].filter((bvc) => (bvc.onEnv || []).includes(ENV)), [chainId])
  const data: ReactNode[][] = useMemo(() => {
    const s = useBoundStore.getState()
    const epochInfo = (vault: Address, id: number) => s.sliceBVaultsStore.epoches[`${vault}_${id}`]
    const epochSetteld = (vault: Address, id: number) => s.sliceBVaultsStore.epochesRedeemPool[`${vault}_${id}`]
    const myShare = (bribes: Exclude<UserBVaultsStore['epoches'][Address], undefined>[number]['bribes']) => {
      const fb = bribes.find((b) => b.bribeAmount > 0n)
      if (!fb) return fmtPercent(0n, 0n)
      return fmtPercent((fb.bribeAmount * DECIMAL) / fb.totalRewards, 18)
    }
    const datas = bvcs.map((bvc) => {
      const epochs = s.sliceUserBVaults.epoches[bvc.vault] || []
      const epochsData = epochs
        .map((epoch) => ({
          ...epoch,
          myShare: myShare(epoch.bribes),
          epochInfo: epochInfo(bvc.vault, parseInt(epoch.epochId.toString())),
          settled: epochSetteld(bvc.vault, parseInt(epoch.epochId.toString()))?.settled || false,
        }))
        .filter((item) => !!item.epochInfo)
      return { bvc, epochsData }
    })
    return datas.map(({ bvc, epochsData }) => [
      <CoinText key={'coin'} symbol={bvc.assetSymbol} txt={bvc.yTokenSymbol} size={32} />,
      <div key={'epochs'}>
        {epochsData.map((epoch) => (
          <div key={epoch.epochId.toString()} className='flex items-baseline'>
            <div className='w-[4rem]'>Epoch {epoch.epochId.toString()}</div>
            <div className='opacity-60 text-xs'>
              {fmtTime(epoch.epochInfo!.startTime * 1000n, 'date')} - {fmtTime((epoch.epochInfo!.startTime + epoch.epochInfo!.duration) * 1000n, 'date')}
            </div>
          </div>
        ))}
      </div>,
      <div key={'amount'}>
        {epochsData.map((epoch) => (
          <div key={epoch.epochId.toString()}>{displayBalance(epoch.userBalanceYToken)}</div>
        ))}
      </div>,
      <div key={'time weighted'}>
        {epochsData.map((epoch) => (
          <div key={epoch.epochId.toString()}>{displayBalance(epoch.userBalanceYTokenSyntyetic)}</div>
        ))}
      </div>,
      <div key={'my share'}>
        {epochsData.map((epoch) => (
          <div key={epoch.epochId.toString()}>{epoch.myShare}</div>
        ))}
      </div>,
      <div key={'status'}>
        {epochsData.map((epoch) => (
          <div key={epoch.epochId.toString()}>{epoch.settled ? 'Mature' : 'Ongoing'}</div>
        ))}
      </div>,
    ])
  }, [bvcs, useBoundStore.getState()])
  return (
    <PortfolioItem
      title={<IconTitle tit='Boost Venom' icon='VenomLine' />}
      tHeader={['', 'Epoch', 'Amount', 'Time Weighted Points', 'My Share', 'Status']}
      tData={data}
      tableProps={{ cellClassName: (_index, celIndex) => (celIndex == 0 ? 'flex flex-col' : 'leading-[30px]') }}
    />
  )
}
function StakedPoolsItem() {
  const chainId = useCurrentChainId()
  const lvcs = VAULTS_CONFIG[chainId]
  const lStore = useBoundStore.getState().sliceLVaultsStore
  const datas: ReactNode[][] = useMemo(() => {
    const totalStakedUsb = lvcs.map((lvc) => lStore.user[lvc.vault]?.buyPool_userStakingBalance || 0n).reduce((sum, item) => sum + item, 0n)
    const usb = [
      <div key={'usb'} className='flex gap-6 items-center'>
        <CoinText symbol={USBSymbol} />
        <span>{displayBalance(totalStakedUsb)}</span>
      </div>,
    ]
    const assets = lvcs.map((lvc) => (
      <div key={lvc.assetTokenSymbol} className='flex gap-6 items-center'>
        <CoinText symbol={lvc.assetTokenSymbol} />
        <span>{displayBalance(lStore.user[lvc.vault]?.sellPool_userStakingBalance || 0n)}</span>
      </div>
    ))
    const res = _.chunk([...usb, ...assets], 3).map((items) => (items.length == 3 ? items : _.fill(items, '', 3 - items.length)))
    return res
  }, [lvcs, lStore])
  return <PortfolioItem title='Staked in BuyLow/Sell High' tHeader={['', '', '']} tData={datas} />
}
export default function Dashboard() {
  useLoadLVaults()
  useLoadBVaults()
  useLoadUserLVaults()
  useLoadUserBVaults()
  return (
    <PageWrap>
      <div className='w-full max-w-[1200px] px-4 mx-auto flex flex-col gap-5 md:pb-8'>
        <InterestItem />
        <LeverageItem />
        <PrincipalItem />
        <BoostItem />
        <StakedPoolsItem />
      </div>
    </PageWrap>
  )
}
