import _ from 'lodash'
import { useMemo } from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { sliceBVaultsStore } from './sliceBVaultsStore'
import { sliceLVaultsStore } from './sliceLVaultsStore'
import { sliceTokenStore } from './sliceTokenStore'
import { sliceUserBVaults } from './sliceUserBVaults'

type SliceType<T> = { [k in keyof T]: (set: (data: Partial<T[k]>) => void, get: () => T[k], init?: Partial<T[k]>) => T[k] }

function sliceStores<T>(slices: SliceType<T>, init: Partial<T> = {}) {
  return (set: (data: Partial<T>) => void, get: () => T) => {
    return _.mapValues(slices, (value, key) =>
      value(
        (data) => set({ [key as keyof T]: { ...get()[key as keyof T], ...data } } as any),
        () => get()[key as keyof T],
        init[key as keyof T],
      ),
    ) as T
  }
}
const boundStore = sliceStores(
  {
    sliceBVaultsStore,
    sliceLVaultsStore,
    sliceTokenStore,
    sliceUserBVaults,
  },
  {}, // restore data
)

const wrapDevtools = devtools(boundStore, { name: 'BoundStore', store: 'BoundStore', enabled: true })
export type BoundStoreType = ReturnType<typeof wrapDevtools>

export const useBoundStore = create<BoundStoreType>(wrapDevtools as any)

type KKeys<T> = Extract<keyof T, string | number | bigint>
type LKeys<T, K extends KKeys<T>> = `${K}.${KKeys<T[K]>}`
type sliceBVaultsPaths =
  | LKeys<ReturnType<typeof sliceBVaultsStore>, 'bvaults'>
  | LKeys<ReturnType<typeof sliceBVaultsStore>, 'epoches'>
  | LKeys<ReturnType<typeof sliceBVaultsStore>, 'yTokenSythetic'>
type sliceLVaultsPaths = LKeys<ReturnType<typeof sliceLVaultsStore>, 'lvaults'> | LKeys<ReturnType<typeof sliceLVaultsStore>, 'user'>
type sliceTokenPaths =
  | LKeys<ReturnType<typeof sliceTokenStore>, 'balances'>
  | LKeys<ReturnType<typeof sliceTokenStore>, 'defTokenList'>
  | LKeys<ReturnType<typeof sliceTokenStore>, 'prices'>
  | LKeys<ReturnType<typeof sliceTokenStore>, 'totalSupply'>
type sliceUserBVaultsPaths = LKeys<ReturnType<typeof sliceUserBVaults>, 'epoches'>

type DepPaths =
  | KKeys<BoundStoreType>
  | LKeys<BoundStoreType, 'sliceBVaultsStore'>
  | `sliceBVaultsStore.${sliceBVaultsPaths}`
  | LKeys<BoundStoreType, 'sliceLVaultsStore'>
  | `sliceLVaultsStore.${sliceLVaultsPaths}`
  | LKeys<BoundStoreType, 'sliceTokenStore'>
  | `sliceTokenStore.${sliceTokenPaths}`
  | LKeys<BoundStoreType, 'sliceUserBVaults'>
  | `sliceUserBVaults.${sliceUserBVaultsPaths}`

export function useStore<T>(selector: (s: BoundStoreType) => T, dependsPaths: ('' | DepPaths)[] = ['']) {
  const store = useBoundStore()
  return useMemo(
    () => selector(store),
    dependsPaths.map((path) => (!path ? store : _.get(store, path))),
  )
}
