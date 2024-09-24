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

export function useStoreShallow<T>(s: (data: BoundStoreType) => T, depends: any[] = []) {
  const store = useBoundStore()
  return useMemo(() => s(store), [store, ...depends])
}
