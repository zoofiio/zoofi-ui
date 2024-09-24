import { USB_ADDRESS, VAULTS_CONFIG } from '@/config/swap'
import { useMemo } from 'react'
import { useAccount } from 'wagmi'
import { useCurrentChainId } from './useCurrentChainId'
import { useBoundStore } from '@/providers/useBoundStore'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { ENV } from '@/constants'
import { Address } from 'viem'

export function useLoadLVaults() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const { address } = useAccount()
  const tokens = useMemo(() => {
    return _.chain(VAULTS_CONFIG[chainId])
      .map((vc) => [vc.assetTokenAddress, vc.xTokenAddress])
      .flatten()
      .concat([USB_ADDRESS[chainId]])
      .union()
      .value()
  }, [chainId])
  useQuery({
    queryKey: ['UpdateLvautlsTokens', tokens],
    queryFn: async () => {
      await useBoundStore.getState().sliceTokenStore.updateTokenTotalSupply(tokens)
      return true
    },
  })
  useQuery({
    queryKey: ['UpdateUserLvautlsTokens', tokens, address],
    queryFn: async () => {
      if (!address) return false
      await useBoundStore.getState().sliceTokenStore.updateTokensBalance(tokens, address)
      return true
    },
  })
  useQuery({
    queryKey: ['UpdateLVautls', vcs],
    queryFn: async () => {
      await useBoundStore.getState().sliceLVaultsStore.updateLVaults(vcs)
      return true
    },
  })
}

export function useLoadBVaults() {
  const chainId = useCurrentChainId()
  const bvcs = useMemo(() => BVAULTS_CONFIG[chainId].filter((vc) => (vc.onEnv || []).includes(ENV)), [chainId, ENV])
  // useUpdateBVaultsData(bvcs)
  useQuery({
    queryKey: [bvcs],
    queryFn: async () => {
      await useBoundStore.getState().sliceBVaultsStore.updateBvaults(bvcs)
      await useBoundStore.getState().sliceBVaultsStore.updateBvaultsCurrentEpoch()
      return true
    },
  })
  const { address } = useAccount()
  const tokens = useMemo(
    () =>
      bvcs
        .map((b) => [b.asset, b.pToken])
        .flat()
        .reduce<Address[]>((union, item) => (union.includes(item) ? union : [...union, item]), []),
    [bvcs],
  )
  useQuery({
    queryKey: ['UpdateBvautlsTokens', tokens],
    queryFn: async () => {
      await useBoundStore.getState().sliceTokenStore.updateTokenTotalSupply(tokens)
      await useBoundStore.getState().sliceTokenStore.updateTokenPrices(tokens)
      return true
    },
    throwOnError(error, query) {
      console.error(error)
      return false
    },
  })
  useQuery({
    queryKey: ['UpdateUserBvautlsTokens', tokens, address],
    queryFn: async () => {
      if (!address) return false
      await useBoundStore.getState().sliceTokenStore.updateTokensBalance(tokens, address)
      return true
    },
  })
}
