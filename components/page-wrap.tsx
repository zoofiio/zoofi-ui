import React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
// background: radial-gradient(76.25% 76.25% at 50.3% 23.75%, rgba(27, 205, 89, 0.2) 0%, rgba(179, 232, 84, 0.2) 100%)
export function PageWrap({ children, className }: { children: React.ReactNode; className?: string }) {
  const path = usePathname()
  const isHome = path == '/'
  return (
    <div
      className={cn('min-h-[calc(100vh+1px)] h-auto pt-[80px] pb-6', className)}
      style={{
        backgroundSize: 'contain',
        background: isHome
          ? 'url(bg_home.svg) center bottom no-repeat,linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)'
          : 'linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)',
      }}
    >
      {children}
    </div>
  )
}
