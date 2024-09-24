import { abiCrocQuery } from '@/config/abi'
import { CrocQueryAddress, HONEY_Address } from '@/config/bvaults'
import { getCurrentChainId } from '@/config/network'
import { NATIVE_TOKEN_ADDRESS } from '@/config/swap'
import { LP_TOKENS } from '@/config/tokens'
import { DECIMAL } from '@/constants'
import _ from 'lodash'
import { Address, erc20Abi } from 'viem'
import { getPC } from './publicClient'
import { SliceFun } from './types'

export type TokenStore = {
  totalSupply: { [k: Address]: bigint }
  prices: { [k: Address]: bigint }

  updateTokenTotalSupply: (tokens: Address[]) => Promise<TokenStore['totalSupply']>
  updateTokenPrices: (tokens: Address[]) => Promise<TokenStore['prices']>

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

  const updateTokenPrices = async (tokens: Address[]) => {
    const pc = getPC()
    const groups = _.groupBy(tokens, (token) => (LP_TOKENS[token] ? 'lp' : 'token'))
    const mLps = groups['lp'] || []
    // const mTokens = groups['token'] || []
    if (mLps.length !== 0) {
      console.info('mlps;', tokens, mLps)
      const lpPrices = await Promise.all(
        mLps.map((lp) =>
          Promise.all([
            pc.readContract({
              abi: abiCrocQuery,
              address: CrocQueryAddress[getCurrentChainId()],
              functionName: 'queryPrice',
              args: [LP_TOKENS[lp].base, LP_TOKENS[lp].quote, BigInt(LP_TOKENS[lp].poolType)],
            }),
            pc.readContract({
              abi: abiCrocQuery,
              address: CrocQueryAddress[getCurrentChainId()],
              functionName: 'queryLiquidity',
              args: [LP_TOKENS[lp].base, LP_TOKENS[lp].quote, BigInt(LP_TOKENS[lp].poolType)],
            }),
          ]),
        ),
      )
      const map: TokenStore['prices'] = {
        [HONEY_Address[getCurrentChainId()]]: DECIMAL,
      }
      /*
       */
      mLps.forEach((lp, i) => {
        const base = LP_TOKENS[lp].base
        const quote = LP_TOKENS[lp].quote
        const price = lpPrices[i][0]
        const priceFixDecimals = quote == '0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c' ? 10n ** 6n : 1n
        map[lp] = price / priceFixDecimals ** 2n
        map[quote] = (((price * 10n ** 9n) / (18446744073709551616n * priceFixDecimals)) ** 2n * map[base]) / DECIMAL
      })
      console.info('lpPrics:', map)
      set({ prices: { ...get().prices, ...map } })
    }
    return {}
  }
  return {
    totalSupply: {},
    updateTokenTotalSupply,

    balances: {},
    updateTokensBalance,

    prices: {},
    updateTokenPrices,
    ...init,
  }
}
