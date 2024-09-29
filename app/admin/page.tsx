'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import { Expandable, GeneralAction, inputClassname, selectClassNames } from '@/components/general-action'
import { PageWrap } from '@/components/page-wrap'
import { abiBVault, abiMockPriceFeed, abiPlainVault, abiProtocolSettings, abiPtyPool, abiVault, abiWandProtocol, abiZooProtocol } from '@/config/abi'
import { PROTOCOL_SETTINGS_ADDRESS, VaultConfig, WAND_PROTOCOL_ADDRESS } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useVaultsConfigs } from '@/hooks/useVaultsConfigs'
import { useWandContractRead, useWandContractReads } from '@/hooks/useWand'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'
import Select from 'react-select'
import { useMeasure, useSetState } from 'react-use'
import { Address, formatEther, formatUnits, parseUnits, stringToHex } from 'viem'
import { useAccount } from 'wagmi'

type ParamItem = { label: string; value: string; units?: number /** def 10 */ }

const LVaultParams: ParamItem[] = [
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

const BVaultParams: ParamItem[] = [
  { label: '产品周期', value: 'D', units: 0 },
  { label: '初始定价', value: 'APRi' },
  // { label: '保底定价', value: 'APRl' },
  // { label: '衰减时长', value: 'T', units: 0 },
  // { label: '价格变动系数', value: 'e1', units: 0 },
  // { label: '斜率变动系数', value: 'e2', units: 0 },
  { label: '赎回手续费', value: 'f1' },
  { label: '利息佣金', value: 'f2' },
]

function UpdateVaultParams({ paramList, vault, protocoSettingAddress }: { paramList: ParamItem[]; vault: Address; protocoSettingAddress: Address }) {
  const params = useMemo(() => paramList.map((p) => ({ ...p, label: `${p.label}(${p.value})` })), [paramList])
  const [{ value, param }, setState] = useSetState({
    value: '',
    param: params[0],
  })
  const { data, refetch } = useWandContractReads({
    contracts: paramList.map((p) => ({
      abi: abiProtocolSettings,
      address: protocoSettingAddress,
      functionName: 'vaultParamValue',
      args: [vault, stringToHex(p.value, { size: 32 })],
    })),
  })
  const infos = useMemo(
    () =>
      (data || []).map((d, index) => {
        const p = paramList[index]
        return `${p.label}(${p.value}): ${formatUnits((d.result as unknown as bigint) || 0n, typeof p.units == 'number' ? p.units : 10)}`
      }),
    [data],
  )
  const currentUnits = typeof param.units == 'number' ? param.units : 10
  const [infoRef, infoMeasure] = useMeasure<HTMLDivElement>()

  return (
    <Expandable tit='Vault Param Vaule'>
      <Select classNames={selectClassNames} maxMenuHeight={infoMeasure.height + 110} value={param} options={params} onChange={(e) => setState({ param: e as any })} />
      <input
        value={value.toString()}
        onChange={(e) => {
          const numstr = (e.target.value || '').replaceAll('-', '').replaceAll('+', '')
          setState({ value: numstr })
        }}
        type='number'
        className={cn(inputClassname)}
        pattern='[0-9.]{36}'
        step={1}
        placeholder='0'
      />
      <ApproveAndTx
        tx='Write'
        config={{
          abi: abiProtocolSettings,
          address: protocoSettingAddress,
          functionName: 'updateVaultParamValue',
          args: [vault, stringToHex(param.value, { size: 32 }), parseUnits(value, currentUnits)],
        }}
        onTxSuccess={() => {
          setState({ value: '' })
          refetch()
        }}
        className='btn-primary w-full flex items-center justify-center gap-4'
      />
      <div className='text-sm flex flex-col items-start' ref={infoRef}>
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
      <input type='text' placeholder='_assetTokenPriceFeed_' value={feed} onChange={(e) => setState({ feed: e.target.value })} className={cn(inputClassname)} />
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
        className='btn-primary w-full flex items-center justify-center gap-4'
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
      <input type='text' placeholder='recipient' value={address} onChange={(e) => setState({ address: e.target.value })} className={cn(inputClassname)} />
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
      <div>Owner: {owner as string}</div>
      <div>Tester Count: {testerCount.toString()}</div>
      <div>Testers</div>
      {testersList.map((t) => (
        <div key={t}>{t}</div>
      ))}
      <input type='text' placeholder='recipient' value={address} onChange={(e) => setState({ address: e.target.value })} className={cn(inputClassname)} />
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

const PValutParams: ParamItem[] = [{ label: '赎回手续费', value: 'C' }]

export default function AdminPage() {
  const chainId = useCurrentChainId()
  const { current, setState, options } = useVaultsConfigs()
  const { chain } = useAccount()
  return (
    <PageWrap>
      <div className='w-full flex'>
        <div className='flex flex-col gap-4 w-full max-w-[840px] mx-auto px-5'>
          <Select classNames={selectClassNames} defaultValue={options[0]} options={options} onChange={(e) => e && setState({ current: e as any })} />
          {current.type == 'L-Vault' && (
            <>
              <UpdateVaultParams vault={current.data.vault} paramList={LVaultParams} protocoSettingAddress={PROTOCOL_SETTINGS_ADDRESS[chainId]} />
              <UpdateVaultPrice vc={current.data} />
              {['pauseMint', 'unpauseMint', 'pauseRedeem', 'unpauseRedeem', 'pauseUsbToMarginTokens', 'unpauseUsbToMarginTokens'].map((action) => (
                <GeneralAction key={`l-vault-${action}`} functionName={action} abi={abiVault} address={current.data.vault} />
              ))}
              <GeneralAction abi={abiWandProtocol} functionName='transferOwnership' address={WAND_PROTOCOL_ADDRESS[chainId]} />
              <ClaimYieldsForBuyPool vc={current.data} />
              {chain?.testnet && <SetTester vc={current.data} />}
            </>
          )}
          {current.type == 'P-Vault' && (
            <>
              <UpdateVaultParams vault={current.data.vault} paramList={PValutParams} protocoSettingAddress={PROTOCOL_SETTINGS_ADDRESS[chainId]} />
              {['configureBlastYieldsAndGas', 'configureBlastPoints'].map((action) => (
                <GeneralAction key={`p-vault-${action}`} abi={abiPlainVault} functionName={action} address={current.data.vault} />
              ))}
            </>
          )}
          {current.type == 'B-Vault' && (
            <>
              <UpdateVaultParams vault={current.data.vault} paramList={BVaultParams} protocoSettingAddress={current.data.protocolSettingsAddress} />
              {['close', 'pause', 'unpause', 'pauseRedeemPool', 'unpauseRedeemPool', 'addBribeToken', 'addBribes', 'setBriber'].map((functionName) => (
                <GeneralAction key={`b-vault-${functionName}`} abi={abiBVault} functionName={functionName} address={current.data.vault} />
              ))}
              <GeneralAction tit='transferOwnership' abi={abiZooProtocol} functionName='transferOwnership' address={current.data.protocolAddress} />
              <GeneralAction tit='upsertParamConfig' abi={abiProtocolSettings} functionName='upsertParamConfig' address={current.data.protocolSettingsAddress} />
            </>
          )}
        </div>
      </div>
    </PageWrap>
  )
}
