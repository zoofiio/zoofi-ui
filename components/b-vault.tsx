import PandaLine from '@/components/icons/PandaLine'
import VenomLine from '@/components/icons/VenomLine'
import { abiBVault, abiRedeemPool } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { getBexPoolURL } from '@/config/network'
import { LP_TOKENS } from '@/config/tokens'
import { DECIMAL } from '@/constants'
import { useWandTimestamp } from '@/hooks/useWand'
import { cn, FMT, fmtBn, fmtDate, fmtDuration, fmtPercent, getBigint, handleError, parseEthers } from '@/lib/utils'
import { useStoreShallow } from '@/providers/useBoundStore'
import { useBVault, useBVaultApy, useBVaultBoost, useCalcClaimable, useEpochesData, useUpBVaultForUserAction } from '@/providers/useBVaultsData'
import { displayBalance } from '@/utils/display'
import { ProgressBar } from '@tremor/react'
import _ from 'lodash'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { RiLoopLeftFill } from 'react-icons/ri'
import { useMeasure, useToggle } from 'react-use'
import { List, ListRowProps } from 'react-virtualized'
import { zeroAddress } from 'viem'
import { useAccount, useReadContract, useWalletClient } from 'wagmi'
import { ApproveAndTx } from './approve-and-tx'
import { AssetInput } from './asset-input'
import BvaultEpochYtPrices from './bvault-epoch-ytprices'
import { CoinIcon } from './icons/coinicon'
import STable from './simple-table'
import { SimpleTabs } from './simple-tabs'
import { Switch } from './ui/switch'
import { Tip } from './ui/tip'
import { itemClassname, renderChoseSide, renderStat, renderToken } from './vault-card-ui'

function TupleTxt(p: { tit: string; sub: ReactNode; subClassname?: string }) {
  return (
    <div className='flex items-center gap-5'>
      <div className='text-xs dark:text-white/60 font-medium'>{p.tit}</div>
      <div className={cn('text-lg  font-medium flex items-center', p.subClassname)}>{p.sub}</div>
    </div>
  )
}

const maxClassname = 'max-w-4xl mx-auto w-full'

export function BVaultRedeem({ bvc }: { bvc: BVaultConfig }) {
  const [inputPToken, setInputPToken] = useState('')
  const inputPTokenBn = parseEthers(inputPToken)
  const bvd = useBVault(bvc.vault)
  const epoch = useEpochesData(bvc.vault)[0]
  const pTokenBalance = useStoreShallow((s) => s.sliceTokenStore.balances[bvc.pToken] || 0n)
  const upForUserAction = useUpBVaultForUserAction(bvc)
  const waitTimeFmt = bvd.current.duration > 0n ? `Waiting Time: ~${fmtDuration((bvd.current.duration + bvd.current.startTime) * 1000n - BigInt(_.now()))}` : ''
  return (
    <div className={cn('flex flex-col gap-1')}>
      <AssetInput asset={bvc.pTokenSymbol} assetIcon='Panda' amount={inputPToken} balance={pTokenBalance} setAmount={setInputPToken} />
      <div className='text-xs font-medium text-center'>
        {waitTimeFmt} <Tip>Wait to claim after the Epoch ends.</Tip>
      </div>
      <ApproveAndTx
        className='mx-auto mt-6'
        tx='Request'
        spender={epoch?.redeemPool}
        approves={{
          [bvc.pToken]: inputPTokenBn,
        }}
        disabled={(epoch && inputPTokenBn <= 0n) || inputPTokenBn > pTokenBalance}
        config={{
          abi: bvd.closed ? abiBVault : abiRedeemPool,
          address: bvd.closed ? bvc.vault : epoch?.redeemPool || zeroAddress,
          functionName: 'redeem',
          args: [inputPTokenBn],
        }}
        onTxSuccess={() => {
          setInputPToken('')
          upForUserAction()
        }}
      />
    </div>
  )
}

export function BVaultClaim({ bvc }: { bvc: BVaultConfig }) {
  const bvd = useBVault(bvc.vault)
  const epoch = useEpochesData(bvc.vault)[0]
  const redeemingBalance = epoch?.redeemingBalance || 0n
  const { ids, claimable } = useCalcClaimable(bvc.vault)
  const upForUserAction = useUpBVaultForUserAction(bvc)
  return (
    <div>
      <div className='flex justify-between text-base font-medium items-center gap-5 pt-4'>
        <div>
          <div className='text-black/60 dark:text-white/60 text-sm'>Available to Claim</div>
          <div className='flex gap-4 items-center whitespace-nowrap mt-2'>
            <CoinIcon symbol={bvc.assetSymbol} size={24} />
            <span className='font-semibold'>{bvc.assetSymbol}</span>
            <span className='text-black/60 dark:text-white/60 '>{displayBalance(claimable)}</span>
          </div>
        </div>

        <ApproveAndTx
          className='ml-auto w-1/3'
          busyShowTxet={false}
          tx='Claim'
          disabled={claimable <= 0n}
          config={{
            abi: abiBVault,
            address: bvc.vault,
            functionName: 'batchClaimRedeemAssets',
            args: [ids.length > 40 ? ids.slice(ids.length - 40) : ids],
          }}
          onTxSuccess={() => {
            upForUserAction()
          }}
        />
      </div>
      <div className='h-[1px] bg-border my-4'></div>
      <div>
        <div className='text-black/60 dark:text-white/60 mb-4'>Pending Requests</div>
        {
          <div className='flex items-center gap-4'>
            <PandaLine showBg className='text-2xl' />
            <span className='font-semibold'>{bvc.pTokenSymbol}</span>
            <span className='text-black/60 dark:text-white/60'>{displayBalance(redeemingBalance)}</span>
            <div className='ml-auto text-xs text-black/60 dark:text-white/60 '>
              Settlement Time : <span className='text-black dark:text-white font-semibold pr-2'>{fmtDate((bvd.current.duration + bvd.current.startTime) * 1000n, FMT.DATE2)}</span>{' '}
              {fmtDuration((bvd.current.duration + bvd.current.startTime) * 1000n - BigInt(_.now()))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export function BVaultP({ bvc }: { bvc: BVaultConfig }) {
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)
  const lp = LP_TOKENS[bvc.asset]
  const isLP = !!lp
  const pTokenSymbolShort = isLP ? 'PT' : bvc.pTokenSymbol
  const assetSymbolShort = isLP ? 'LP' : bvc.assetSymbol
  const bvd = useBVault(bvc.vault)
  const assetBalance = useStoreShallow((s) => s.sliceTokenStore.balances[bvc.asset] || 0n)
  const [fmtApy] = useBVaultApy(bvc.vault)
  const { data: walletClient } = useWalletClient()
  const upForUserAction = useUpBVaultForUserAction(bvc)
  const onAddPToken = () => {
    walletClient
      ?.watchAsset({
        type: 'ERC20',
        options: {
          address: bvc.pToken,
          symbol: bvc.pTokenSymbol,
          decimals: 18,
        },
      })
      .catch(handleError)
  }

  const params = useSearchParams()
  const subtab = params.get('subtab') as string

  const data = [
    {
      tab: 'Buy',
      content: (
        <div className='flex flex-col gap-1'>
          <AssetInput asset={bvc.assetSymbol} amount={inputAsset} balance={assetBalance} setAmount={setInputAsset} />
          <div className='text-xs font-medium flex justify-end items-center'>
            {isLP && (
              <Link target='_blank' className='underline' href={getBexPoolURL(bvc.asset)}>
                Get LP on BEX
              </Link>
            )}
          </div>
          <div className='text-xs font-medium text-center'>{`Receive 1 ${pTokenSymbolShort} for every ${assetSymbolShort}`}</div>
          <ApproveAndTx
            className='mx-auto mt-4'
            tx='Buy'
            disabled={inputAssetBn <= 0n || inputAssetBn > assetBalance}
            spender={bvc.vault}
            approves={{
              [bvc.asset]: inputAssetBn,
            }}
            config={{
              abi: abiBVault,
              address: bvc.vault,
              functionName: 'deposit',
              args: [inputAssetBn],
            }}
            onTxSuccess={() => {
              setInputAsset('')
              upForUserAction()
            }}
          />
        </div>
      ),
    },
    {
      tab: 'Withdraw',
      content: <BVaultRedeem bvc={bvc} />,
    },
    {
      tab: 'Claim',
      content: <BVaultClaim bvc={bvc} />,
    },
  ]
  const currentTab = data.find((item) => item.tab.toLowerCase() == subtab)?.tab
  return (
    <div className={cn('flex flex-col gap-5', maxClassname, 'max-w-xl')}>
      <div className='card !p-0 overflow-hidden w-full'>
        <div className='flex p-5 bg-[#A3D395] gap-5'>
          <PandaLine className='text-[3.375rem]' showBg />
          <div className='flex flex-col gap-2'>
            <div className='text-xl text-black font-semibold'>{bvc.pTokenSymbol}</div>
            <div className='text-xs text-black/60 font-medium'>Interest bearing rebase principal token</div>
          </div>
        </div>
        <div className='flex items-baseline justify-between px-5 pt-5 gap-5'>
          <TupleTxt tit='APY Est.' sub={fmtApy} />
          <TupleTxt tit='Total Supply' sub={<>{displayBalance(bvd.pTokenTotal)}</>} />
        </div>
        <div className='flex px-2 pb-5'>
          <button className='btn-link ml-auto text-black/60 dark:text-white/60 text-xs' onClick={onAddPToken}>
            Add to wallet
          </button>
        </div>
      </div>
      <div className='md:col-span-2 card !p-4'>
        <SimpleTabs currentTab={currentTab} data={data} />
      </div>
    </div>
  )
}

export function BVaultYInfo({ bvc }: { bvc: BVaultConfig }) {
  const isLP = bvc.assetSymbol.includes('-')

  const yTokenSymbolShort = isLP ? 'YT' : bvc.yTokenSymbol
  const assetSymbolShort = isLP ? 'LP token' : bvc.assetSymbol

  const bvd = useBVault(bvc.vault)
  const epoch = bvd.current

  const oneYTYieldOfAsset = bvd.current.yTokenAmountForSwapYT > 0n ? (bvd.lockedAssetTotal * DECIMAL) / bvd.current.yTokenAmountForSwapYT : 0n
  const [fmtBoost] = useBVaultBoost(bvc.vault)

  const calcProgress = (ep: typeof epoch) => {
    const now = BigInt(Math.floor(new Date().getTime() / 1000))
    if (now < ep.startTime) return 0
    if (now - epoch.startTime >= epoch.duration) return 100
    const progress = ((now - epoch.startTime) * 100n) / ep.duration
    return parseInt(progress.toString())
  }
  return (
    <div className='card !p-0 overflow-hidden flex flex-col'>
      <div className='flex p-5 bg-[#F0D187] gap-5'>
        <VenomLine className='text-[3.375rem]' showBg />
        <div className='flex flex-col gap-2'>
          <div className='text-xl text-black font-semibold'>{bvc.yTokenSymbol}</div>
          <div className='text-xs text-black/60 font-medium'>Yield token</div>
        </div>
      </div>
      <div className='flex flex-col justify-between p-5 gap-5 flex-1'>
        <div className='flex justify-between items-baseline gap-4 flex-wrap'>
          <div className='text-base font-semibold flex gap-5 items-end'>
            <span className='text-4xl font-medium'>{fmtBoost}x</span>
            {'Yield Boosted'}
          </div>
          <span className='text-xs'>
            1{yTokenSymbolShort} = Yield of {displayBalance(oneYTYieldOfAsset, 2)} {assetSymbolShort}
          </span>
        </div>
        <TupleTxt tit='Circulation amount' sub={<>{displayBalance(bvd.current.yTokenAmountForSwapYT)}</>} />
        {epoch && (
          <div className='dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col'>
            <div className='flex justify-between items-center'>
              <span>{`Epoch ${epoch.epochId.toString()}`}</span>
              <span className='scale-90'>~{fmtDuration((epoch.startTime + epoch.duration) * 1000n - BigInt(new Date().getTime()))} remaining</span>
            </div>
            <ProgressBar value={calcProgress(epoch)} className='mt-2 rounded-full overflow-hidden' />
            <div className='flex justify-between items-center'>
              <span className='scale-90'>{fmtDate(epoch.startTime * 1000n, FMT.ALL2)}</span>
              <span className='scale-90'>{fmtDate((epoch.startTime + epoch.duration) * 1000n, FMT.ALL2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
function BVaultYTrans({ bvc }: { bvc: BVaultConfig }) {
  const isLP = bvc.assetSymbol.includes('-')
  const pTokenSymbolShort = isLP ? 'PT' : bvc.pTokenSymbol
  const yTokenSymbolShort = isLP ? 'YT' : bvc.yTokenSymbol
  const assetSymbolShort = isLP ? 'LP token' : bvc.assetSymbol
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)
  const bvd = useBVault(bvc.vault)
  const epoch = bvd.current
  const assetBalance = useStoreShallow((s) => s.sliceTokenStore.balances[bvc.asset] || 0n)
  const { data: result, refetch: reFetchCalcSwap } = useReadContract({
    abi: abiBVault,
    address: bvc.vault,
    functionName: 'calcSwap',
    args: [inputAssetBn],
    query: {
      retry: true,
    },
  })
  const wt = useWandTimestamp()
  useEffect(() => {
    reFetchCalcSwap()
  }, [wt.time])
  const [priceSwap, togglePriceSwap] = useToggle(false)
  const vualtYTokenBalance = bvd.current.vaultYTokenBalance
  const outputYTokenForInput = getBigint(result, '1')
  const ytAssetPriceBn = vualtYTokenBalance > 0n ? (bvd.Y * DECIMAL) / vualtYTokenBalance : 0n
  const ytAssetPriceBnReverse = ytAssetPriceBn > 0n ? (DECIMAL * DECIMAL) / ytAssetPriceBn : 0n
  const priceStr = priceSwap
    ? `1 ${assetSymbolShort}=${displayBalance(ytAssetPriceBnReverse)} ${yTokenSymbolShort}`
    : `1 ${yTokenSymbolShort}=${displayBalance(ytAssetPriceBn)} ${assetSymbolShort}`

  const afterYtAssetPrice = vualtYTokenBalance > outputYTokenForInput ? ((bvd.Y + inputAssetBn) * DECIMAL) / (vualtYTokenBalance - outputYTokenForInput) : 0n
  const outputYTokenFmt = fmtBn(outputYTokenForInput, undefined, true)
  const priceImpact = afterYtAssetPrice > ytAssetPriceBn && ytAssetPriceBn > 0n ? ((afterYtAssetPrice - ytAssetPriceBn) * BigInt(1e10)) / ytAssetPriceBn : 0n
  // console.info('result:', result, fmtBn(afterYtAssetPrice), fmtBn(ytAssetPriceBn))
  const upForUserAction = useUpBVaultForUserAction(bvc)
  const calcProgress = (ep: typeof epoch) => {
    const now = BigInt(Math.floor(new Date().getTime() / 1000))
    if (now < ep.startTime) return 0
    if (now - epoch.startTime >= epoch.duration) return 100
    const progress = ((now - epoch.startTime) * 100n) / ep.duration
    return parseInt(progress.toString())
  }
  return (
    <div className='card !p-4 flex flex-col h-[24.25rem] gap-1'>
      <AssetInput asset={bvc.assetSymbol} amount={inputAsset} balance={assetBalance} setAmount={setInputAsset} />
      <div className='text-base font-bold my-2'>Receive</div>
      <AssetInput asset={bvc.yTokenSymbol} assetIcon='Venom' readonly disable checkBalance={false} amount={outputYTokenFmt} />
      <div className='text-xs font-medium  flex justify-between select-none'>
        <div className='flex items-center gap-2'>
          <RiLoopLeftFill className='text-sm text-primary cursor-pointer inline-block' onClick={() => togglePriceSwap()} />
          <span>{`Price: ${priceStr}`}</span>
        </div>
        <span>{`Price Impact: ${fmtPercent(priceImpact, 10, 2)}`}</span>
      </div>
      {/* <div className='text-xs font-medium text-black/80 dark:text-white/80'>
        1 {yTokenSymbolShort} represents the yield {<span className='font-extrabold text-base'>at least</span>} 1 {assetSymbolShort} until the end of Epoch.
      </div> */}
      <ApproveAndTx
        className='mx-auto mt-auto'
        tx='Buy'
        disabled={inputAssetBn <= 0n || inputAssetBn > assetBalance}
        config={{
          abi: abiBVault,
          address: bvc.vault,
          functionName: 'swap',
          args: [inputAssetBn],
        }}
        approves={{
          [bvc.asset]: inputAssetBn,
        }}
        spender={bvc.vault}
        onTxSuccess={() => {
          setInputAsset('')
          upForUserAction()
        }}
      />
    </div>
  )
}

function BribeTit(p: { name: string }) {
  return (
    <div className='flex items-center justify-start pl-5 gap-3'>
      <CoinIcon symbol='GreenDot' size={14} />
      <span className='text-sm font-medium'>{p.name}</span>
    </div>
  )
}

function BVaultPools({ bvc }: { bvc: BVaultConfig }) {
  const { address } = useAccount()
  const [onlyMy, setOnlyMy] = useState(false)
  const epochesData = useEpochesData(bvc.vault)
  const epoches = useMemo(() => {
    // console.info('epchesDataChange:', epochesData.length)
    const myFilter = (item: (typeof epochesData)[number]) => item.bribes.reduce((sum, b) => sum + b.bribeAmount, 0n) > 0n
    return onlyMy ? epochesData.filter(myFilter) : epochesData
  }, [epochesData, onlyMy])
  const viewMax = 6
  const itemHeight = 56
  const itemSpaceY = 20
  const [mesRef, mes] = useMeasure<HTMLDivElement>()
  const valueClassname = 'text-black/60 dark:text-white/60 text-sm'
  const [currentEpochId, setCurrentEpochId] = useState<bigint | undefined>(epoches[0]?.epochId)
  const current = useMemo(() => epoches.find((e) => e.epochId == currentEpochId), [epoches, currentEpochId])
  const userBalanceYToken = current?.userBalanceYToken || 0n
  const userBalanceYTokenSyntyetic = current?.userBalanceYTokenSyntyetic || 0n
  const onRowClick = (index: number) => {
    setCurrentEpochId(epoches[index]?.epochId)
  }
  useEffect(() => {
    if (!currentEpochId && epoches.length) {
      onRowClick(0)
    }
  }, [epoches, currentEpochId])

  const bribes = current?.bribes || []
  const myShare = useMemo(() => {
    const fb = bribes.find((b) => b.bribeAmount > 0n)
    if (!fb || fb.bribeTotalAmount == 0n) return fmtPercent(0n, 0n)
    return fmtPercent((fb.bribeAmount * DECIMAL) / fb.bribeTotalAmount, 18)
  }, [bribes])
  const upForUserAction = useUpBVaultForUserAction(bvc)
  function rowRender({ key, style, index }: ListRowProps) {
    const itemEpoch = epoches[index]
    const fTime = `${fmtDate(itemEpoch.startTime * 1000n)}-${fmtDate((itemEpoch.startTime + itemEpoch.duration) * 1000n)}`
    return (
      <div key={key} style={style} className='cursor-pointer' onClick={() => onRowClick(index)}>
        <div className={cn('h-[56px] card !rounded-lg !px-5 !py-2 font-semibold', index < epoches.length - 1 ? 'mb-[20px]' : '')}>
          <div className='text-sm'>Epoch {epoches[index].epochId.toString()}</div>
          <div className='text-xs dark:text-white/60 mt-1'>{fTime}</div>
        </div>
      </div>
    )
  }
  return (
    <div className='md:h-[24.25rem] card !p-4'>
      <div className='font-bold text-base'>Harvest</div>
      <div className={cn('flex flex-col md:flex-row gap-4 mt-2')}>
        <div className='flex flex-col gap-4 shrink-0 w-full md:w-[14.375rem]' ref={mesRef}>
          <div className='flex items-center gap-8 text-sm font-semibold'>
            <span>My Pool Only</span>
            <Switch checked={onlyMy} onChange={setOnlyMy as any} />
          </div>
          <List
            className={epoches.length > viewMax ? 'pr-5' : ''}
            width={mes.width}
            height={280}
            rowHeight={({ index }) => (index < epoches.length - 1 ? itemHeight + itemSpaceY : itemHeight)}
            overscanRowCount={viewMax}
            rowCount={epoches.length}
            rowRenderer={rowRender}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex gap-6 items-end font-semibold'>
            <span className='text-sm'>Accumulated Rewards</span>
            <span className='text-xs dark:text-white/60'>Epoch {(current?.epochId || 1n).toString()}</span>
          </div>
          <div className='mt-2 rounded-lg border border-solid border-border px-4 py-1 h-[8.125rem] overflow-auto'>
            <STable
              headerClassName='text-center text-black/60 dark:text-white/60 border-b-0'
              headerItemClassName='py-1'
              rowClassName='text-center'
              cellClassName='py-0'
              header={['', '', 'Total', 'Mine', '']}
              span={{ 1: 2, 2: 1, 3: 1 }}
              data={bribes.map((item) => ['', <BribeTit name={item.bribeSymbol} key={'1'} />, displayBalance(item.bribeTotalAmount), displayBalance(item.bribeAmount), ''])}
            />
          </div>
          <div className='rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center'>
            <div className='font-semibold text-xs'>
              <div>
                My yToken: <span className={cn(valueClassname)}>{displayBalance(userBalanceYToken)}</span>
              </div>
              <div>
                Time Weighted Points:{' '}
                <span className={cn(valueClassname)}>
                  {userBalanceYToken > 0n && userBalanceYTokenSyntyetic == 0n ? 'Reward received' : displayBalance(userBalanceYTokenSyntyetic)}
                </span>
              </div>
            </div>
            <div className='text-sm'>
              My Share: <span className={cn(valueClassname, 'text-xl')}>{myShare}</span>
            </div>
          </div>
          <span className='text-xs mx-auto'>You can harvest at the end of Epoch</span>
          <ApproveAndTx
            className='mx-auto mt-4'
            tx='Harvest'
            disabled={!current || !current?.settled}
            config={{
              abi: abiBVault,
              address: bvc.vault,
              functionName: 'claimBribes',
              args: [current?.epochId!],
            }}
            onTxSuccess={() => {
              upForUserAction()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function BVaultB({ bvc }: { bvc: BVaultConfig }) {
  const bvd = useBVault(bvc.vault)
  return (
    <div className='grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-5'>
      <BVaultYInfo bvc={bvc} />
      <BvaultEpochYtPrices bvc={bvc} epochId={bvd.epochCount} />
      <BVaultYTrans bvc={bvc} />
      <BVaultPools bvc={bvc} />
    </div>
  )
}

export function BVaultCard({ vc }: { vc: BVaultConfig }) {
  const r = useRouter()
  const [token1, token2] = vc.assetSymbol.split('-')
  const bvd = useBVault(vc.vault)
  const lp = LP_TOKENS[vc.asset]
  const prices = useStoreShallow((s) => s.sliceTokenStore.prices)
  const lpBasePrice = lp ? prices[lp.base] || 0n : 0n
  const lpQuotePrice = lp ? prices[lp.quote] || 0n : 0n
  const lpBase = bvd.lpBase || 0n
  const lpQuote = bvd.lpQuote || 0n
  const lpBaseTvlBn = (lpBase * lpBasePrice) / DECIMAL
  const lpQuoteTvlBn = (lpQuote * lpQuotePrice) / DECIMAL
  // console.info('lpTypes', lpBaseTvlBn, lpQuoteTvlBn , lpQuoteTvlBn == lpBaseTvlBn)
  const lpTvlBn = lpBaseTvlBn + lpQuoteTvlBn
  const [fmtBoost] = useBVaultBoost(vc.vault)
  const [fmtApy] = useBVaultApy(vc.vault)
  const epochName = `Epoch ${(bvd?.epochCount || 0n).toString()}`
  const settleTime = bvd.epochCount == 0n ? '-- -- --' : fmtDate((bvd.current.startTime + bvd.current.duration) * 1000n, FMT.DATE2)
  const settleDuration = bvd.epochCount == 0n ? '' : fmtDuration((bvd.current.startTime + bvd.current.duration) * 1000n - BigInt(_.now()))

  return (
    <div className={cn('card !p-0 grid grid-cols-2 overflow-hidden', {})}>
      <div className={cn(itemClassname, 'border-b', 'bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center')}>
        <CoinIcon symbol={vc.assetSymbol} size={44} />
        <div>
          <div className=' text-lg font-semibold whitespace-nowrap'>{vc.assetSymbol}</div>
          <div className=' text-sm font-medium'>{vc.assetSymbol.includes('-') ? 'LP Token' : ''}</div>
        </div>
        <div className='ml-auto'>
          <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap'>{'Total Value Locked'}</div>
          <div className='text-sm font-medium'>${displayBalance(lpTvlBn, 2)}</div>
        </div>
      </div>
      {renderToken(token1, lpBase, lpBaseTvlBn)}
      {renderToken(token2, lpQuote, lpQuoteTvlBn, true)}
      {renderStat(
        'Settlement Time',
        bvd.closed ? 'status-red' : 'status-green',
        bvd.closed ? (
          'Closed'
        ) : (
          <div className='relative'>
            <div className='flex gap-2 items-end'>
              <span>{settleTime}</span>
              <span className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap'>{settleDuration}</span>
            </div>
            {bvd.epochCount > 0n && <div className='absolute top-full mt-1 left-0 text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap'>{epochName}</div>}
          </div>
        ),
      )}
      {renderStat('Reward', 'iBGT', 'iBGT', true)}
      {renderChoseSide(
        'Panda',
        'Principal Panda',
        fmtApy,
        'Venom',
        'Boost Venom',
        `${fmtBoost}x`,
        (e) => {
          e.stopPropagation()
          r.push(`/b-vaults?vault=${vc.vault}&tab=principal_panda`)
        },
        (e) => {
          e.stopPropagation()
          r.push(`/b-vaults?vault=${vc.vault}&tab=boost_venom`)
        },
      )}
    </div>
  )
}

export function BVaultCardComming({ symbol }: { symbol: string }) {
  return (
    <div className={cn('card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]', {})}>
      <div className={cn(itemClassname, 'border-b', 'bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20')}>
        <CoinIcon symbol={symbol} size={44} />
        <div>
          <div className=' text-lg font-semibold whitespace-nowrap'>{symbol}</div>
          <div className=' text-sm font-medium'>{symbol.includes('-') ? 'LP Token' : ''}</div>
        </div>
        <div className='ml-auto'>
          <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap'>{'Total Value Locked'}</div>
          <div className='text-sm font-medium'>{'$-'}</div>
        </div>
      </div>
      <div className={cn(itemClassname, 'col-span-2')}>
        <div className='text-xs font-semibold leading-[12px] whitespace-nowrap'>New Vault Comming Soon...</div>
      </div>
    </div>
  )
}
