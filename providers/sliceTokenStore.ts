import { Address, erc20Abi } from 'viem'
import { SliceFun } from './types'
import { getPC } from './publicClient'
import { NATIVE_TOKEN_ADDRESS } from '@/config/swap'

export type TokenStore = {
  totalSupply: { [k: Address]: bigint }
  //   prices: { [k: Address]: bigint }

  updateTokenTotalSupply: (tokens: Address[]) => Promise<TokenStore['totalSupply']>
  //   updateTokenPrices: (tokens: Address[]) => Promise<TokenStore['prices']>

  // ---------------------- For current user ------------------------
  balances: { [k: Address]: bigint }
  updateTokensBalance: (tokens: Address[], user: Address) => Promise<TokenStore['balances']>
}

export const sliceTokenStore: SliceFun<TokenStore> = (set, get, init = {}) => {
  const updateTokenTotalSupply = async (tokens: Address[]) => {
    if (tokens.length == 0) return {}
    const pc = getPC()
    const datas = await Promise.all(
      tokens.map((token) => (token == NATIVE_TOKEN_ADDRESS ? Promise.resolve(0n) : pc.readContract({ abi: erc20Abi, address: token, functionName: 'totalSupply' }))),
    )
    const map = datas.reduce<TokenStore['totalSupply']>((map, item, i) => ({ ...map, [tokens[i]]: item }), {})
    set({ totalSupply: { ...get().totalSupply, ...map } })
    return map
  }
  const updateTokensBalance = async (tokens: Address[], user: Address) => {
    if (tokens.length == 0) return {}
    const pc = getPC()
    const datas = await Promise.all(
      tokens.map((token) =>
        token == NATIVE_TOKEN_ADDRESS ? pc.getBalance({ address: user }) : pc.readContract({ abi: erc20Abi, address: token, functionName: 'balanceOf', args: [user] }),
      ),
    )
    const map = datas.reduce<TokenStore['balances']>((map, item, i) => ({ ...map, [tokens[i]]: item }), {})
    set({ balances: { ...get().balances, ...map } })
    return map
  }
  return {
    totalSupply: {},
    updateTokenTotalSupply,

    balances: {},
    updateTokensBalance,
  }
}
