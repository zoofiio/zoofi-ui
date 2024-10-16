import { BVaultConfig, BVAULTS_CONFIG } from '@/config/bvaults'
import { USB_ADDRESS, VAULTS_CONFIG } from '@/config/swap'
import { ENV } from '@/constants'
import { BVaultEpochDTO } from '@/providers/sliceBVaultsStore'
import { useBoundStore, useStore } from '@/providers/useBoundStore'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { useMemo } from 'react'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { useCurrentChainId } from './useCurrentChainId'

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
      await useBoundStore.getState().sliceBVaultsStore.updateYTokenSythetic(bvcs)
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

export function useLoadUserLVaults() {
  const { address } = useAccount()
  const chainId = useCurrentChainId()
  const lvcs = VAULTS_CONFIG[chainId]
  useQuery({
    queryKey: ['UpdateAllUserLVaults', chainId, address, lvcs],
    queryFn: async () => {
      if (!address) return false
      await Promise.all(lvcs.map((lvc) => useBoundStore.getState().sliceLVaultsStore.updateUserLVault(lvc, address)))
      return true
    },
  })
}

export function useLoadUserBVaults() {
  const { address } = useAccount()
  const chainId = useCurrentChainId()
  const bvcs = useMemo(() => BVAULTS_CONFIG[chainId].filter((vc) => (vc.onEnv || []).includes(ENV)), [chainId, ENV])
  const bvaultsKeys = useStore((s) => _.keys(s.sliceBVaultsStore.bvaults).toString(), ['sliceBVaultsStore.bvaults'])
  useQuery({
    queryKey: ['UpdateAllUserBvaults', bvcs, chainId, address, bvaultsKeys],
    queryFn: async () => {
      if (!address) return false
      const bvaults = useBoundStore.getState().sliceBVaultsStore.bvaults
      for (const bvc of bvcs) {
        if (!bvaults[bvc.vault]) return false
      }
      await Promise.all(bvcs.map((bvc) => useBoundStore.getState().sliceBVaultsStore.updateEpoches(bvc)))
      const getEpochesParams = (bvc: BVaultConfig) => {
        const bvd = useBoundStore.getState().sliceBVaultsStore.bvaults[bvc.vault]!
        const epoches: BVaultEpochDTO[] = []
        for (let epocheId = parseInt(bvd.epochCount.toString()); epocheId > 0; epocheId--) {
          const epoch = useBoundStore.getState().sliceBVaultsStore.epoches[`${bvc.vault}_${epocheId}`]!
          epoches.push(epoch)
        }
        return epoches
      }
      await Promise.all(bvcs.map((bvc) => useBoundStore.getState().sliceUserBVaults.updateEpoches(bvc, address, getEpochesParams(bvc))))
      return true
    },
  })
}
