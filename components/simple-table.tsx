import { cn } from '@/lib/utils'
import React, { CSSProperties, ReactNode } from 'react'

export interface TableProps {
  header: ReactNode[]
  data: ReactNode[][]
  span?: number[] | { [k: number]: number }
  empty?: ReactNode
  className?: string
  headerClassName?: string
  tbodyClassName?: string
  rowClassName?: string | ((index: number) => string)
  rowStyle?: CSSProperties | ((index: number) => CSSProperties)
  cellClassName?: string | ((index: number, cellIndex: number) => string)
  headerItemClassName?: string
  onClickRow?: (rowIndex: number) => void
  // index -1 表示没有hover在row上
  onRowMouseHover?: (index: number) => void
}

export function DefEmpty() {
  return (
    <tr className='text-lg font-normal text-center text-black '>
      <td colSpan={100} className='h-[100px] py-5 align-top'></td>
    </tr>
  )
}

export const STable = ({
  header,
  data,
  span = {},
  empty = <DefEmpty />,
  className = 'relative min-w-full bg-transparent ',
  headerClassName,
  headerItemClassName,
  tbodyClassName = '',
  rowClassName,
  rowStyle,
  cellClassName,
  onClickRow,
  onRowMouseHover,
}: TableProps) => {
  return (
    <table className={cn('relative min-w-full bg-transparent ', className)}>
      <thead className=''>
        <tr
          className={cn(
            'text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600',
            headerClassName,
          )}
        >
          {header.map((head, i) => {
            return (
              <th
                key={i}
                colSpan={span[i]}
                scope='col'
                className={cn(span[i] == 0 ? 'p-0 w-0' : 'p-3 font-normal text-sm', headerItemClassName)}
              >
                {head}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody className={cn(tbodyClassName)}>
        {data.map((items, index) => (
          <tr
            key={index}
            onClick={() => onClickRow && onClickRow(index)}
            onMouseEnter={() => onRowMouseHover && onRowMouseHover(index)}
            onMouseLeave={() => onRowMouseHover && onRowMouseHover(-1)}
            style={typeof rowStyle == 'function' ? rowStyle(index) : rowStyle}
            className={cn(
              'text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap',
              onClickRow ? 'cursor-pointer hover:bg-slate-400/10' : '',
              typeof rowClassName == 'function' ? rowClassName(index) : rowClassName,
            )}
          >
            {items.map((value, i) => {
              if (i >= header.length) return <>{value}</>
              return (
                <td
                  key={i}
                  colSpan={span[i]}
                  className={cn(
                    span[i] == 0 ? 'p-0 w-max' : 'px-3 py-2 text-sm w-max',
                    typeof cellClassName == 'function' ? cellClassName(index, i) : cellClassName,
                  )}
                >
                  {value}
                </td>
              )
            })}
          </tr>
        ))}
        {data.length === 0 && empty}
      </tbody>
    </table>
  )
}
export default STable
