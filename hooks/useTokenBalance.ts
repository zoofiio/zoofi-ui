import { NATIVE_TOKEN_ADDRESS } from '@/config/swap'
import { Address, erc20Abi } from 'viem'
import { useBalance, useReadContract } from 'wagmi'

export function useTokenBalance({ address, token }: { address: Address; token: Address }) {
  const isNative = token == NATIVE_TOKEN_ADDRESS
  const { data: eth } = useBalance({
    address: address,
    query: { enabled: isNative },
  })
  const { data: erc20 } = useReadContract({
    abi: erc20Abi,
    address: token,
    functionName: 'balanceOf',
    args: [address],
    query: { enabled: !isNative },
  })
  const result = isNative ? eth?.value : erc20
  return result || 0n
}
