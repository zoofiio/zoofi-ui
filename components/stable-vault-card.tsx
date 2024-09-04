'use client'

import { ApproveAndTx } from '@/components/approve-and-tx'
import { AssetInput } from '@/components/asset-input'
import { abiStableVault, abiVaultQuery } from '@/config/abi'
import {
  NATIVE_TOKEN_ADDRESS,
  PROTOCOL_SETTINGS_ADDRESS,
  USB_ADDRESS,
  USBSymbol,
  VAULT_QUERY_ADDRESS,
  VaultConfig,
} from '@/config/swap'
import { DECIMAL } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useWandContractRead, useWandContractReads } from '@/hooks/useWand'
import { getBigint, parseEthers } from '@/lib/utils'
import { FetcherContext } from '@/providers/fetcher'
import { displayBalance, displayBalanceWithoutFormat } from '@/utils/display'
import { useContext, useMemo, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { useSetState } from 'react-use'
import { twMerge } from 'tailwind-merge'
import { formatEther } from 'viem'
import { SimpleTabs } from './simple-tabs'
import { Tip } from './ui/tip'

export function StableLVaultAdvance({ vc }: { vc: VaultConfig }) {
  const { balances, prices, stableVaultsState } = useContext(FetcherContext)
  const chainId = useCurrentChainId()
  const vaultQueryAddress = VAULT_QUERY_ADDRESS[chainId]
  const [tab, setTab] = useState('Mint')
  const [amount, setAmount] = useState('')
  const [selected, setSelected] = useState('')
  const vs = stableVaultsState[vc.vault]
  const isAdjustment = vs.aar > 0 && vs.aar < vs.AARS
  const assetPrice = prices[vc.assetTokenAddress]
  const xPrice = prices[vc.xTokenAddress]
  const balance = balances[vc.assetTokenAddress]
  const usbBalance = balances[USB_ADDRESS[chainId]]
  const xBalance = balances[vc.xTokenAddress]
  // redeem state
  const [{ usbAmount, xAmount, redeemActive, redeemFocus }, setRedeemState] = useSetState({
    usbAmount: '',
    xAmount: '',
    redeemActive: '',
    redeemFocus: USBSymbol,
  })

  const configOuts = useMemo(
    () => ({
      contracts: [
        {
          vc: vc,
          abi: abiVaultQuery,
          address: vaultQueryAddress,
          functionName: 'calcMintPairsFromStableVault',
          args: [vc.vault, parseEthers(amount || '0')],
        },
        {
          vc: vc,
          abi: abiVaultQuery,
          address: vaultQueryAddress,
          functionName: 'calcMintUsbFromStableVault',
          args: [vc.vault, parseEthers(amount || '0')],
        },
        {
          vc: vc,
          abi: abiVaultQuery,
          address: vaultQueryAddress,
          functionName: 'calcMintMarginTokensFromStableVault',
          args: [vc.vault, parseEthers(amount || '0')],
        },
      ],
      watch: true,
      enabled: tab == 'Mint',
    }),
    [vc, amount, tab],
  )
  const { data: [pairOut, usbOut, xTokenOut] = [undefined, undefined, undefined] } = useWandContractReads(configOuts)
  const pairOutValue1 = getBigint(pairOut, ['result', 1])
  const pairOutValue2 = getBigint(pairOut, ['result', 2])
  const usbOutValue = getBigint(usbOut, ['result', 1])
  const xTokenOutValue = getBigint(xTokenOut, ['result', 1])
  const { data: [redeemPairXtokenIn, redeemPairUsbIn] = [undefined, undefined] } = useWandContractReads({
    contracts: [
      {
        vc: vc,
        abi: abiVaultQuery,
        address: vaultQueryAddress,
        functionName: 'calcPairdMarginTokenAmountForStableVault',
        args: [vc.vault, parseEthers(usbAmount || '0')],
      },
      {
        vc: vc,
        abi: abiVaultQuery,
        address: vaultQueryAddress,
        functionName: 'calcPairedUsbAmountForStableVault',
        args: [vc.vault, parseEthers(xAmount || '0')],
      },
    ] as any,
    query: { enabled: tab == 'Redeem' },
  })
  const { data: [redeemOutByXtoken, redeemOutByUsb] = [undefined, undefined] } = useWandContractReads({
    contracts: [
      {
        vc: vc,
        abi: abiVaultQuery,
        address: vaultQueryAddress,
        functionName: 'calcRedeemByMarginTokensFromStableVault',
        args: [vc.vault, PROTOCOL_SETTINGS_ADDRESS[chainId], parseEthers(xAmount || '0')],
      },
      {
        vc: vc,
        abi: abiVaultQuery,
        address: vaultQueryAddress,
        functionName: 'calcRedeemByUsbFromStableVault',
        args: [vc.vault, PROTOCOL_SETTINGS_ADDRESS[chainId], parseEthers(usbAmount || '0')],
      },
    ] as any,
    query: { enabled: tab == 'Redeem' },
  })
  // const redeemPairOutVaule: bigint = getBigint(redeemPairOut, ['result', 1])
  const redeemPairXtokenInVaule: bigint = getBigint(redeemPairXtokenIn, ['result'])
  const redeemPairUsbInVaule: bigint = getBigint(redeemPairUsbIn, ['result'])
  const redeemOutByXtokenVaule: bigint = getBigint(redeemOutByXtoken, ['result', 1])
  const redeemOutByUsbVaule: bigint = getBigint(redeemOutByUsb, ['result', 1])
  const isRedeemByXtoken = redeemActive == vc.xTokenSymbol
  const isRedeemByUSB = redeemActive == USBSymbol

  const mintPrepareConfig = useMemo(() => {
    const base: Parameters<typeof ApproveAndTx>[0]['config'] = {
      abi: abiStableVault,
      address: vc.vault,
      functionName: 'mintPairs',
      args: [parseEthers(amount)],
      value: (vc.assetTokenAddress == NATIVE_TOKEN_ADDRESS ? parseEthers(amount) : 0n) as any,
    }
    if (selected == USBSymbol) base.functionName = 'mintUsb'
    if (selected == vc.xTokenSymbol) base.functionName = 'mintMarginTokens'
    return base
  }, [selected, amount, vc])

  const finalUsbOut = selected == vc.xTokenSymbol ? 0n : selected === USBSymbol ? usbOutValue : pairOutValue1
  const finalXOut = selected == USBSymbol ? 0n : selected === vc.xTokenSymbol ? xTokenOutValue : pairOutValue2
  const showUsbInput = isRedeemByXtoken ? '0' : redeemFocus == USBSymbol ? usbAmount : formatEther(redeemPairUsbInVaule)
  const showXInput = isRedeemByUSB
    ? '0'
    : redeemFocus == vc.xTokenSymbol
    ? xAmount
    : formatEther(redeemPairXtokenInVaule)

  const configRedeemOut = useMemo(
    () => ({
      vc: vc,
      watch: true,
      abi: abiVaultQuery,
      address: vaultQueryAddress,
      functionName: 'calcRedeemByPairsAssetAmountForStableVault',
      args: [vc.vault, PROTOCOL_SETTINGS_ADDRESS[chainId], parseEthers(showXInput || '0')],
    }),
    [vc, showXInput],
  )
  const { data: redeemPairOutData } = useWandContractRead(configRedeemOut as any)
  const redeemOut = isRedeemByXtoken
    ? redeemOutByXtokenVaule
    : isRedeemByUSB
    ? redeemOutByUsbVaule
    : getBigint(redeemPairOutData, [1])

  const redeemPrepareConfig = useMemo(() => {
    const base: Parameters<typeof ApproveAndTx>[0]['config'] = {
      abi: abiStableVault,
      address: vc.vault,
      functionName:
        redeemActive == USBSymbol ? 'redeemByPairsWithExpectedUsbAmount' : 'redeemByPairsWithExpectedMarginTokenAmount',
      args: redeemActive == USBSymbol ? [parseEthers(showUsbInput)] : [parseEthers(showXInput)],
    }

    if (redeemActive == vc.xTokenSymbol) {
      base.functionName = 'redeemByMarginTokens'
      base.args = [parseEthers(showXInput)]
    }
    if (redeemActive == USBSymbol) {
      base.functionName = 'redeemByUsb'
      base.args = [parseEthers(showUsbInput)]
    }
    return base
  }, [redeemActive, showUsbInput, showXInput, vc])

  return (
    <div className={twMerge('card relative h-[460px]')}>
      <div className='page-sub text-center'>Advanced Panel</div>
      <div className='absolute top-[50px] right-6 flex flex-col items-end z-10'>
        <Tip
          node={
            <div className={twMerge('text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit')}>
              <div className={twMerge('w-3 h-3 rounded-full', !isAdjustment ? 'bg-green-500' : 'bg-red-500')} />
              <div className={twMerge(!isAdjustment ? 'text-green-500' : 'text-red-500')}>
                {isAdjustment ? 'Adjustment Model' : 'Stability Model'}
              </div>
            </div>
          }
        >
          {!isAdjustment
            ? ''
            : tab == 'Mint'
            ? `Minting ${USBSymbol} alone is not feasible`
            : 'Redeeming USDBx alone is not feasible'}
        </Tip>
      </div>
      <div className='relative flex items-center justify-between'>
        <SimpleTabs
          onTabChange={setTab}
          data={[
            {
              tab: 'Mint',
              content: (
                <div className='mt-4'>
                  <AssetInput
                    asset={vc.assetTokenSymbol}
                    exchange={displayBalance((assetPrice * parseEthers(amount)) / DECIMAL)}
                    balance={balance}
                    amount={amount}
                    setAmount={setAmount}
                  />
                  <div className='w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6'>
                    <LuChevronDown />
                  </div>

                  <div className='flex flex-col gap-8'>
                    <AssetInput
                      amount={displayBalanceWithoutFormat(finalUsbOut)}
                      onClick={() => {
                        setSelected(isAdjustment ? '' : selected == USBSymbol ? '' : USBSymbol)
                      }}
                      asset={USBSymbol}
                      exchange={displayBalance(finalUsbOut)}
                      readonly
                      selected={selected === USBSymbol}
                    />
                    <AssetInput
                      amount={displayBalanceWithoutFormat(finalXOut)}
                      onClick={() => {
                        setSelected(selected == vc.xTokenSymbol ? '' : vc.xTokenSymbol)
                      }}
                      asset={vc.xTokenSymbol}
                      exchange={displayBalance((xPrice * finalXOut) / DECIMAL)}
                      readonly
                      selected={selected === vc.xTokenSymbol}
                    />
                  </div>
                  <ApproveAndTx
                    tx='Mint'
                    disabled={vc.disableIn || parseEthers(amount) == 0n || parseEthers(amount) > balance}
                    onTxSuccess={() => {
                      setAmount('')
                    }}
                    config={mintPrepareConfig}
                    approves={{ [vc.assetTokenAddress]: parseEthers(amount) }}
                    spender={vc.vault}
                  />
                </div>
              ),
            },
            {
              tab: 'Redeem',
              content: (
                <div className='mt-4'>
                  <div className='flex flex-col gap-2'>
                    <AssetInput
                      amount={showUsbInput}
                      setAmount={(usbAmount: string) => setRedeemState({ usbAmount })}
                      balance={usbBalance}
                      onClick={() => {
                        setRedeemState({
                          redeemActive: redeemActive == USBSymbol ? '' : USBSymbol,
                          redeemFocus: USBSymbol,
                        })
                      }}
                      asset={USBSymbol}
                      exchange={displayBalance(parseEthers(showUsbInput))}
                      readonly={redeemActive == vc.xTokenSymbol}
                      selected={redeemActive === USBSymbol}
                    />
                    <AssetInput
                      amount={showXInput}
                      setAmount={(xAmount: string) => setRedeemState({ xAmount })}
                      asset={vc.xTokenSymbol}
                      onClick={() => {
                        setRedeemState({
                          redeemActive: isAdjustment ? '' : redeemActive == vc.xTokenSymbol ? '' : vc.xTokenSymbol,
                          redeemFocus: vc.xTokenSymbol,
                        })
                      }}
                      exchange={displayBalance((parseEthers(showXInput) * xPrice) / DECIMAL)}
                      balance={xBalance}
                      readonly={redeemActive == USBSymbol}
                      selected={redeemActive === vc.xTokenSymbol}
                    />
                  </div>
                  <div className='flex w-full items-center mb-6'>
                    <div className='flex-1' />
                    <div className='w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 '>
                      <LuChevronDown />
                    </div>
                    <div className='flex-1 text-sm text-slate-400 text-end whitespace-nowrap'>Redemption Fee: 0.5%</div>
                  </div>
                  <div className='w-full text-end'></div>
                  <AssetInput
                    asset={vc.assetTokenSymbol}
                    amount={formatEther(redeemOut)}
                    exchange={displayBalance((assetPrice * redeemOut) / DECIMAL)}
                    readonly
                  />
                  <ApproveAndTx
                    tx='Redeem'
                    config={redeemPrepareConfig}
                    disabled={
                      (isRedeemByUSB && parseEthers(showUsbInput) == 0n) ||
                      (isRedeemByXtoken && parseEthers(showXInput) == 0n) ||
                      (!isRedeemByUSB &&
                        !isRedeemByXtoken &&
                        (parseEthers(showUsbInput) == 0n || parseEthers(showXInput) == 0n)) ||
                      parseEthers(showUsbInput) > usbBalance ||
                      parseEthers(showXInput) > xBalance
                    }
                    onTxSuccess={() => {
                      setRedeemState({
                        usbAmount: '',
                        xAmount: '',
                      })
                    }}
                    spender={vc.vault}
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
