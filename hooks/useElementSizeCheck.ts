import { useMeasure } from 'react-use'
import { UseMeasureRef } from 'react-use/lib/useMeasure'

// 用于检测元素尺寸变化的hook
export function useElementSizeCheck(
  checkFn: ({ width, height }: { width: number; height: number }) => boolean,
): [UseMeasureRef<Element>, boolean] {
  const [ref, size] = useMeasure()
  return [ref, checkFn(size)]
}
