import { RefObject, useEffect, useRef } from 'react'

const memo: {
  [k: string]: RefObject<HTMLElement>[]
} = {}

export function useSyncHeight<T extends HTMLElement>(key: string) {
  const elRef = useRef<T>(null)
  if (!memo[key] || !memo[key].includes(elRef)) {
    memo[key] = [...(memo[key] || []), elRef]
  }
  useEffect(() => {
    if (!elRef.current) return () => {}
    const onResize = () => {
      const memoList = memo[key] || []
      const max = memoList.reduce<number>((max: number, ref) => Math.max(ref.current?.clientHeight || 0, max), 0)
      memoList
        .filter((item) => item != elRef)
        .forEach((ref) => {
          const refHeight = ref.current?.clientHeight || 0
          refHeight !== max && max > 0 && ref.current && (ref.current.style.height = `${max}px`)
        })
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [elRef.current])
  return elRef
}
