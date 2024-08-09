import { FetcherContext } from '@/providers/fetcher'
import { useContext } from 'react'
import { useWandContractReads } from './useWand'
import { NATIVE_TOKEN_ADDRESS, THUSTER_LP } from '@/config/swap'
import { useAccount } from 'wagmi'
import { useMemoOfChainId } from './useMemoOfChain'
import { getBigint, proxyGetDef } from '@/lib/utils'
import { DECIMAL } from '@/constants'
import { Address, erc20Abi } from 'viem'

export function useThusterLPTvl() {
  const { prices } = useContext(FetcherContext)
  const { address } = useAccount()
  const { data } = useWandContractReads({
    contracts: [
      ...THUSTER_LP.map((lp) => ({
        abi: erc20Abi,
        address: lp.token0,
        functionName: 'balanceOf',
        args: [lp.address],
      })),
      ...THUSTER_LP.map((lp) => ({
        abi: erc20Abi,
        address: lp.address,
        functionName: 'totalSupply',
      })),
      ...THUSTER_LP.map((lp) => ({
        abi: erc20Abi,
        address: lp.address,
        functionName: 'balanceOf',
        args: [address],
      })),
    ],
  })
  const tvl: { [k: Address]: { tvl: bigint; price: bigint; total: bigint; userBalance: bigint; userShare: bigint } } =
    useMemoOfChainId(() => proxyGetDef({}, proxyGetDef({}, 0n)))

  THUSTER_LP.forEach((lp, index) => {
    const token0Price = prices[lp.token0Symbol == 'WETH' ? NATIVE_TOKEN_ADDRESS : lp.token0]
    const token0Balance = getBigint(data, [index, 'result'])
    const lpTotalSupply = getBigint(data, [index + THUSTER_LP.length, 'result'])
    const userBalance = getBigint(data, [index + THUSTER_LP.length * 2, 'result'])
    const _lpTvl = token0Balance * 2n * token0Price
    const lpTvl = _lpTvl / DECIMAL
    const price = lpTotalSupply > 0n ? _lpTvl / lpTotalSupply : 0n
    const userShare = lpTotalSupply > 0n ? (userBalance * DECIMAL) / lpTotalSupply : 0n
    console.info('thusterTvls:', lp.address, token0Price, token0Balance, lpTotalSupply)
    tvl[lp.address] = { price, tvl: lpTvl, total: lpTotalSupply, userBalance, userShare }
  })
  return tvl
}
