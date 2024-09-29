'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import { Expandable, GeneralAction, inputClassname, selectClassNames } from '@/components/general-action'
import { PageWrap } from '@/components/page-wrap'
import { abiBVault, abiMockPriceFeed, abiPriceFeed } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { VaultConfig } from '@/config/swap'
import { useVaultsConfigs } from '@/hooks/useVaultsConfigs'
import { useWandContractRead } from '@/hooks/useWand'
import { cn, parseEthers } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import { useState } from 'react'
import Select from 'react-select'
import { Address, parseUnits } from 'viem'

function MockPrice({ vc }: { vc: VaultConfig }) {
  const { data } = useWandContractRead({
    abi: abiPriceFeed,
    address: vc.assetTokenFeed,
    functionName: 'latestPrice',
  })
  const priceBn = (data as bigint) || 0n
  const [value, setValue] = useState('')
  return (
    <Expandable tit='MockPrice'>
      <input
        value={value.toString()}
        onChange={(e) => {
          const numstr = (e.target.value || '').replaceAll('-', '').replaceAll('+', '')
          setValue(numstr)
        }}
        type='number'
        className={cn(inputClassname)}
        pattern='[0-9.]{36}'
        step={1}
        placeholder='0'
      />
      <div>Price: {displayBalance(priceBn, 2, 8)}</div>
      <ApproveAndTx
        tx='Update'
        config={{
          abi: abiMockPriceFeed,
          address: vc.assetTokenFeed,
          functionName: 'mockPrice',
          args: [parseUnits(value, 8)],
        }}
        onTxSuccess={() => {
          setValue('')
        }}
        className='btn-primary flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}

function AddBribes({ vc }: { vc: BVaultConfig }) {
  const [args, setArgs] = useState(['', ''])
  const [inputAddress, amount] = args
  const approves: { [k: Address]: bigint } = {}
  if (inputAddress && inputAddress.length == 42 && inputAddress.startsWith('0x')) {
    approves[inputAddress as Address] = parseEthers(amount)
  }
  return (
    <GeneralAction
      abi={abiBVault}
      address={vc.vault}
      functionName={'addBribes'}
      convertArg={(arg, i) => (i == 1 ? parseEthers(arg) : arg)}
      onArgs={setArgs}
      txProps={{ spender: vc.vault, approves: approves }}
      infos={
        <div>
          Example:
          <div className='pl-2'>
            <div>0x46eFC86F0D7455F135CC9df501673739d513E982</div>
            <div>12.3</div>
          </div>
        </div>
      }
    />
  )
}

export default function TesterPage() {
  const { current, setState, options } = useVaultsConfigs()
  return (
    <PageWrap>
      <div className='w-full flex'>
        <div className='flex flex-col gap-1 w-full max-w-[840px] mx-auto px-5'>
          <Select classNames={selectClassNames} defaultValue={options[0]} options={options} onChange={(e) => e && setState({ current: e as any })} />
          {current?.type == 'L-Vault' && (
            <>
              <MockPrice vc={current.data} />
            </>
          )}
          {current?.type == 'B-Vault' && (
            <>
              <GeneralAction abi={abiBVault} address={current.data.vault} functionName='addBribeToken' />
              <AddBribes vc={current.data} />
            </>
          )}
        </div>
      </div>
    </PageWrap>
  )
}
