import { abiPlainVault, abiRedstonePriceFeed } from '@/config/abi'
import { PLAIN_VAULTS_CONFIG } from '@/config/swap'
import { getBigint, proxyGetDef } from '@/lib/utils'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { useCurrentChainId } from './useCurrentChainId'
import { useMemoOfChainId } from './useMemoOfChain'
import { useWandContractReads } from './useWand'

export function usePlainVualtsReads(prices: { [k: string]: bigint }) {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  const { data } = useWandContractReads({
    contracts: [
      ...pvcs.map((pvc) => ({
        abi: abiPlainVault,
        address: pvc.vault,
        functionName: 'totalSupply',
      })),
      ...pvcs.map((pvc) => ({
        abi: abiPlainVault,
        address: pvc.vault,
        functionName: 'balanceOf',
        args: [address],
      })),
    ],
  })

  const { data: priceData } = useWandContractReads({
    contracts: [
      {
        // weETH - ETH
        abi: abiRedstonePriceFeed,
        address: '0xcD96262Df56127f298b452FA40759632868A472a',
        functionName: 'latestRoundData',
        
      },
      {
        // ETH - USD
        abi: abiRedstonePriceFeed,
        address: '0x0af23B08bcd8AD35D1e8e8f2D2B779024Bd8D24A',
        functionName: 'latestRoundData',
      },
    ],
  })
  const weEthPriceETH = getBigint(priceData, [0, 'result', 1])
  const ethPrice = getBigint(priceData, [1, 'result', 1])
  const weEthPrice = weEthPriceETH * ethPrice * 10n ** 2n
  const plainVaultStat: { [k: Address]: { totalSupply: bigint; userStaked: bigint } } = useMemoOfChainId(() =>
    proxyGetDef({}, proxyGetDef({}, 0n)),
  )
  pvcs.forEach((pvc, index) => {
    if (pvc.assetTokenSymbol == 'weETH') {
      prices[pvc.assetToken] = weEthPrice
    }
    plainVaultStat[pvc.vault] = plainVaultStat[pvc.vault]
    plainVaultStat[pvc.vault].totalSupply = getBigint(data, [index, 'result'])
    plainVaultStat[pvc.vault].userStaked = getBigint(data, [index + pvcs.length, 'result'])
  })
  return plainVaultStat
}
