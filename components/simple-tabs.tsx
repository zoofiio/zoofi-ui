import { cn } from '@/lib/utils'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

export function SimpleTabs({
  className,
  listClassName,
  triggerClassName,
  contentClassName,
  data,
  onTabChange,
}: {
  className?: string
  listClassName?: string
  triggerClassName?: string
  contentClassName?: string
  data: { tab: string; content: React.ReactNode }[]
  onTabChange?: (tab: string) => void
}) {
  const [tab, setTab] = useState(data[0].tab)
  return (
    <Tabs.Root
      value={tab}
      className={cn('w-full', className)}
      onValueChange={(e) => {
        setTab(e)
        onTabChange?.(e)
      }}
    >
      <Tabs.List className={cn('bg-slate-100 p-1 w-fit rounded-md dark:bg-transparent', listClassName)}>
        {data.map((item) => (
          <Tabs.Trigger
            key={item.tab}
            className={cn(
              'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900 dark:bg-transparent dark:text-slate-50/60 dark:data-[state="active"]:text-slate-50',
              triggerClassName,
            )}
            value={item.tab}
          >
            {item.tab}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {data.map((item) => (
        <Tabs.Content key={item.tab} value={item.tab} className={cn('flex flex-col gap-6 outline-none', contentClassName)}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
