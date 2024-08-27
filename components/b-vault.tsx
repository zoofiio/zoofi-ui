import { BVaultConfig } from '@/config/bvaults'
import PandaLine from '@/components/icons/PandaLine'
import VenomLine from '@/components/icons/VenomLine'
import { SimpleTabs } from './simple-tabs'
import { AssetInput } from './asset-input'
import { useState } from 'react'
import { cn, parseEthers } from '@/lib/utils'
import { ApproveAndTx } from './approve-and-tx'
import { Switch } from './ui/switch'
import { List, ListRowProps } from 'react-virtualized'
import { useMeasure } from 'react-use'
import STable from './simple-table'
import { CoinIcon } from './coinicon'
import { displayBalance } from '@/utils/display'

function TupleTxt(p: { tit: string; sub: string }) {
  return (
    <div className='flex flex-col gap-0.5'>
      <div className='text-xs dark:text-white/60 font-medium'>{p.tit}</div>
      <div className='text-lg  font-medium'>{p.sub}</div>
    </div>
  )
}

function BVaultP({ bvc }: { bvc: BVaultConfig }) {
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)

  const [inputPToken, setInputPToken] = useState('')
  const inputPTokenBn = parseEthers(inputPToken)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
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
          <TupleTxt tit='Total Minted' sub={`${bvc.pTokenSymbol}  23,132.32`} />
        </div>
      </div>
      <div className='md:col-span-2 card !p-4'>
        <SimpleTabs
          data={[
            {
              tab: 'Mint',
              content: (
                <div className='flex flex-col gap-1'>
                  <AssetInput asset={bvc.assetSymbol} amount={inputAsset} balance={0n} setAmount={setInputAsset} />
                  <div className='text-xs font-medium '>{`Receive 1 ${bvc.pTokenSymbol} for every ${bvc.assetSymbol}`}</div>
                  <ApproveAndTx
                    className='mx-auto mt-6'
                    tx='Mint'
                    disabled
                    config={{} as any}
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
                  <AssetInput asset={bvc.pTokenSymbol} amount={inputPToken} balance={0n} setAmount={setInputPToken} />
                  <div className='flex flex-wrap justify-between'>
                    <div className='text-xs font-medium  '>{`Your ${bvc.pTokenSymbol} can be claimed 1:1 for ${bvc.assetSymbol} at the end of this Epoch`}</div>
                    <div className='flex text-xs items-center gap-5'>
                      {`Claimable: 22.323`}
                      <span className='underline'>Claim</span>
                    </div>
                  </div>
                  <ApproveAndTx
                    className='mx-auto mt-6'
                    tx='Redeem'
                    disabled
                    config={{} as any}
                    onTxSuccess={() => {
                      setInputPToken('')
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

function BVaultY({ bvc }: { bvc: BVaultConfig }) {
  const [inputAsset, setInputAsset] = useState('')
  const inputAssetBn = parseEthers(inputAsset)

  const [inputYToken, setInputYToken] = useState('')
  const inputYTokenBn = parseEthers(inputYToken)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
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
          <TupleTxt tit='Total Minted' sub={`${bvc.yTokenSymbol}  23,132.32`} />
        </div>
      </div>
      <div className='md:col-span-2 card !p-4 flex flex-col gap-1'>
        <AssetInput asset={bvc.assetSymbol} amount={inputAsset} balance={0n} setAmount={setInputAsset} />
        <div className='text-base font-bold my-2'>Receive</div>
        <AssetInput asset={bvc.yTokenSymbol} readonly disable amount={inputYToken} />

        <div className='text-xs font-medium  flex justify-between'>
          <span>{`Current Price: 1 ${bvc.assetSymbol}=23 ${bvc.yTokenSymbol}`}</span>
          <span>{`Price Impact: -0.35%`}</span>
        </div>
        <ApproveAndTx
          className='mx-auto mt-6'
          tx='Buy'
          disabled
          config={{} as any}
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

  function rowRender({ key, style, index }: ListRowProps) {
    return (
      <div key={key} style={style}>
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

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
      <div>
        <div ref={mesRef} className='flex items-center gap-8 text-xl font-semibold mb-6'>
          <span>My Pool Only</span>
          <Switch checked={onlyMy} onChange={setOnlyMy as any} />
        </div>
        <List
          className={epoches.length > viewMax ? 'pr-5' : ''}
          width={mes.width}
          height={viewMax * itemHeight + (viewMax - 1) * itemSpaceY}
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
            header={['', '', 'Total', 'You Share', '']}
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
        <AssetInput asset={bvc.yTokenSymbol} amount={inputYToken} balance={0n} setAmount={setInputYToken} />
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

export function BVault({ bvc }: { bvc: BVaultConfig }) {
  return (
    <>
      <BVaultP bvc={bvc} />
      <BVaultY bvc={bvc} />
      <div className='page-title mt-8'>Bribes Pools</div>
      <BVaultPools bvc={bvc} />
    </>
  )
}
