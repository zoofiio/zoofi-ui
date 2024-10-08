import { abiBVault } from '@/config/abi'
import { BVaultConfig } from '@/config/bvaults'
import { cn, handleError, parseEthers } from '@/lib/utils'
import { getPC } from '@/providers/publicClient'
import { useBoundStore } from '@/providers/useBoundStore'
import { useBVault } from '@/providers/useBVaultsData'
import { useBalances } from '@/providers/useTokenStore'
import { displayBalance } from '@/utils/display'
import { useMutation, useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { Address, erc20Abi, isAddress } from 'viem'
import { useAccount, useWalletClient } from 'wagmi'
import { AssetInput } from './asset-input'
import { CoinIcon } from './icons/coinicon'
import { SimpleDialog } from './simple-dialog'
import { Spinner } from './spinner'
import { toast } from 'sonner'
import { PulseTokenItem } from './pulse-ui'
export type TokenItem = { address: Address; symbol: string; name?: string }

const defTokens: TokenItem[] = [
  { symbol: 'HONEY', name: 'HONEY Token', address: '0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03' },
  { symbol: 'USDC', name: 'USD Coin', address: '0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c' },
  { symbol: 'WBERA', name: 'BERA Token', address: '0x7507c1dc16935b82698e4c63f2746a2fcf994df8' },
  { symbol: 'iBGT', name: 'Infrared BGT', address: '0x46eFC86F0D7455F135CC9df501673739d513E982' },
  { symbol: 'USDT', name: 'Tether USD', address: '0x05D0dD5135E3eF3aDE32a9eF9Cb06e8D37A6795D' },
  { symbol: 'DAI', name: 'Decentralized USD', address: '0x806Ef538b228844c73E8E692ADCFa8Eb2fCF729c' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', address: '0x2577D24a26f8FA19c1058a8b0106E2c7303454a4' },
  { symbol: 'WETH', name: 'Wrapped Ether', address: '0xE28AfD8c634946833e89ee3F122C06d7C537E8A8' },
]

function TokenSelect({ tokens, onSelect }: { tokens?: TokenItem[]; hiddenNative?: boolean; onSelect?: (item: TokenItem) => void }) {
  const originTokens = tokens || defTokens
  const [input, setInput] = useState('')
  const balances = useBalances()
  const { address: user } = useAccount()

  const [queryKey, updateQueryKey] = useState(['searchTokens', input, originTokens])
  const doUpQueryKey = useMemo(
    () =>
      _.debounce(
        (input: string, list: TokenItem[]) => {
          updateQueryKey(['searchTokens', input, list])
        },
        300,
        { leading: true, maxWait: 300 },
      ),
    [],
  )
  useEffect(() => {
    doUpQueryKey(input, originTokens)
  }, [input, originTokens])
  const { data: searchdTokens, isFetching } = useQuery({
    initialData: originTokens,
    queryFn: async () => {
      if (isAddress(input)) {
        const t = originTokens.find((item) => item.address == input)
        if (t) return [t]
        const pc = getPC()
        const address = input as Address
        const [symbol] = await Promise.all([
          pc.readContract({ abi: erc20Abi, address, functionName: 'symbol' }),
          pc.readContract({ abi: erc20Abi, address, functionName: 'totalSupply' }),
        ])
        user && useBoundStore.getState().sliceTokenStore.updateTokensBalance([address], user)
        return [{ symbol, address }]
      } else {
        if (!input) return originTokens
        return originTokens.filter((item) => {
          const inputLow = input.toLowerCase()
          const symbolMatched = !!item.symbol.toLowerCase().match(inputLow)
          const nameMatched = !!item.name && !!item.name.toLowerCase().match(inputLow)
          return symbolMatched || nameMatched
        })
      }
    },
    queryKey: queryKey,
  })
  const showTokens = searchdTokens || originTokens

  useQuery({
    queryKey: ['updateBalancesForUnknowToken', originTokens],
    enabled: !!user,
    queryFn: () =>
      useBoundStore.getState().sliceTokenStore.updateTokensBalance(
        originTokens.map((item) => item.address),
        user!,
      ),
  })

  return (
    <div className='flex flex-col gap-4 p-5'>
      <div className='page-sub text-center'>Select a token</div>
      <input
        className={cn(
          'bg-white dark:bg-transparent',
          'border-slate-400  focus:border-primary',
          'w-full h-14 text-right px-4 font-bold text-base border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50',
        )}
        placeholder='Search by name, symbol or address'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className='flex flex-col overflow-y-auto h-[18.75rem]'>
        {isFetching ? (
          <>
            <PulseTokenItem />
            <PulseTokenItem />
            <PulseTokenItem />
          </>
        ) : (
          <>
            {showTokens.map((t) => (
              <div
                key={t.address}
                className='flex px-4 py-2 items-center gap-4 rounded-lg cursor-pointer hover:bg-primary/20'
                onClick={() => {
                  onSelect?.(t)
                }}
              >
                <CoinIcon size={40} symbol={t.symbol} />
                <span>{t.symbol}</span>
                <span className='ml-auto'>{displayBalance(balances[t.address])}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export function BVaultAddReward({ bvc }: { bvc: BVaultConfig }) {
  const balances = useBalances()
  const bvd = useBVault(bvc.vault)
  const [stoken, setStoken] = useState(defTokens[0])
  const [input, setInput] = useState('')
  const balance = balances[stoken.address]
  const inputBn = parseEthers(input)
  const triggerRef = useRef<HTMLDivElement>(null)
  const wc = useWalletClient()
  const { address } = useAccount()
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      if (disableAdd) return
      const pc = getPC()
      const tokens = await pc.readContract({ abi: abiBVault, address: bvc.vault, functionName: 'bribeTokens', args: [bvd.epochCount] })
      if (!tokens.find((item) => item == stoken.address)) {
        const hash = await wc.data.writeContract({ abi: abiBVault, address: bvc.vault, functionName: 'addBribeToken', args: [stoken.address] })
        await pc.waitForTransactionReceipt({ hash, confirmations: 3 })
      }
      const allownce = await pc.readContract({ abi: erc20Abi, address: stoken.address, functionName: 'allowance', args: [address, bvc.vault] })
      if (allownce < inputBn) {
        const hash = await wc.data.writeContract({ abi: erc20Abi, address: stoken.address, functionName: 'approve', args: [bvc.vault, inputBn - allownce] })
        await pc.waitForTransactionReceipt({ hash, confirmations: 3 })
      }
      const hash = await wc.data.writeContract({ abi: abiBVault, address: bvc.vault, functionName: 'addBribes', args: [stoken.address, inputBn] })
      await pc.waitForTransactionReceipt({ hash, confirmations: 3 })
      toast.success('Transaction success')
    },
    mutationKey: ['addReward'],
    onError: handleError,
  })
  const disableAdd = !wc.data || !address || inputBn == 0n || inputBn > balance || isPending || bvd.epochCount == 0n
  return (
    <div className='max-w-4xl mx-auto mt-8 card'>
      <div className='relative'>
        <AssetInput asset={stoken.symbol} balance={balances[stoken.address]} amount={input} setAmount={setInput} />
        <SimpleDialog
          trigger={
            <div ref={triggerRef} className='absolute left-0 top-0 flex cursor-pointer justify-end items-center py-4'>
              <span className='invisible pl-12'>{stoken.symbol}</span>
              <FiArrowDown className='ml-2' />
            </div>
          }
        >
          <TokenSelect
            onSelect={(t) => {
              setStoken(t)
              triggerRef.current?.click()
            }}
          />
        </SimpleDialog>
      </div>
      <button className='btn-primary w-full flex justify-center items-center gap-2' disabled={disableAdd} onClick={() => mutate()}>
        {isPending && <Spinner />} Add
      </button>
    </div>
  )
}
