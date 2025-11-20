import VenomLine from '@/components/icons/VenomLine'
import { abiLntNftStakingPool, abiLntVault, abiLntYtRewardsPool } from '@/config/abi'
import { LntVaultConfig, WriteConfirmations } from '@/config/lntvaults'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { cn, FMT, fmtBn, fmtDate, fmtDuration, fmtPercent, getBigint, parseEthers, shortStr } from '@/lib/utils'
import { getPC } from '@/providers/publicClient'
import { useStore } from '@/providers/useBoundStore'
import { calcDepositVtAmountBy, calcItemVtAmount, calcRedeemVtAmountBy, useLntEpochesData, useLntVault, useLntVaultBoost, useLntVaultNftStat, useUpLntVaultForUserAction } from '@/providers/useLntVaultsData'
import { useBalances, useNftBalance, useTotalSupply } from '@/providers/useTokenStore'
import { displayBalance } from '@/utils/display'
import { useQuery } from '@tanstack/react-query'
import { ProgressBar } from '@tremor/react'
import _ from 'lodash'
import { useRouter } from 'next/navigation'
import { ReactNode, useMemo, useRef, useState } from 'react'
import { RiLoopLeftFill } from 'react-icons/ri'
import { TbTransferVertical } from "react-icons/tb"
import { useDebounce, useMeasure, useSetState, useToggle } from 'react-use'
import { List, ListRowProps } from 'react-virtualized'
import { ApproveAndTx, NftApproveAndTx } from './approve-and-tx'
import { AssetInput } from './asset-input'
import { CoinIcon } from './icons/coinicon'
import LntVaultEpochYtPrices from './lntvault-epoch-ytprices'
import { SimpleDialog } from './simple-dialog'
import STable from './simple-table'
import { BBtn } from './ui/bbtn'
import { Switch } from './ui/switch'
import { useWandContractRead } from '@/hooks/useWand'
import { useAccount } from 'wagmi'
function TupleTxt(p: { tit: string; sub: ReactNode; subClassname?: string }) {
  return (
    <div className='flex items-center gap-5'>
      <div className='text-xs dark:text-white/60 font-medium'>{p.tit}</div>
      <div className={cn('text-lg  font-medium flex items-center', p.subClassname)}>{p.sub}</div>
    </div>
  )
}

const maxClassname = 'max-w-4xl mx-auto w-full'

export function LntVaultYInfo({ vc }: { vc: LntVaultConfig }) {
  const vd = useLntVault(vc.vault)
  const epoch = vd.current
  const oneYTYieldOfAsset = vd.current.yTokenTotalSupply > vd.current.vaultYTokenBalance ? (vd.nftVtAmount * DECIMAL) / vd.current.yTokenTotalSupply - vd.current.vaultYTokenBalance : 0n
  const [fmtBoost] = useLntVaultBoost(vc.vault)

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
        <VenomLine className='text-[3.375rem]' showbg={true} />
        <div className='flex flex-col gap-2'>
          <div className='text-xl text-black font-semibold'>{vc.yTokenSymbol}</div>
          <div className='text-xs text-black/60 font-medium'>Yield token</div>
        </div>
      </div>
      <div className='flex flex-col justify-between p-5 gap-5 flex-1'>
        <div className='flex justify-between gap-4 flex-wrap'>
          <div className='text-base font-medium'>
            <div className='text-xs'>Yield Boosted</div>
            <span className='text-4xl font-semibold'>{fmtBoost}x</span>
          </div>
          <span className='text-xs rounded-full whitespace-nowrap bg-slate-400 self-end px-1'>
            1YT = Yield of {displayBalance(oneYTYieldOfAsset, 2)} token
          </span>
        </div>
        <div className='text-base font-medium'>
          <div className='text-xs'>Total Supply</div>
          <div className='font-semibold'>{displayBalance(vd.current.yTokenTotalSupply)}</div>
        </div>
        {/* <TupleTxt tit='Circulation amount' sub={<>{displayBalance(vd.current.yTokenAmountForSwapYT)}</>} /> */}
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
function LntVaultYTrans({ vc }: { vc: LntVaultConfig }) {
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)
  const vd = useLntVault(vc.vault)
  const assetBalance = useStore((s) => s.sliceTokenStore.balances[vd.current.ytSwapPaymentToken] || 0n, [`sliceTokenStore.balances.${vd.current.ytSwapPaymentToken}`])
  const chainId = useCurrentChainId()
  const [calcSwapKey, setCalcSwapKey] = useState(['calcSwap', vc.vault, inputAssetBn, chainId])
  useDebounce(() => setCalcSwapKey(['calcSwap', vc.vault, inputAssetBn, chainId]), 300, ['calcSwap', vc.vault, inputAssetBn, chainId])
  const { data: result, isFetching: isFetchingSwap } = useQuery({
    queryKey: calcSwapKey,
    enabled: Boolean(vd.initialized),
    queryFn: () => getPC().readContract({ abi: abiLntVault, address: vc.vault, functionName: 'calcSwap', args: [inputAssetBn] }),
  })
  const [priceSwap, togglePriceSwap] = useToggle(false)
  const vualtYTokenBalance = vd.current.vaultYTokenBalance
  const outputYTokenForInput = getBigint(result, '1')
  const ytAssetPriceBn = vualtYTokenBalance > 0n ? (vd.Y * DECIMAL) / vualtYTokenBalance : 0n
  const ytAssetPriceBnReverse = ytAssetPriceBn > 0n ? (DECIMAL * DECIMAL) / ytAssetPriceBn : 0n
  const priceStr = priceSwap
    ? `1 ${'PayToken'}=${displayBalance(ytAssetPriceBnReverse)} YT`
    : `1 YT=${displayBalance(ytAssetPriceBn)} ${'PayToken'}`

  const afterYtAssetPrice = vualtYTokenBalance > outputYTokenForInput ? ((vd.Y + inputAssetBn) * DECIMAL) / (vualtYTokenBalance - outputYTokenForInput) : 0n
  const outputYTokenFmt = fmtBn(outputYTokenForInput, undefined, true)
  const priceImpact = afterYtAssetPrice > ytAssetPriceBn && ytAssetPriceBn > 0n ? ((afterYtAssetPrice - ytAssetPriceBn) * BigInt(1e10)) / ytAssetPriceBn : 0n
  // console.info('result:', inputAssetBn, result, fmtBn(afterYtAssetPrice), fmtBn(ytAssetPriceBn))
  const upForUserAction = useUpLntVaultForUserAction(vc)
  return (
    <div className='card !p-4 flex flex-col h-[24.25rem] gap-1'>
      <AssetInput asset={"PayToken"} amount={inputAsset} balance={assetBalance} setAmount={setInputAsset} />
      <div className='text-base font-bold my-2'>Receive</div>
      <AssetInput asset={vc.yTokenSymbol} assetIcon='Venom' loading={isFetchingSwap && !!inputAsset} readonly disable checkBalance={false} amount={outputYTokenFmt} />
      <div className='text-xs font-medium  flex justify-between select-none'>
        <div className='flex items-center gap-2'>
          <RiLoopLeftFill className='text-sm text-primary cursor-pointer inline-block' onClick={() => togglePriceSwap()} />
          <span>{`Price: ${priceStr}`}</span>
        </div>
        <div className='flex gap-2 items-center'>{`Price Impact: ${fmtPercent(priceImpact, 10, 2)}`}</div>
      </div>
      {/* <div className='text-xs font-medium text-black/80 dark:text-white/80'>
        1 {yTokenSymbolShort} represents the yield {<span className='font-extrabold text-base'>at least</span>} 1 {assetSymbolShort} until the end of Epoch.
      </div> */}
      <ApproveAndTx
        className='mx-auto mt-auto'
        tx='Buy'
        disabled={!Boolean(vd.current.ytSwapPaymentToken) || inputAssetBn <= 0n || inputAssetBn > assetBalance}
        confirmations={WriteConfirmations}
        config={{
          abi: abiLntVault,
          address: vc.vault,
          functionName: 'swap',
          args: [inputAssetBn],
        }}
        approves={(vd.current.ytSwapPaymentToken ? { [vd.current.ytSwapPaymentToken]: inputAssetBn, } : {})}
        spender={vc.vault}
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

function LntVaultPools({ vc }: { vc: LntVaultConfig }) {
  const [onlyMy, setOnlyMy] = useState(false)
  const epochesData = useLntEpochesData(vc.vault)
  const epoches = useMemo(() => {
    console.info('epochesData:', epochesData)
    const myFilter = (item: (typeof epochesData)[number]) => item.opt1.reduce((sum, b) => sum + b.earned, 0n) > 0n || item.opt2.reduce((sum, b) => sum + b.earned, 0n) > 0n || item.userClaimableYTPoints > 0n
    return onlyMy ? epochesData.filter(myFilter) : epochesData
  }, [epochesData, onlyMy])
  const viewMax = 6
  const itemHeight = 56
  const itemSpaceY = 20
  const [mesRef, mes] = useMeasure<HTMLDivElement>()
  const [currentEpochId, setCurrentEpochId] = useState<bigint | undefined>(epoches[0]?.epochId)
  const current = useMemo(() => (!currentEpochId ? epoches[0] : epoches.find((e) => e.epochId == currentEpochId)), [epoches, currentEpochId])
  const userBalanceYToken = current?.userBalanceYToken || 0n
  const userBalanceYTokenSyntyetic = current?.userYTPoints || 0n
  const userClaimableYTokenSyntyetic = current?.userClaimableYTPoints || 0n
  const onRowClick = (index: number) => {
    setCurrentEpochId(epoches[index]?.epochId)
  }
  const sBribes = current?.opt2 || []
  const aBribes = current?.opt1 || []

  const upForUserAction = useUpLntVaultForUserAction(vc)
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
            <span className='text-sm'>Rewards</span>
            <span className='text-xs dark:text-white/60'>Epoch {(current?.epochId || 1n).toString()}</span>
          </div>
          <div className='flex-1 overflow-y-auto flex flex-col gap-4 font-semibold text-sm'>
            <div className='flex gap-20 items-end font-semibold'>
              <span className='text-sm'>YT Balance</span>
              <span className='text-xs dark:text-white/60'>{displayBalance(userBalanceYToken)}</span>
            </div>

            {/* <div className='flex flex-col gap-5 justify-start relative pt-8 items-center'>
              {sBribes.map(item => <div key={item.token} className='flex items-center w-full relative gap-20 pl-[20%]'>
                <BribeTit name={item.symbol} />
                <div className='absolute left-1/2'>{displayBalance(item.earned)}</div>
              </div>)}
              <span className='absolute left-0 top-0'>Emission</span>
              <span className='absolute left-1/2 top-0 dark:text-white/60'>Claimable</span>
              <ApproveAndTx
                className='absolute w-28 top-0 right-0'
                tx='Claim'
                disabled={!current}
                confirmations={WriteConfirmations}
                config={{
                  abi: abiLntYtRewardsPool,
                  address: current?.ytRewardsPoolOpt2!,
                  functionName: 'getRewards',
                }}
                onTxSuccess={() => {
                  upForUserAction()
                }}
              />
            </div> */}
            <div className='flex items-center relative'>
              <span className='text-sm'>YT Points</span>
              <span className=' dark:text-white/60 ml-16'>{displayBalance(userBalanceYTokenSyntyetic, undefined, 23)}</span>
              <div className='flex flex-col gap-1 absolute left-1/2 top-0'>
                <span className='dark:text-white/60'>Claimable</span>
                <span>{displayBalance(userClaimableYTokenSyntyetic, undefined, 23)}</span>
              </div>
              <ApproveAndTx
                className='w-28 ml-auto'
                tx='Claim'
                disabled={!Boolean(current)}
                confirmations={WriteConfirmations}
                config={{
                  abi: abiLntYtRewardsPool,
                  address: current?.ytRewardsPoolOpt2!,
                  functionName: 'collectYt',
                }}
                onTxSuccess={() => {
                  upForUserAction()
                }}
              />
            </div>
            {sBribes.length > 0 && <div className='flex flex-col gap-5 justify-start relative pt-8 items-center'>
              {sBribes.map(item => <div key={item.token} className='flex items-center w-full relative gap-20 pl-[20%]'>
                <BribeTit name={item.symbol} />
                <div className='absolute left-1/2'>{displayBalance(item.earned)}</div>
              </div>)}
              <span className='absolute left-0 top-0'>Bonus base on YT Points</span>
              <span className='absolute left-1/2 top-0 dark:text-white/60'>Claimable</span>
              <ApproveAndTx
                className='absolute w-28 top-0 right-0'
                tx='Claim'
                disabled={!current}
                confirmations={WriteConfirmations}
                config={{
                  abi: abiLntYtRewardsPool,
                  address: current?.ytRewardsPoolOpt2!,
                  functionName: 'getRewards',
                }}
                onTxSuccess={() => {
                  upForUserAction()
                }}
              />
            </div>}

          </div>
        </div>
      </div>
    </div>
  )
}


function LntVaultDeposit({ vc, onSuccess }: { vc: LntVaultConfig, onSuccess: () => void }) {
  const vd = useLntVault(vc.vault)
  const [selectedNft, setSelectNft] = useSetState<{ [tokenId: string]: boolean }>({})
  const tokenIds = _.keys(selectedNft).filter(item => selectedNft[item]).map(item => BigInt(item))
  const nfts = useNftBalance(vc.asset)
  const upForUserAction = useUpLntVaultForUserAction(vc)

  return <div className='flex flex-col gap-5 items-center p-5'>
    <div className='w-full text-start'>Licenses ID</div>

    <div className='w-[32rem] h-72 overflow-y-auto'>
      <div className='w-full gap-2 grid grid-cols-4 '>
        {nfts.map(id => (<div key={id.toString()} className={cn('flex gap-1 items-center cursor-pointer', { 'text-primary': selectedNft[id.toString()] })} onClick={() => setSelectNft({ [id.toString()]: !selectedNft[id.toString()] })}>
          <div className={cn('w-3 h-3 border border-black/20 bg-[#EBEBEB] rounded-full', { 'bg-primary': selectedNft[id.toString()] })} />
          #{id.toString()}
        </div>))}
      </div>
    </div>
    <div className='text-center w-full'>
      <span>Receive</span>
      <div><span className='text-4xl font-medium mr-1'>{displayBalance(calcDepositVtAmountBy(vd, tokenIds.length))}</span>VT</div>
    </div>
    <NftApproveAndTx tx='Deposit'
      approves={{ [vc.asset]: true }}
      spender={vc.vault}
      confirmations={WriteConfirmations}
      onTxSuccess={() => {
        const nStat: { [id: string]: boolean } = {}
        tokenIds.forEach((id) => {
          nStat[id.toString()] = false
        })
        setSelectNft(nStat)
        onSuccess()
        upForUserAction()
      }}
      config={{
        abi: abiLntVault,
        address: vc.vault,
        functionName: 'batchDepositNft',
        enabled: tokenIds.length > 0,
        args: [tokenIds]
      }} />
    <div>Wait Time: {fmtDuration(vd.NftDepositLeadingTime * 1000n)}</div>
    <div>Please claim VT in the ‘History Activities’ section.</div>
  </div>
}
function LntVaultWithdraw({ vc, onSuccess }: { vc: LntVaultConfig, onSuccess: () => void }) {
  const vd = useLntVault(vc.vault)
  const [selectedNft, setSelectNft] = useSetState<{ [tokenId: string]: boolean }>({})
  const tokenIds = _.keys(selectedNft).filter(item => selectedNft[item]).map(item => BigInt(item))
  const nftList = useLntVaultNftStat(vc.vault).filter(item => item.stat == 'DepositedClaimed')
  const nfts = nftList.map(item => item.nftTokenId)
  const seletedNfts = nftList.filter(item => selectedNft[`${item.nftTokenId}`])
  const upForUserAction = useUpLntVaultForUserAction(vc)
  const balances = useBalances()
  const epochDue = vd.epochCount > 0n ? (vd.current.startTime + vd.current.duration) * 1000n - BigInt(_.now()) : 0n
  const waitTime = epochDue > vd.NftRedeemWaitingPeriod * 1000n ? epochDue : vd.NftRedeemWaitingPeriod * 1000n;
  return <div className='flex flex-col gap-5 items-center p-5'>
    <div className='w-full text-start'>Licenses ID</div>
    <div className='w-[32rem] h-72 overflow-y-auto'>
      <div className='w-full gap-2 grid grid-cols-4 '>
        {nfts.map(id => (<div key={id.toString()} className={cn('flex gap-1 items-center cursor-pointer', { 'text-primary': selectedNft[id.toString()] })} onClick={() => setSelectNft({ [id.toString()]: !selectedNft[id.toString()] })}>
          <div className={cn('w-3 h-3 border border-black/20 bg-[#EBEBEB] rounded-full', { 'bg-primary': selectedNft[id.toString()] })} />
          #{id.toString()}
        </div>))}
      </div>
    </div>
    <div className='text-center w-full'>
      <span>Need to Burn</span>
      <div><span className='text-4xl font-medium mr-1'>{displayBalance(calcRedeemVtAmountBy(vd, tokenIds.length))}</span>VT</div>
      <div>VT Balance: {displayBalance(balances[vc.vToken])}</div>
    </div>
    <NftApproveAndTx
      tx='Request'
      confirmations={WriteConfirmations}
      onTxSuccess={() => {
        const nStat: { [id: string]: boolean } = {}
        tokenIds.forEach((id) => {
          nStat[id.toString()] = false
        })
        setSelectNft(nStat)
        onSuccess()
        upForUserAction()
      }}
      config={{
        abi: abiLntVault,
        address: vc.vault,
        functionName: 'batchRedeemNft',
        enabled: tokenIds.length > 0,
        args: [tokenIds]
      }} />
    <div>Wait Time: {fmtDuration(waitTime)}</div>
    <div>Please claim Licenses in the ‘History Activities’ section.</div>
  </div>
}

export function LntVesting({ vc }: { vc: LntVaultConfig }) {
  const vd = useLntVault(vc.vault)
  const [{ swap, receive }, setSwapStat] = useSetState({
    swap: { token: vc.asset, symbol: vc.assetSymbol },
    receive: { token: vc.vToken, symbol: vc.vTokenSymbol },
  })
  const [inputSwap, setInputSwap] = useState('')
  const inputSwapBn = parseEthers(inputSwap)
  const depositRef = useRef<HTMLButtonElement>(null)
  const withdrawRef = useRef<HTMLButtonElement>(null)
  const nfts = useLntVaultNftStat(vc.vault)
  const vtTotalSupply = useTotalSupply(vc.vToken)
  const deposited = nfts.filter(item => item.stat == 'Deposited')
  const redeemed = nfts.filter(item => item.stat == 'Redeemed')
  const { address } = useAccount()
  const { data: earnedFee, refetch } = useWandContractRead({
    query: {
      enabled: Boolean(address) && Boolean(vd.current.ytSwapPaymentToken),
    },
    abi: abiLntNftStakingPool,
    address: vc.nftStakingPool,
    functionName: 'earned',
    args: [address!, vd.current.ytSwapPaymentToken]
  })
  const upForUserAction = useUpLntVaultForUserAction(vc)
  return <div className='flex flex-col gap-6'>
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 text-sm font-medium'>
      <div className='card lg:col-span-3 flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
          Deposited
          <div><span className='text-base font-semibold'>{nfts.length}</span> Licenses</div>
        </div>
        <div className='flex justify-between items-center'>
          Claimable Fees
          <CoinIcon symbol={vc.vestingSymbol} size={16} className='ml-auto' />
          <span className='text-base font-semibold ml-1'>{displayBalance(earnedFee)}</span>
          <ApproveAndTx
            className='w-20 ml-4'
            tx='Claim'
            onTxSuccess={() => {
              refetch()
              upForUserAction()
            }}
            confirmations={WriteConfirmations}
            config={{ abi: abiLntNftStakingPool, address: vc.nftStakingPool, functionName: 'getRewards' }}
          />
        </div>
        <div className='flex justify-between gap-5 items-center'>
          <SimpleDialog
            triggerRef={depositRef}
            triggerProps={{ className: 'flex-1' }}
            trigger={
              <BBtn className='flex-1'>Deposit</BBtn>
            }
          >
            <LntVaultDeposit vc={vc} onSuccess={() => depositRef.current?.click()} />
          </SimpleDialog>
          <SimpleDialog
            triggerRef={withdrawRef}
            triggerProps={{ className: 'flex-1' }}
            trigger={
              <BBtn className='flex-1'>Withdraw</BBtn>
            }
          >
            <LntVaultWithdraw vc={vc} onSuccess={() => withdrawRef.current?.click()} />
          </SimpleDialog>
        </div>
      </div>
      <div className='card lg:order-1 flex flex-col gap-2 text-center'>
        <div>Total Deposited</div>
        <div className='text-base font-semibold'>{vd.nftCount.toString()}</div>
        <div className='opacity-70'>Licenses</div>
      </div>
      <div className='card lg:order-1 flex flex-col gap-2 text-center'>
        <div>vERA Total Supply</div>
        <div className='text-base font-semibold'>{displayBalance(vtTotalSupply)}</div>
        <div className='opacity-70'>$3,121,000</div>
      </div>
      <div className='card lg:order-1 flex flex-col gap-2 text-center'>
        <div>Buyback</div>
        <div className='text-base font-semibold'>921,000,231.222</div>
        <div className="flex w-full items-center ">
          <div className="flex w-full h-3 bg-gray-200 rounded-full ">
            <div
              className="h-full rounded-full"
              style={{ width: `${40}%`, background: 'linear-gradient(90deg, #C2B7FD 0%, #6466F1 100%)' }}
            />
          </div>
          <div className="text-sm  text-right opacity-60 ml-[10px]">{40}%</div>
        </div>
      </div>
      <div className='card lg:row-span-2 lg:col-span-2 flex flex-col gap-2 justify-between items-center'>
        <div className='w-full'>
          <div className='text-base font-semibold mb-1'>Swap</div>
          <AssetInput asset={swap.symbol} amount={inputSwap} balance={parseEthers('123.4')} setAmount={setInputSwap} />
        </div>
        <div className='rounded-full w-8 h-8 border-2 border-primary text-primary hover:opacity-60 cursor-pointer text-2xl flex justify-center items-center'>
          <TbTransferVertical className='m-auto' />
        </div>
        <div className='w-full'>
          <div className='text-base font-semibold mb-1'>Receive</div>
          <AssetInput asset={receive.symbol} disable amount={'124.123'} />
          <div className='text-xs font-medium  flex justify-between select-none mt-1'>
            <div className='flex items-center gap-2'>
              <RiLoopLeftFill className='text-sm text-primary cursor-pointer inline-block' />
              <span>{`Price: 1${swap.symbol} = 0.73${receive.symbol}`}</span>
            </div>
            <div className='flex gap-2 items-center'>{`Price Impact: ${fmtPercent(0n, 10, 2)}`}</div>
          </div>
        </div>
      </div>
    </div>

    <div>Historical Activities</div>
    <div className='card'>
      <div>Deposit</div>
      <STable
        header={['Licenses ID', 'Start Time', 'Due Time', 'Tx', 'VT Minted', '']}
        data={deposited.map((item) => [
          `#${item.nftTokenId}`,
          fmtDate(item.startTime * 1000n, FMT.ALL),
          fmtDate(item.claimableTime * 1000n, FMT.ALL),
          shortStr(item.tx),
          displayBalance(calcItemVtAmount(vd, item)),
          <ApproveAndTx
            key={'claim'}
            tx='Claim'
            className='w-32'
            onTxSuccess={upForUserAction}
            disabled={!vd.initialized || item.claimableTime * 1000n > BigInt(_.now())}
            confirmations={WriteConfirmations}
            config={{
              abi: abiLntVault,
              address: vc.vault,
              functionName: 'claimDepositNft',
              args: [item.nftTokenId]
            }}
          />
        ])}
      />
    </div>
    <div className='card'>
      <div>Withdraw</div>
      <STable
        header={['Licenses ID', 'Start Time', 'Due Time', 'Tx', 'VT Burned', '']}
        data={redeemed.map((item) => [
          `#${item.nftTokenId}`,
          fmtDate(item.startTime * 1000n, FMT.ALL),
          fmtDate(item.claimableTime * 1000n, FMT.ALL),
          shortStr(item.tx),
          displayBalance(calcItemVtAmount(vd, item)),
          <ApproveAndTx
            key={'claim'}
            tx='Claim'
            className='w-32'
            onTxSuccess={upForUserAction}
            disabled={!vd.initialized || item.claimableTime * 1000n > BigInt(_.now())}
            confirmations={WriteConfirmations}
            config={{
              abi: abiLntVault,
              address: vc.vault,
              functionName: 'claimRedeemNft',
              args: [item.nftTokenId]
            }}
          />
        ])}
      />
    </div>
  </div>
}
export function LntYield({ vc }: { vc: LntVaultConfig }) {
  const vd = useLntVault(vc.vault)
  return (
    <div className='grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-5'>
      <LntVaultYInfo vc={vc} />
      <LntVaultEpochYtPrices vc={vc} epochId={vd.epochCount} />
      <LntVaultYTrans vc={vc} />
      <LntVaultPools vc={vc} />
    </div>
  )
}
export function LntOperators({ vc }: { vc: LntVaultConfig }) {
  return <div className='card'>
    <STable
      header={["Operator", "Address", "Delegted", "Fill rate(7d)", "Status"]}
      data={[1, 2, 3, 4, 5].map((num) => [
        `Operator${num}`,
        `0x29ef789...df678`,
        `${num * 9}`,
        '99%',
        <div key="status" className='px-2 py-1 rounded-xl bg-green-400 w-fit text-white dark:text-black'>Active</div>
      ])}
    />
  </div>
}

export function LNTVaultCard({ vc }: { vc: LntVaultConfig }) {
  const r = useRouter()
  const vd = useLntVault(vc.vault)
  const itemClassname = "flex flex-col gap-1 font-medium text-sm"
  const itemTitClassname = "opacity-60 text-xs font-semibold"
  const vtTotalSupply = useTotalSupply(vc.vToken)
  return (
    <div className={cn('card  overflow-hidden flex p-6 items-center justify-between cursor-pointer', {})} onClick={() => r.push(`/lnt-vaults?vault=${vc.vault}`)}>
      <img src='/logo-alt.svg' />
      <div className={itemClassname}>
        <div className={itemTitClassname}>Total Delegated</div>
        <div>{displayBalance(vd?.nftCount, 0, 0)}</div>
      </div>
      <div className={itemClassname}>
        <div className={itemTitClassname}>VT Supply</div>
        <div>{displayBalance(vtTotalSupply)}</div>
      </div>
      <div className={itemClassname}>
        <div className={itemTitClassname}>YT Supply</div>
        <div>{displayBalance(vd?.current?.yTokenTotalSupply)}</div>
      </div>
      <div className={itemClassname}>
        <div className={itemTitClassname}>VT Burned</div>
        <div className="flex w-36 items-center ">
          <div className="flex w-full h-4 bg-gray-200 rounded-full ">
            <div
              className="h-full rounded-full"
              style={{ width: `${40}%`, background: 'linear-gradient(90deg, #C2B7FD 0%, #6466F1 100%)' }}
            />
          </div>
          <div className="text-sm  text-right opacity-60 ml-[10px]">{40}%</div>
        </div>
      </div>
    </div>
  )
}

