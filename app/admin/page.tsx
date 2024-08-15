'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import {
  abiMockPriceFeed,
  abiPlainVault,
  abiPriceFeed,
  abiProtocolSettings,
  abiPtyPool,
  abiVault,
  abiWandProtocol,
} from '@/config/abi'
import {
  PLAIN_VAULTS_CONFIG,
  PROTOCOL_SETTINGS_ADDRESS,
  PlainVaultConfig,
  VAULTS_CONFIG,
  VaultConfig,
  WAND_PROTOCOL_ADDRESS,
} from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useWandContractRead, useWandContractReads } from '@/hooks/useWand'
import clsx from 'clsx'
import { ReactNode, useMemo, useState } from 'react'
import { Collapse } from 'react-collapse'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import Select from 'react-select'
import { useSetState } from 'react-use'
import { Address, formatEther, formatUnits, parseUnits, stringToHex } from 'viem'
import { useAccount } from 'wagmi'

const Params: { label: string; value: string; units?: number }[] = [
  { label: '资产利息率', value: 'Y' },
  { label: '目标AAR', value: 'AART' },
  { label: '安全AAR', value: 'AARS' },
  { label: '上顶AAR', value: 'AARU' },
  { label: '熔断AAR', value: 'AARC' },
  { label: '赎回手续费', value: 'C' },
  { label: '进入国库比例', value: 'TreasuryFeeRate' },
  { label: 'Discount冷静时间', value: 'CircuitBreakPeriod', units: 0 },
  { label: '低买池最小成交量USB', value: 'PtyPoolMinUsbAmount' },
  { label: '高卖池最小成交量', value: 'PtyPoolMinAssetAmount' },
  { label: 'RateR', value: 'RateR' },
]

function Expandable({ children, tit, disable }: { tit: string; children?: ReactNode; disable?: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col w-full bg-white dark:bg-transparent rounded-2xl overflow-hidden border border-solid border-blue-400'>
      <div className='px-5 py-2 flex justify-between items-center text-sm'>
        <div className='font-medium text-base'>{tit}</div>
        {disable ? (
          children
        ) : (
          <div
            className='px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer '
            onClick={() => setOpen(!open)}
          >
            <span className='mr-[5px]'>{!open ? 'Expand' : 'Close'}</span>
            {open ? <FiArrowUp /> : <FiArrowDown />}
          </div>
        )}
      </div>
      <Collapse isOpened={open} theme={{ content: 'bg-gray-200 dark:bg-transparent p-4 flex flex-col gap-2' }}>
        {children}
      </Collapse>
    </div>
  )
}

function UpdateVaultVaule({ vc }: { vc: VaultConfig }) {
  const chainId = useCurrentChainId()
  const params = useMemo(() => Params.map((p) => ({ ...p, label: `${p.label}(${p.value})` })), [])
  const [{ value, param }, setState] = useSetState({
    value: '',
    param: params[0],
  })
  const { data } = useWandContractReads({
    contracts: Params.map((p) => ({
      abi: abiProtocolSettings,
      address: PROTOCOL_SETTINGS_ADDRESS[chainId],
      functionName: 'vaultParamValue',
      args: [vc.vault, stringToHex(p.value, { size: 32 })],
    })),
  })
  const infos = useMemo(
    () =>
      (data || []).map((d, index) => {
        const p = Params[index]
        return `${p.label}(${p.value}): ${formatUnits(
          (d.result as unknown as bigint) || 0n,
          typeof p.units == 'number' ? p.units : 10,
        )}`
      }),
    [data],
  )
  const currentUnits = typeof param.units == 'number' ? param.units : 10
  return (
    <Expandable tit='Vault Param Vaule'>
      <Select maxMenuHeight={340} value={param} options={params} onChange={(e) => setState({ param: e as any })} />
      <input
        value={value.toString()}
        onChange={(e) => {
          const numstr = (e.target.value || '').replaceAll('-', '').replaceAll('+', '')
          setState({ value: numstr })
        }}
        type='number'
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
        pattern='[0-9.]{36}'
        step={1}
        placeholder='0'
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiProtocolSettings,
          address: PROTOCOL_SETTINGS_ADDRESS[chainId],
          functionName: 'updateVaultParamValue',
          args: [vc.vault as any, stringToHex(param.value, { size: 32 }), parseUnits(value, currentUnits)],
        }}
        onTxSuccess={() => {
          setState({ value: '' })
        }}
        className='btn-primary flex items-center justify-center gap-4'
      />
      <div className='text-sm flex flex-col items-start'>
        {infos.map((info, index) => (
          <div key={`info_${index}`}>{info}</div>
        ))}
      </div>
    </Expandable>
  )
}

function UpdateVaultPrice({ vc }: { vc: VaultConfig }) {
  const [{ feed }, setState] = useSetState({ feed: '' })
  return (
    <Expandable tit='Vault Price Feed'>
      <input
        type='text'
        placeholder='_assetTokenPriceFeed_'
        value={feed}
        onChange={(e) => setState({ feed: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiVault,
          address: vc.vault,
          functionName: 'updatePriceFeed',
          args: [feed as any],
        }}
        onTxSuccess={() => {
          setState({ feed: '' })
        }}
        className='btn-primary flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}

function ActionVault({
  vc,
  functionName,
  abi = abiVault,
}: {
  vc: { vault: Address }
  functionName: string
  abi?: any
}) {
  return (
    <Expandable tit={'Vault ' + functionName} disable>
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abi,
          address: vc.vault,
          functionName: functionName as any,
          args: [],
        }}
        className='!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}

function WandTxOwner() {
  const chainId = useCurrentChainId()
  const [{ owner }, setState] = useSetState({ owner: '' })
  return (
    <Expandable tit={'WandOwner transferOwnership'}>
      <input
        type='text'
        placeholder='newOwner'
        value={owner}
        onChange={(e) => setState({ owner: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiWandProtocol,
          address: WAND_PROTOCOL_ADDRESS[chainId],
          functionName: 'transferOwnership',
          args: [owner as any],
        }}
        className='!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}
function WandSetBlastAddress() {
  const chainId = useCurrentChainId()
  const [{ address }, setState] = useSetState({ address: '' })
  return (
    <Expandable tit={'Wand setBlastAddress'}>
      <input
        type='text'
        placeholder='_blastAddress_'
        value={address}
        onChange={(e) => setState({ address: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiWandProtocol,
          address: WAND_PROTOCOL_ADDRESS[chainId],
          functionName: 'setBlastAddress',
          args: [address as any],
        }}
        className='!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}
function WandSetBlastPointsAddress() {
  const chainId = useCurrentChainId()
  const [{ address, address2 }, setState] = useSetState({ address: '', address2: '' })
  return (
    <Expandable tit={'Wand setBlastPointsAddress'}>
      <input
        type='text'
        placeholder='_blastPointsAddress_'
        value={address}
        onChange={(e) => setState({ address: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <input
        type='text'
        placeholder='_blastPointsOperator_'
        value={address2}
        onChange={(e) => setState({ address2: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiWandProtocol,
          address: WAND_PROTOCOL_ADDRESS[chainId],
          functionName: 'setBlastPointsAddress',
          args: [address as any, address2 as any],
        }}
        className='!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}

function ClaimYieldsForBuyPool({ vc }: { vc: VaultConfig }) {
  const { data } = useWandContractRead({
    abi: abiPtyPool,
    address: vc.ptyPoolBelowAddress,
    functionName: 'claimableYields',
  })
  const yieldsBn = !vc.ptyPoolBelowAddress ? 0n : (data as bigint) || 0n
  const [{ address }, setState] = useSetState({ address: '' })
  return (
    <Expandable tit={'ClaimYields for Buy Low Pool'}>
      <span>Yields: {formatEther(yieldsBn)}</span>
      <input
        type='text'
        placeholder='recipient'
        value={address}
        onChange={(e) => setState({ address: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <ApproveAndTx
        tx='Write'
        disabled={!vc.ptyPoolBelowAddress || yieldsBn <= 0n}
        config={{
          abi: abiPtyPool,
          address: vc.ptyPoolBelowAddress as any,
          functionName: 'claimYields',
          args: [address as any],
        }}
        className='!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}

function SetTester({ vc }: { vc: VaultConfig }) {
  const { data } = useWandContractRead({
    abi: abiMockPriceFeed,
    address: vc.assetTokenFeed,
    functionName: 'getTestersCount',
  })
  const { data: owner } = useWandContractRead({
    abi: abiMockPriceFeed,
    address: vc.assetTokenFeed,
    functionName: 'owner',
  })

  const testerCount = (data as bigint) || 0n
  const { data: testers } = useWandContractReads({
    contracts: Array.from(new Array(parseInt(testerCount.toString()))).map((_, i) => ({
      abi: abiMockPriceFeed,
      address: vc.assetTokenFeed,
      functionName: 'getTester',
      args: [BigInt(i)],
    })) as any,
  })
  const testersList = testers?.map((t: any) => t['result'] as string) || []
  const [{ address }, setState] = useSetState({ address: '' })
  return (
    <Expandable tit={'Set tester'}>
      <div>Owner: {owner}</div>
      <div>Tester Count: {testerCount.toString()}</div>
      <div>Testers</div>
      {testersList.map((t) => (
        <div key={t}>{t}</div>
      ))}
      <input
        type='text'
        placeholder='recipient'
        value={address}
        onChange={(e) => setState({ address: e.target.value })}
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
      />
      <ApproveAndTx
        tx='Write'
        disabled={!address}
        config={{
          abi: abiMockPriceFeed,
          address: vc.assetTokenFeed as any,
          functionName: 'setTester',
          args: [address as any, true],
        }}
        className='!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4'
      />
    </Expandable>
  )
}

const PlainParams: { label: string; value: string; units?: number }[] = [{ label: '赎回手续费', value: 'C' }]
function UpdatePlainVaultParam({ vc }: { vc: PlainVaultConfig }) {
  const params = useMemo(() => PlainParams.map((p) => ({ ...p, label: `${p.label}(${p.value})` })), [])
  const [{ value, param }, setState] = useSetState({
    value: '',
    param: params[0],
  })
  const { data } = useWandContractReads({
    contracts: PlainParams.map((p) => ({
      abi: abiPlainVault,
      address: vc.vault,
      functionName: 'vaultParamValue',
      args: [stringToHex(p.value, { size: 32 })],
    })),
  })
  const infos = useMemo(
    () =>
      (data || []).map((d, index) => {
        const p = PlainParams[index]
        return `${p.label}(${p.value}): ${formatUnits(
          (d.result as bigint) || 0n,
          typeof p.units == 'number' ? p.units : 10,
        )}`
      }),
    [data],
  )
  const currentUnits = typeof param.units == 'number' ? param.units : 10
  return (
    <Expandable tit='Plain Vault Param Vaule'>
      <Select maxMenuHeight={340} value={param} options={params} onChange={(e) => setState({ param: e as any })} />
      <input
        value={value.toString()}
        onChange={(e) => {
          const numstr = (e.target.value || '').replaceAll('-', '').replaceAll('+', '')
          setState({ value: numstr })
        }}
        type='number'
        className={clsx(
          'bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ',
          'w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none',
        )}
        pattern='[0-9.]{36}'
        step={1}
        placeholder='0'
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiPlainVault,
          address: vc.vault,
          functionName: 'updateVaultParamValue',
          args: [stringToHex(param.value, { size: 32 }), parseUnits(value, currentUnits)],
        }}
        onTxSuccess={() => {
          setState({ value: '' })
        }}
        className='btn-primary flex items-center justify-center gap-4'
      />
      <div className='text-sm flex flex-col items-start'>
        {infos.map((info, index) => (
          <div key={`info_${index}`}>{info}</div>
        ))}
      </div>
    </Expandable>
  )
}

type OptionItem<T, plain> = { label: string; value: Address; data: T; isPlain: plain }
type OptionsItem = OptionItem<VaultConfig, false> | OptionItem<PlainVaultConfig, true>
export default function AdminPage() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId] || []
  const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  const { chain } = useAccount()
  const options: OptionsItem[] = useMemo(() => {
    const vcsOpt = vcs.map<OptionItem<VaultConfig, false>>((vc) => ({
      label: vc.assetTokenSymbol,
      value: vc.vault,
      data: vc,
      isPlain: false,
    }))
    const pvcsOpt = pvcs.map<OptionItem<PlainVaultConfig, true>>((pvc) => ({
      label: pvc.assetTokenSymbol,
      value: pvc.vault,
      data: pvc,
      isPlain: true,
    }))
    return [...vcsOpt, ...pvcsOpt]
  }, [vcs, pvcs])
  const [{ current }, setState] = useSetState<{ current: OptionsItem }>({
    current: options[0],
  })
  return (
    <div className='w-full flex'>
      <div className='flex flex-col gap-2 w-full max-w-[840px] mx-auto px-5'>
        <Select defaultValue={options[0]} options={options} onChange={(e) => e && setState({ current: e })} />
        {current.isPlain ? (
          <>
            <UpdatePlainVaultParam vc={current.data} />
            {['configureBlastYieldsAndGas', 'configureBlastPoints'].map((action) => (
              <ActionVault key={action} vc={current.data} functionName={action} abi={abiPlainVault} />
            ))}
          </>
        ) : (
          <>
            <UpdateVaultVaule vc={current.data} />
            <UpdateVaultPrice vc={current.data} />
            {[
              'pauseMint',
              'unpauseMint',
              'pauseRedeem',
              'unpauseRedeem',
              'pauseUsbToMarginTokens',
              'unpauseUsbToMarginTokens',
            ].map((action) => (
              <ActionVault key={action} vc={current.data} functionName={action} />
            ))}
            <WandTxOwner />
            {/* <WandSetBlastAddress /> */}
            {/* <WandSetBlastPointsAddress /> */}
            <ClaimYieldsForBuyPool vc={current.data} />
            {chain?.testnet && <SetTester vc={current.data} />}
          </>
        )}
      </div>
    </div>
  )
}
