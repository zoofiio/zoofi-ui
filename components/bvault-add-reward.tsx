import { BVaultConfig } from '@/config/bvaults'
import { cn } from '@/lib/utils'
import { getPC } from '@/providers/publicClient'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { Address, erc20Abi, isAddress } from 'viem'
import { AssetInput } from './asset-input'
import { SimpleDialog } from './simple-dialog'
import _ from 'lodash'
import { CoinIcon } from './icons/coinicon'
import { displayBalance } from '@/utils/display'
import { useBalances } from '@/providers/useTokenStore'
import { useBoundStore } from '@/providers/useBoundStore'
import { useAccount } from 'wagmi'
export type TokenItem = { address: Address; symbol: string }
const defTokens: TokenItem[] = [
  { symbol: 'HONEY', address: '0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03' },
  { symbol: 'USDC', address: '0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c' },
  { symbol: 'WBERA', address: '0x7507c1dc16935b82698e4c63f2746a2fcf994df8' },
]
function TokenSelect({ tokens, onSelect }: { tokens?: TokenItem[]; hiddenNative?: boolean; onSelect?: (item: TokenItem) => void }) {
  const originTokens = tokens || defTokens
  const [input, setInput] = useState('')
  const balances = useBalances()
  const { address: user } = useAccount()
  const queryFn = useMemo(
    () =>
      _.debounce(async () => {
        if (isAddress(input)) {
          const t = originTokens.find((item) => item.address == input)
          if (t) return [t]
          const pc = getPC()
          const address = input as Address
          const [symbol] = await Promise.all([
            pc.readContract({ abi: erc20Abi, address, functionName: 'symbol' }),
            pc.readContract({ abi: erc20Abi, address, functionName: 'totalSupply' }),
          ])

          return [{ symbol, address }]
        } else {
          return originTokens.filter((item) => !!item.symbol.toLowerCase().match(input.toLowerCase()))
        }
      }, 300),
    [],
  )
  const { data: searchdTokens } = useQuery({ initialData: originTokens, queryFn, queryKey: ['searchTokens', input, originTokens] })
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
    <SimpleDialog
      triggerProps={{
        asChild: false,
      }}
      trigger={
        <div onClick={() => {}} className='flex cursor-pointer absolute justify-end items-center w-[6.25rem] py-4'>
          <FiArrowDown />
        </div>
      }
      className='flex flex-col gap-4'
    >
      <div className='page-sub text-center'>Select a token</div>
      <input
        className={cn(
          'bg-white dark:bg-transparent',
          'border-slate-400  focus:border-primary',
          'w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50',
        )}
        placeholder='Search by name, symbol or address'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className='flex flex-col overflow-y-auto h-[18.75rem]'>
        {showTokens.map((t) => (
          <div
            key={t.address}
            className='flex px-4 py-2 items-center gap-4 rounded-lg hover:bg-primary/20'
            onClick={() => {
              onSelect?.(t)
            }}
          >
            <CoinIcon symbol={t.symbol} />
            <span>{t.symbol}</span>
            <span className='ml-auto'>{displayBalance(balances[t.address])}</span>
          </div>
        ))}
      </div>
    </SimpleDialog>
  )
}

export function BVaultAddReward({ bvc }: { bvc: BVaultConfig }) {
  return (
    <div className='max-w-4xl mx-auto mt-8 card'>
      <div className='relative'>
        {/* <AssetInput asset='WBERA' /> */}
      </div>
    </div>
  )
}
