import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

export type RCStore = {
  readingCount: number
  upReadingCount: (add: 1 | -1) => void
}
export const useReadingCountStore = create<RCStore>((set, get) => ({
  readingCount: 0,
  upReadingCount: (add: 1 | -1) => set({ readingCount: get().readingCount + add }),
}))

export function useReadingCount() {
  return useReadingCountStore(useShallow((s) => s.readingCount))
}
