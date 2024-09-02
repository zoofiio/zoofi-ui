'use client'
import { abiPriceFeed, abiPtyPool, abiVault, abiVaultQuery } from '@/config/abi'
import { getPtypoolYields } from '@/config/api'
import { ETHSymbol, NATIVE_TOKEN_ADDRESS, USBSymbol, USB_ADDRESS, VAULTS_CONFIG, VAULT_QUERY_ADDRESS } from '@/config/swap'
import { getTokens } from '@/config/tokens'
import { DECIMAL, Day1 } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useEthersProvider } from '@/hooks/useEthersProvider'
import { useMemoOfChainId } from '@/hooks/useMemoOfChain'
import { usePlainVualtsReads } from '@/hooks/usePlainVaultsReads'
import { useUpdatePtypoolApy } from '@/hooks/usePtypoolApy'
import { useWandContractReads, useWandTimestamp } from '@/hooks/useWand'
import { UnPromise, getBigint, proxyGetDef } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { ReactNode, createContext, useEffect, useMemo } from 'react'
import { useAsyncRetry } from 'react-use'
import { Address, erc20Abi, formatUnits, stringToHex } from 'viem'
import { UseBalanceParameters, useAccount, useBalance, useClient, usePublicClient } from 'wagmi'
import { GetBalanceData } from 'wagmi/query'

export interface FetcherContextInterface {
  balances: { [k: string]: bigint }
  totalSupplies: { [k: string]: bigint }
  prices: { [k: string]: bigint }
  assetLocked: { [k: string]: bigint }

  aar: { [k: Address | string]: number }
  vaultUSBTotal: { [k: Address]: bigint }
  vaultsMode: { [k: Address | string]: number }
  vaultsDiscount: { [k: Address | string]: boolean }
  vaultsState: {
    [k: Address | string]: {
      M_ETH: bigint
      P_ETH: bigint
      P_ETH_DECIMALS: bigint
      M_USB_ETH: bigint
      M_ETHx: bigint
      aar: bigint
      AART: bigint
      AARS: bigint
      AARU: bigint
      AARC: bigint
      AARDecimals: bigint
      RateR: bigint
      AARBelowSafeLineTime: bigint
      AARBelowCircuitBreakerLineTime: bigint
      settingsDecimals: bigint
    } & {
      Y: bigint
    }
  }
  stableVaultsState: {
    [k: Address | string]: {
      M_USDC: bigint
      P_USDC: bigint
      P_USDC_DECIMALS: bigint
      M_USB_USDC: bigint
      M_USDCx: bigint
      aar: bigint
      AARS: bigint
      AARDecimals: bigint
      RateR: bigint
      AARBelowSafeLineTime: bigint
    } & {
      Y: bigint
    }
  }

  earns: {
    [k: Address]: {
      stake: bigint
      stakeSymbol: string
      match: bigint
      matchSymbol: string
      earn: bigint
      earnSymbol: string
      earnForMatch: bigint
      totalStake: bigint
      balance: bigint
    }
  }

  usbApr: {
    apr: bigint
    aprDecimals: number
  }

  ptypoolYields?: UnPromise<typeof getPtypoolYields>
  plainVaultsStat: ReturnType<typeof usePlainVualtsReads>
}

export const FetcherContext = createContext<FetcherContextInterface>({
  balances: proxyGetDef({}, 0n),
  totalSupplies: proxyGetDef({}, 0n),
  prices: proxyGetDef({}, 0n),
  assetLocked: proxyGetDef({}, 0n),
  aar: proxyGetDef({}, 0),
  vaultUSBTotal: proxyGetDef({}, 0n),
  vaultsMode: proxyGetDef({}, 0),
  vaultsDiscount: proxyGetDef({}, false),
  vaultsState: proxyGetDef({}, proxyGetDef({}, 0n)),
  stableVaultsState: proxyGetDef({}, proxyGetDef({}, 0n)),
  earns: proxyGetDef({}, proxyGetDef({}, 0n)),
  usbApr: {
    apr: 0n,
    aprDecimals: 10,
  },
  plainVaultsStat: proxyGetDef({}, proxyGetDef({}, 0n)),
})

function useReadEarns() {
  const { address } = useAccount()
  const chainId = useCurrentChainId()
  const pools = useMemo(
    () =>
      VAULTS_CONFIG[chainId]
        .filter((vc) => !vc.isStable && vc.ptyPoolAboveAddress && vc.ptyPoolBelowAddress)
        .map((vc) => [
          {
            poolAddress: vc.ptyPoolBelowAddress,
            stakeSymbol: USBSymbol,
            matchSymbol: vc.assetTokenSymbol,
            earnSymbol: vc.xTokenSymbol,
            earnForMatchSymbol: vc.assetTokenSymbol,
          },
          {
            poolAddress: vc.ptyPoolAboveAddress,
            stakeSymbol: vc.assetTokenSymbol,
            matchSymbol: USBSymbol,
            earnSymbol: vc.assetTokenSymbol,
            earnForMatchSymbol: vc.xTokenSymbol,
          },
        ])
        .flat(),
    [chainId],
  )
  const { data: reads } = useWandContractReads({
    query: { enabled: !!address },
    contracts: [
      ...pools.map(({ poolAddress }) => ({
        abi: abiPtyPool,
        address: poolAddress,
        functionName: 'userStakingBalance',
        args: [address as any],
      })),
      ...pools.map(({ poolAddress }) => ({
        abi: abiPtyPool,
        address: poolAddress,
        functionName: 'earnedMatchedToken',
        args: [address as any],
      })),
      ...pools.map(({ poolAddress }) => ({
        abi: abiPtyPool,
        address: poolAddress,
        functionName: 'earnedStakingYields',
        args: [address as any],
      })),
      ...pools.map(({ poolAddress }) => ({
        abi: abiPtyPool,
        address: poolAddress,
        functionName: 'earnedMatchingYields',
        args: [address as any],
      })),
    ],
  })

  const { data: totalStaking } = useWandContractReads({
    contracts: [
      ...pools.map(({ poolAddress }) => ({
        abi: abiPtyPool,
        address: poolAddress,
        functionName: 'totalStakingBalance',
      })),
    ],
  })
  const pc = usePublicClient()
  const { data: poolBalance } = useQuery({
    queryKey: [pools, pc],
    initialData: proxyGetDef({}, 0n),
    queryFn: async () => {
      const poolBalance: { [key: Address]: bigint } = proxyGetDef({}, 0n)
      if (!pc) return poolBalance
      const ethMatched = pools.filter((p) => p.matchSymbol == ETHSymbol)
      const res = await Promise.all(ethMatched.map((item) => pc.getBalance({ address: item.poolAddress as Address })))
      ethMatched.forEach((p, i) => {
        poolBalance[p.poolAddress as Address] = res[i]
      })
      return poolBalance
    },
  })
  const earns: FetcherContextInterface['earns'] = useMemoOfChainId(() => proxyGetDef({}, proxyGetDef({}, 0n)))
  pools.forEach(({ poolAddress, stakeSymbol, matchSymbol, earnSymbol }, index) => {
    // low buy
    const stake = getBigint(reads, [index, 'result'])
    const match = getBigint(reads, [index + pools.length, 'result'])
    const earn = getBigint(reads, [index + pools.length * 2, 'result'])
    const earnForMatch = getBigint(reads, [index + pools.length * 3, 'result'])
    const totalStake = getBigint(totalStaking, [index, 'result'])
    const balance = getBigint(poolBalance, poolAddress!)
    earns[poolAddress as any] = { stakeSymbol, matchSymbol, earnSymbol, stake, match, earn, earnForMatch, totalStake, balance }
  })
  return earns
}

function useAssetPrice() {
  const chainId = useCurrentChainId()
  const configs = VAULTS_CONFIG[chainId]
  const { data: assetTokenPrice } = useWandContractReads({
    contracts: [
      ...configs.map((vc) => ({
        vc,
        abi: abiPriceFeed,
        address: vc.assetTokenFeed,
        functionName: 'latestPrice',
      })),
    ],
  })
  const { data: assetTokenDecimals } = useWandContractReads({
    query: { gcTime: Day1 },
    contracts: [
      ...configs.map((vc) => ({
        abi: abiPriceFeed,
        address: vc.assetTokenFeed,
        functionName: 'decimals',
      })),
    ],
  })

  return useMemo(() => {
    const datas: { [k: string]: [bigint, bigint] } = {}
    configs.forEach((vc, index) => {
      const price = getBigint(assetTokenPrice, [index, 'result'])
      const decimals = getBigint(assetTokenDecimals, [index, 'result'])
      datas[vc.assetTokenAddress] = [price, decimals]
    })
    return datas
  }, [assetTokenPrice, assetTokenDecimals, configs])
}

function useVaultsDiscount(
  vaultsState: FetcherContextInterface['vaultsState'],
  stableVaultsState: FetcherContextInterface['stableVaultsState'],
  vaultsMode: FetcherContextInterface['vaultsMode'],
) {
  const vaultsDiscount: FetcherContextInterface['vaultsDiscount'] = useMemoOfChainId(() => proxyGetDef({}, false))
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const { data: dataBreakPeriod } = useWandContractReads({
    contracts: vcs.map((vc) => ({
      vc,
      abi: abiVault,
      address: vc.vault,
      functionName: 'paramValue',
      args: [stringToHex('CircuitBreakPeriod', { size: 32 })],
    })) as any,
  })
  vcs.forEach((vc, index) => {
    if (vc.isStable) {
      const vs = stableVaultsState[vc?.vault || 'null']
      vaultsDiscount[vc.vault] = vs && vs.M_USDCx > 0n && vs.aar < vs.AARS
    } else {
      const breakPeriod = getBigint(dataBreakPeriod, [index, 'result'])
      const vs = vaultsState[vc?.vault || 'null']
      const modeNumber = vaultsMode[vc?.vault || 'null']
      const belowBreakerTime = getBigint(vs, 'AARBelowCircuitBreakerLineTime')
      const discountEnable =
        modeNumber == 2 &&
        vs &&
        (getBigint(vs, 'aar') >= getBigint(vs, 'AARC') ||
          BigInt(Math.floor(new Date().getTime() / 1000)) - belowBreakerTime >= breakPeriod)

      vaultsDiscount[vc.vault] = discountEnable
    }
  })
  return vaultsDiscount
}

function useUSBApr(
  vaultsState: FetcherContextInterface['vaultsState'],
  stableVaultsState: FetcherContextInterface['stableVaultsState'],
) {
  const chainId = useCurrentChainId()
  let enableCount = 0
  let multiTotal = 0n
  let total = 0n
  VAULTS_CONFIG[chainId].forEach((vc) => {
    if (vc.isStable) {
      const vs_s = stableVaultsState[vc.vault]
      multiTotal += (vs_s.M_USB_USDC * vs_s.Y * vs_s.aar) / 10n ** vs_s.AARDecimals
      total += vs_s.M_USB_USDC
      if (vs_s.M_USB_USDC > 0n && vs_s.Y > 0n) {
        enableCount++
      }
    } else {
      const vs = vaultsState[vc.vault]
      multiTotal += vs.M_USB_ETH * vs.Y
      total += vs.M_USB_ETH
      if (vs.M_USB_ETH > 0n && vs.Y > 0n) {
        enableCount++
      }
    }
  })
  return { apr: total > 0n ? multiTotal / total : 0n, aprDecimals: 10 }
}

export const FetcherProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const wand = useWandTimestamp()
  const chainId = useCurrentChainId()
  useEthersProvider()
  const { address } = useAccount()
  // @ts-ignore
  const { data: balance } = useBalance({
    address: address,
    chainId: chainId,
    query: { enabled: !!address, refetchOnMount: false, refetchOnWindowFocus: false },
    wandtime: wand.time,
  } as UseBalanceParameters<any, GetBalanceData>)
  const tokens = useMemo(() => getTokens(chainId), [chainId])
  const { data: dataBalance } = useWandContractReads({
    contracts: [
      ...tokens.map((token: any) => ({
        address: token.address,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address as Address],
        chainId: chainId,
      })),
    ],
    query: { enabled: !!address },
  })
  const { data: dataTotalSupply } = useWandContractReads({
    contracts: [
      ...tokens.map((token: any) => ({
        address: token.address,
        abi: erc20Abi,
        functionName: 'totalSupply',
        chainId: chainId,
      })),
    ],
  })

  const balances: FetcherContextInterface['balances'] = useMemoOfChainId(() => proxyGetDef({}, 0n))
  balances[NATIVE_TOKEN_ADDRESS] = getBigint(balance, 'value')
  tokens.forEach((t, index) => {
    balances[t.address] = getBigint(dataBalance, [index, 'result'])
  })
  const totalSupplies: FetcherContextInterface['totalSupplies'] = useMemoOfChainId(() => proxyGetDef({}, 0n))
  tokens.forEach((t, index) => {
    totalSupplies[t.address] = getBigint(dataTotalSupply, [index, 'result'])
  })

  const vaultconfigs = VAULTS_CONFIG[chainId]
  const assetTokenPrice = useAssetPrice()

  const { data: assetTotalAmount } = useWandContractReads({
    contracts: [
      ...vaultconfigs.map((vc) => ({
        vc,
        abi: abiVault,
        address: vc.vault,
        functionName: 'assetBalance',
      })),
    ],
  })

  const { data: usbTotalSupply } = useWandContractReads({
    contracts: [
      ...vaultconfigs.map((vc) => ({
        abi: abiVault,
        address: vc.vault,
        functionName: 'usbTotalSupply',
      })),
    ],
  })
  const { data: aarData } = useWandContractReads({
    contracts: [
      ...vaultconfigs.map((vc) => ({
        vc,
        abi: abiVaultQuery,
        address: VAULT_QUERY_ADDRESS[chainId],
        functionName: 'AAR',
        args: [vc.vault],
      })),
    ],
  })
  const { data: aarDecimalsData } = useWandContractReads({
    query: { gcTime: Day1 },
    contracts: [
      ...vaultconfigs.map((vc) => ({
        abi: abiVault,
        address: vc.vault,
        functionName: 'AARDecimals',
      })),
    ],
  })
  const { data: vaultsModeData } = useWandContractReads({
    contracts: [
      ...vaultconfigs.map((vc) => ({
        abi: abiVault,
        address: vc.vault,
        functionName: 'vaultMode',
      })),
    ],
  })
  const { data: vaultsStateData } = useWandContractReads({
    contracts: [
      ...vaultconfigs.map((vc) => ({
        vc,
        abi: abiVaultQuery,
        address: VAULT_QUERY_ADDRESS[chainId],
        functionName: vc.isStable ? 'getStableVaultState' : 'getVaultState',
        args: [vc.vault],
      })),
    ],
  })
  const { data: vaultsYData } = useWandContractReads({
    query: { gcTime: Day1 },
    contracts: [
      ...vaultconfigs.map((vc) => ({
        vc,
        abi: abiVault,
        address: vc.vault,
        functionName: 'paramValue',
        args: [stringToHex('Y', { size: 32 })],
      })),
    ],
  })

  const prices: FetcherContextInterface['prices'] = useMemoOfChainId(() =>
    proxyGetDef({ [USB_ADDRESS[chainId]]: DECIMAL }, 0n),
  )
  const assetLocked: FetcherContextInterface['assetLocked'] = useMemoOfChainId(() => proxyGetDef({}, 0n))
  const aar: FetcherContextInterface['aar'] = useMemoOfChainId(() => proxyGetDef({}, 0n))
  const vaultUSBTotal: FetcherContextInterface['vaultUSBTotal'] = useMemoOfChainId(() => proxyGetDef({}, 0n))
  const vaultsMode: FetcherContextInterface['vaultsMode'] = useMemoOfChainId(() => proxyGetDef({}, 0))
  const vaultsState: FetcherContextInterface['vaultsState'] = useMemoOfChainId(() =>
    proxyGetDef({}, proxyGetDef({}, 0n)),
  )
  const stableVaultsState: FetcherContextInterface['stableVaultsState'] = useMemoOfChainId(() =>
    proxyGetDef({}, proxyGetDef({}, 0n)),
  )
  const vaultsDiscount = useVaultsDiscount(vaultsState, stableVaultsState, vaultsMode)
  vaultconfigs.forEach((vc, index) => {
    const _assetTotal = getBigint(assetTotalAmount, [index, 'result'])
    const _usbTotalSupply = getBigint(usbTotalSupply, [index, 'result'])
    const _assetPrice0 = getBigint(assetTokenPrice[vc.assetTokenAddress], [0])
    const _assetPrice1 = getBigint(assetTokenPrice[vc.assetTokenAddress], [1])
    // vaultUSBTotal
    vaultUSBTotal[vc.vault] = _usbTotalSupply

    const assetPrice = _assetPrice1 > 0n ? (_assetPrice0 * DECIMAL) / 10n ** _assetPrice1 : 0n
    // assetPrice
    prices[vc.assetTokenAddress] = assetPrice

    const xTotalSupply = totalSupplies[vc.xTokenAddress]
    let xPrice =
      xTotalSupply > 0n &&
      _assetTotal > 0n &&
      assetPrice > 0n &&
      _usbTotalSupply > 0n &&
      _assetTotal * assetPrice > _usbTotalSupply * DECIMAL
        ? (_assetTotal * assetPrice - _usbTotalSupply * DECIMAL) / xTotalSupply
        : 0n
    // aar < 100%
    if (
      xTotalSupply > 0n &&
      _assetTotal > 0n &&
      assetPrice > 0n &&
      _usbTotalSupply > 0n &&
      _assetTotal * assetPrice < _usbTotalSupply * DECIMAL
    ) {
      // xPrice = (101n * _usbTotalSupply * DECIMAL) / 100n / xTotalSupply
      prices[USB_ADDRESS[chainId]] = (_assetTotal * assetPrice) / _usbTotalSupply
    }
    // xtokenPrice
    prices[vc.xTokenAddress] = xPrice
    // console.info('prices:', xTotalSupply, _assetTotal, assetPrice, _usbTotalSupply, xPrice)

    // assetLocked
    assetLocked[vc.assetTokenAddress] = _assetTotal

    // AAR
    const aarStr = formatUnits(
      getBigint(aarData, [index, 'result']),
      parseInt(getBigint(aarDecimalsData, [index, 'result']).toString()),
    )
    aar[vc.vault] = parseFloat(aarStr)

    // VaultsState
    if (vc.isStable) {
      stableVaultsState[vc.vault] = proxyGetDef(
        {
          settingsDecimals: 10n,
          ...(vaultsStateData?.[index]?.result as any),
          Y: getBigint(vaultsYData, [index, 'result']),
        },
        0n,
      )
    } else {
      vaultsState[vc.vault] = proxyGetDef(
        {
          settingsDecimals: 10n,
          ...(vaultsStateData?.[index]?.result as any),
          Y: getBigint(vaultsYData, [index, 'result']),
        },
        0n,
      )
    }
    // VaultsMode
    const vs_s = stableVaultsState[vc.vault]

    vaultsMode[vc.vault] = vc.isStable
      ? vs_s.aar < vs_s.AARS && vs_s.M_USDC > 0n
        ? 2
        : 1
      : (vaultsModeData?.[index]?.result as number) || 0
  })

  const earns = useReadEarns()
  const usbApr = useUSBApr(vaultsState, stableVaultsState)
  // auto update timestamp per 1hours
  useEffect(() => {
    const per = 1000 * 60 * 60
    // const per = 5000
    setInterval(() => {
      const wt = useWandTimestamp.getState()
      _.now() - wt.time >= per && wt.update()
    }, per)
  }, [])

  const { value: ptypoolYields = {} } = useAsyncRetry(getPtypoolYields, [wand.time])
  useUpdatePtypoolApy(earns, prices, vaultsState)
  const plainVaultsStat = usePlainVualtsReads(prices)
  return (
    <FetcherContext.Provider
      value={{
        balances,
        totalSupplies,
        prices,
        assetLocked,
        aar,
        vaultUSBTotal,
        vaultsMode,
        vaultsDiscount,
        vaultsState,
        stableVaultsState,
        earns,
        usbApr,
        ptypoolYields,
        plainVaultsStat,
      }}
    >
      {children}
    </FetcherContext.Provider>
  )
}
