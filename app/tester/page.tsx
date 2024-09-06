'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import { PageWrap } from '@/components/page-wrap'
import { abiMockPriceFeed, abiPriceFeed } from '@/config/abi'
import { VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useWandContractRead } from '@/hooks/useWand'
import { displayBalance } from '@/utils/display'
import clsx from 'clsx'
import { useMemo } from 'react'
import Select from 'react-select'
import { useSetState } from 'react-use'
import { parseUnits } from 'viem'

export default function TesterPage() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const [{ value, feed }, setState] = useSetState({
    value: '',
    feed: vcs[0].assetTokenFeed,
  })
  const options = useMemo(() => {
    return vcs.map((vc) => ({ label: vc.assetTokenSymbol + vc.version, value: vc.assetTokenFeed }))
  }, [])
  const { data } = useWandContractRead({
    abi: abiPriceFeed,
    address: feed,
    functionName: 'latestPrice',
  })
  const priceBn = (data as bigint) || 0n

  return (
    <PageWrap>
      <div className='w-full flex'>
        <div className='flex flex-col gap-1 w-full max-w-[840px] mx-auto px-5'>
          <Select defaultValue={options[0]} options={options} onChange={(e) => setState({ feed: e?.value })} />
          <input
            value={value.toString()}
            onChange={(e) => {
              const numstr = (e.target.value || '').replaceAll('-', '').replaceAll('+', '')
              setState({ value: numstr })
            }}
            type='number'
            className={clsx(
              'bg-white border-slate-400  focus:border-blue-400 ',
              'w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none',
            )}
            pattern='[0-9.]{36}'
            step={1}
            placeholder='0'
          />
          <div>Price: {displayBalance(priceBn, 2, 8)}</div>
          <ApproveAndTx
            tx='Update'
            config={{
              abi: abiMockPriceFeed,
              address: feed as any,
              functionName: 'mockPrice',
              args: [parseUnits(value, 8)],
            }}
            onTxSuccess={() => {
              setState({ value: '' })
            }}
            className='btn-primary flex items-center justify-center gap-4'
          />
        </div>
      </div>
    </PageWrap>
  )
}
