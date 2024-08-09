'use client'

import { cn } from '@/lib/utils'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { RxQuestionMarkCircled } from 'react-icons/rx'
export function Tip({
  children,
  node,
  className,
  inFlex,
}: {
  children?: ReactNode
  node?: ReactNode
  className?: string
  inFlex?: boolean
}) {
  const tooltipRoot = document.getElementById('tooltip-root')
  if (!children) return node
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger
          asChild
          onClickCapture={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          {node ? (
            <div className={cn('inline-block cursor-default', className)} style={{ verticalAlign: 'text-bottom' }}>
              {node}
            </div>
          ) : (
            <div
              className={cn(
                inFlex ? 'flex' : 'translate-y-[-6%] inline-block',
                ' px-[3px] cursor-default relative',
                className,
              )}
            >
              <RxQuestionMarkCircled className='inline-block stroke-slate-500' />
            </div>
          )}
        </Tooltip.Trigger>

        <Tooltip.Portal container={tooltipRoot}>
          <Tooltip.Content className='max-w-xs text-sm text-white bg-slate-900 shadow-lg dark:bg-[#333333] rounded-md p-4'>
            {children}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
