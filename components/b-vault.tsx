import PandaLine from '@/components/icons/PandaLine'
import VenomLine from '@/components/icons/VenomLine'
import { abiBVault, abiRedeemPool } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { DECIMAL } from '@/constants'
import { cn, fmtPercent, getBigint, parseEthers } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance } from '@/utils/display'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { useMeasure } from 'react-use'
import { List, ListRowProps } from 'react-virtualized'
import { zeroAddress } from 'viem'
import { useAccount, useReadContract } from 'wagmi'
import { ApproveAndTx } from './approve-and-tx'
import { AssetInput } from './asset-input'
import { CoinIcon } from './icons/coinicon'
import STable from './simple-table'
import { SimpleTabs } from './simple-tabs'
import { Switch } from './ui/switch'
import { itemClassname, renderChoseSide, renderStat, renderToken } from './vault-card-ui'
import { Tip } from './ui/tip'
import Link from 'next/link'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { getBexPoolURL, SUPPORT_CHAINS } from '@/config/network'
import { useCalcClaimable } from '@/providers/useBVaultsData'

function TupleTxt(p: { tit: string; sub: string }) {
  return (
    <div className='flex flex-col gap-0.5'>
      <div className='text-xs dark:text-white/60 font-medium'>{p.tit}</div>
      <div className='text-lg  font-medium'>{p.sub}</div>
    </div>
  )
}

const maxClassname = 'max-w-4xl mx-auto w-full'

function BVaultP({ bvc }: { bvc: BVaultConfig }) {
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)
  const isLP = bvc.assetSymbol.includes('-')
  const pTokenSymbolShort = isLP ? 'PT' : bvc.pTokenSymbol
  const assetSymbolShort = isLP ? 'LP' : bvc.assetSymbol
  const [inputPToken, setInputPToken] = useState('')
  const inputPTokenBn = parseEthers(inputPToken)
  const { bVaultsData } = useContext(FetcherContext)

  const bvd = bVaultsData[bvc.vault]
  const { ids, claimable } = useCalcClaimable(bvd)
  const epoch = bvd.epoches.find((item) => item.epochId == 0n)
  const assetBalance = epoch?.balanceAssset || 0n
  const pTokenBalance = epoch?.balancePToken || 0n
  const claimableAssetBalance = claimable
  const redeemingBalance = epoch?.redeemingBalance || 0n
  const redeemInfo = `Your ${pTokenSymbolShort} can be claimed 1:1 for ${assetSymbolShort} at the end of this Epoch`
  const renderClaimable = () => {
    return (
      <div className='flex text-xs items-center gap-5'>
        {`Claimable: ${displayBalance(claimableAssetBalance)}`}
        <ApproveAndTx
          className=''
          busyShowTxet={false}
          txType='btn-link'
          tx='Claim'
          disabled={claimableAssetBalance <= 0n}
          config={{
            abi: abiBVault,
            address: bvd.vault,
            functionName: 'batchClaimRedeemAssets',
            args: [ids.length > 40 ? ids.slice(ids.length - 40) : ids],
          }}
        />
      </div>
    )
  }
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-5', maxClassname)}>
      <div className='card !p-0 overflow-hidden'>
        <div className='flex p-5 bg-[#A3D395] gap-5'>
          <PandaLine className='text-[3.375rem]' showBg />
          <div className='flex flex-col gap-2'>
            <div className='text-xl text-black font-semibold'>{bvc.pTokenSymbol}</div>
            <div className='text-xs text-black/60 font-medium'>Interest bearing rebase principal token</div>
          </div>
        </div>
        <div className='flex flex-col p-5 gap-5'>
          <TupleTxt tit='APY' sub='176.4%' />
          <TupleTxt tit='Total Minted' sub={`${bvc.pTokenSymbol}  ${displayBalance(bvd.pTokenTotal)}`} />
        </div>
      </div>
      <div className='md:col-span-2 card !p-4'>
        <SimpleTabs
          data={[
            {
              tab: 'Mint',
              content: (
                <div className='flex flex-col gap-1'>
                  <AssetInput
                    asset={bvc.assetSymbol}
                    amount={inputAsset}
                    balance={assetBalance}
                    setAmount={setInputAsset}
                  />
                  <div className='text-xs font-medium flex justify-between items-center'>
                    <span>{`Receive 1 ${pTokenSymbolShort} for every ${assetSymbolShort}`}</span>
                    {isLP && (
                      <Link target='_blank' className='underline' href={getBexPoolURL(bvc.asset)}>
                        Get LP on BEX
                      </Link>
                    )}
                  </div>
                  <ApproveAndTx
                    className='mx-auto mt-6'
                    tx='Mint'
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
                    }}
                  />
                </div>
              ),
            },
            {
              tab: 'Redeem',
              content: (
                <div className='flex flex-col gap-1'>
                  <AssetInput
                    asset={bvc.pTokenSymbol}
                    assetIcon='Panda'
                    amount={inputPToken}
                    balance={pTokenBalance}
                    setAmount={setInputPToken}
                  />
                  {epoch && epoch.settled && (
                    <div className='flex flex-wrap justify-between items-center h-5'>
                      <div className='text-xs font-medium'>{redeemInfo}</div>
                      {renderClaimable()}
                    </div>
                  )}
                  <ApproveAndTx
                    className='mx-auto mt-6'
                    tx='Redeem'
                    spender={epoch?.redeemPool}
                    approves={{
                      [bvc.pToken]: inputPTokenBn,
                    }}
                    disabled={(epoch && inputPTokenBn <= 0n) || inputPTokenBn > pTokenBalance}
                    config={{
                      abi: abiRedeemPool,
                      address: epoch?.redeemPool || zeroAddress,
                      functionName: 'redeem',
                      args: [inputAssetBn],
                    }}
                    onTxSuccess={() => {
                      setInputPToken('')
                    }}
                  />
                  {(!epoch || !epoch.settled) && (
                    <div className='flex flex-wrap justify-between items-center h-5 mt-5'>
                      <div className='text-xs font-medium'>
                        {`Redemption in transit: ${displayBalance(redeemingBalance)}`}{' '}
                        <Tip>Redemption will be completed at the end of an Epoch.</Tip>
                      </div>
                      {renderClaimable()}
                    </div>
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

function BVaultY({ bvc }: { bvc: BVaultConfig }) {
  const isLP = bvc.assetSymbol.includes('-')
  const pTokenSymbolShort = isLP ? 'PT' : bvc.pTokenSymbol
  const yTokenSymbolShort = isLP ? 'YT' : bvc.yTokenSymbol
  const assetSymbolShort = isLP ? 'LP token' : bvc.assetSymbol
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)
  const { bVaultsData } = useContext(FetcherContext)
  const bvd = bVaultsData[bvc.vault]
  const epoch = bvd.epoches.find((item) => item.epochId == 0n)
  const assetBalance = epoch?.balanceAssset || 0n
  const { data: result } = useReadContract({
    abi: abiBVault,
    address: bvc.vault,
    functionName: 'calcSwap',
    args: [parseEthers('1')],
  })
  const outputYTokenFor1 = getBigint(result, '1')
  const outputYTokenFmtFor1 = displayBalance(outputYTokenFor1)
  const outputYTokenFmt = displayBalance((inputAssetBn * outputYTokenFor1) / DECIMAL)
  const priceImpact = ((outputYTokenFor1 - parseEthers('1')) * BigInt(1e10)) / parseEthers('1')
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-5 mt-5', maxClassname)}>
      <div className='card !p-0 overflow-hidden'>
        <div className='flex p-5 bg-[#F0D187] gap-5'>
          <VenomLine className='text-[3.375rem]' showBg />
          <div className='flex flex-col gap-2'>
            <div className='text-xl text-black font-semibold'>{bvc.yTokenSymbol}</div>
            <div className='text-xs text-black/60 font-medium'>Boost bribes yield</div>
          </div>
        </div>
        <div className='flex flex-col p-5 gap-5'>
          <div className='text-base font-semibold flex gap-5 items-end'>
            <span className='text-4xl font-medium'>40x</span>
            {'Bribes Yield'}
          </div>
          <TupleTxt tit='Total Minted' sub={`${bvc.yTokenSymbol}  ${displayBalance(bvd.pTokenTotal)}`} />
        </div>
      </div>
      <div className='md:col-span-2 card !p-4 flex flex-col gap-1'>
        <AssetInput asset={bvc.assetSymbol} amount={inputAsset} balance={assetBalance} setAmount={setInputAsset} />
        <div className='text-base font-bold my-2'>Receive</div>
        <AssetInput asset={bvc.yTokenSymbol} assetIcon='Venom' readonly disable amount={outputYTokenFmt} />

        <div className='text-xs font-medium  flex justify-between'>
          <span>{`Price: 1 ${assetSymbolShort}=${outputYTokenFmtFor1} ${yTokenSymbolShort}`}</span>
          <span>{`Price Impact: ${fmtPercent(priceImpact, 10, 2)}`}</span>
        </div>
        <div className='text-xs font-medium text-black/80 dark:text-white/80'>
          1 {yTokenSymbolShort} represents the yield {<span className='font-extrabold text-base'>at least</span>} 1{' '}
          {assetSymbolShort} until the end of Epoch.
        </div>

        <ApproveAndTx
          className='mx-auto mt-6'
          tx='Buy'
          disabled={inputAssetBn <= 0n || inputAssetBn > assetBalance}
          config={{
            abi: abiBVault,
            address: bvc.vault,
            functionName: 'swap',
            args: [inputAssetBn],
          }}
          onTxSuccess={() => {
            setInputAsset('')
          }}
        />
      </div>
    </div>
  )
}

function BribeTit(p: { name: string }) {
  return (
    <div className='flex items-center justify-center gap-3'>
      <CoinIcon symbol='GreenDot' size={14} />
      <span className='text-sm font-medium'>{p.name}</span>
    </div>
  )
}

function BVaultPools({ bvc }: { bvc: BVaultConfig }) {
  const [onlyMy, setOnlyMy] = useState(false)
  const viewMax = 6
  const itemHeight = 56
  const itemSpaceY = 20
  const epoches = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  // const epoches = [3,2,1]
  const [mesRef, mes] = useMeasure<HTMLDivElement>()
  const onRowClick = (index: number) => {}
  function rowRender({ key, style, index }: ListRowProps) {
    return (
      <div key={key} style={style} className='cursor-pointer' onClick={() => onRowClick(index)}>
        <div
          className={cn(
            'flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold',
            index < epoches.length - 1 ? 'mb-[20px]' : '',
          )}
        >
          <div className='text-base'>Epoch {epoches[index]}</div>
          <div className='text-xs dark:text-white/60'>3/4/2024~4/4/2024</div>
        </div>
      </div>
    )
  }

  const [inputYToken, setInputYToken] = useState('')
  const inputYTokenBn = parseEthers(inputYToken)
  const valueClassname = 'text-black/60 dark:text-white/60 text-sm'
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-5 mt-5', maxClassname)}>
      <div ref={mesRef}>
        <div className='flex items-center gap-8 text-xl font-semibold mb-6'>
          <span>My Pool Only</span>
          <Switch checked={onlyMy} onChange={setOnlyMy as any} />
        </div>
        <List
          className={epoches.length > viewMax ? 'pr-5' : ''}
          width={mes.width}
          height={mes.height - 52}
          rowHeight={({ index }) => (index < epoches.length - 1 ? itemHeight + itemSpaceY : itemHeight)}
          overscanRowCount={viewMax}
          rowCount={epoches.length}
          rowRenderer={rowRender}
        />
      </div>
      <div className='md:col-span-2 card !p-4 flex flex-col gap-2'>
        <div className='flex gap-6 items-end font-semibold'>
          <span className='text-xl '>Accumulated bribes</span>
          <span className='text-xs dark:text-white/60'>Epoch10</span>
        </div>
        <div className='flex-1 mt-3 rounded-lg border border-solid border-border p-4'>
          <STable
            headerClassName='text-center text-black/60 dark:text-white/60 border-b-0'
            rowClassName='text-center'
            header={['', '', 'Total', 'Mine', '']}
            span={{ 1: 2, 2: 1, 3: 1 }}
            data={[
              [
                '',
                <BribeTit name='Bera' key={'1'} />,
                displayBalance(124123451241234512412323n),
                displayBalance(124123451241234512412323n),
                '',
              ],
              [
                '',
                <BribeTit name='RED' key={'1'} />,
                displayBalance(124123451241234512412323n),
                displayBalance(124123451241234512412323n),
                '',
              ],
              [
                '',
                <BribeTit name='ZOO' key={'1'} />,
                displayBalance(124123451241234512412323n),
                displayBalance(124123451241234512412323n),
                '',
              ],
              [
                '',
                <BribeTit name='iBGT' key={'1'} />,
                displayBalance(124123451241234512412323n),
                displayBalance(124123451241234512412323n),
                '',
              ],
            ]}
          />
        </div>
        <div className='rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center'>
          <div className='font-semibold text-xs'>
            <div>
              My yToken: <span className={cn(valueClassname)}>{displayBalance(0n)}</span>
            </div>
            <div>
              Time Weighted Points: <span className={cn(valueClassname)}>{displayBalance(0n)}</span>
            </div>
          </div>
          <div>
            My Share: <span className={cn(valueClassname, 'text-2xl')}>{fmtPercent(1220n, 3, 3)}</span>
          </div>
        </div>
        <AssetInput
          asset={bvc.yTokenSymbol}
          assetIcon='Venom'
          amount={inputYToken}
          balance={0n}
          setAmount={setInputYToken}
        />
        <span className='text-xs mx-auto'>You will receive 0.023% of total bribes</span>
        <ApproveAndTx
          className='mx-auto mt-4'
          tx='Harvest'
          disabled
          config={{} as any}
          onTxSuccess={() => {
            setInputYToken('')
          }}
        />
      </div>
    </div>
  )
}

export function BVaultMint({ bvc }: { bvc: BVaultConfig }) {
  return (
    <>
      <BVaultP bvc={bvc} />
      <BVaultY bvc={bvc} />
      {/* <div className='page-title mt-8'>Bribes Pools</div> */}
      {/* <BVaultPools bvc={bvc} /> */}
    </>
  )
}
export function BVaultHarvest({ bvc }: { bvc: BVaultConfig }) {
  return (
    <>
      {/* <BVaultP bvc={bvc} />
      <BVaultY bvc={bvc} /> */}
      {/* <div className='page-title mt-8'>Bribes Pools</div> */}
      <BVaultPools bvc={bvc} />
    </>
  )
}

export function BVaultCard({ vc }: { vc: BVaultConfig }) {
  const r = useRouter()
  const [token1, token2] = vc.assetSymbol.split('-')

  return (
    <div
      className={cn('card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden', {})}
      onClick={() => r.push(`/b-vaults?vault=${vc.vault}`)}
    >
      <div
        className={cn(
          itemClassname,
          'border-b',
          'bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center',
        )}
      >
        <CoinIcon symbol={vc.assetSymbol} size={44} />
        <div>
          <div className=' text-lg font-semibold whitespace-nowrap'>{vc.assetSymbol}</div>
          <div className=' text-sm font-medium'>{vc.assetSymbol.includes('-') ? 'LP Token' : ''}</div>
        </div>
        <div className='ml-auto'>
          <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap'>
            {'Total Value Locked'}
          </div>
          <div className='text-sm font-medium'>{'$932,840,598'}</div>
        </div>
      </div>
      {renderToken(token1, 0n, 0n)}
      {renderToken(token2, 0n, 0n, true)}
      {renderStat('Status', 'status', 'Epoch 2')}
      {renderStat('Reward', 'iBGT', 'iBGT', true)}
      {renderChoseSide('Panda', 'Principal Panda', '23.32%', 'Venom', 'Boost Venom', '40x')}
    </div>
  )
}

export function BVaultCardComming({ symbol }: { symbol: string }) {
  return (
    <div className={cn('card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]', {})}>
      <div
        className={cn(
          itemClassname,
          'border-b',
          'bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20',
        )}
      >
        <CoinIcon symbol={symbol} size={44} />
        <div>
          <div className=' text-lg font-semibold whitespace-nowrap'>{symbol}</div>
          <div className=' text-sm font-medium'>{symbol.includes('-') ? 'LP Token' : ''}</div>
        </div>
        <div className='ml-auto'>
          <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap'>
            {'Total Value Locked'}
          </div>
          <div className='text-sm font-medium'>{'$-'}</div>
        </div>
      </div>
      <div className={cn(itemClassname, 'col-span-2')}>
        <div className='text-xs font-semibold leading-[12px] whitespace-nowrap'>New Vault Comming Soon...</div>
      </div>
    </div>
  )
}
