'use client'

import { Header } from '@/components/header'
import { useConfigDomain } from '@/hooks/useConfigDomain'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Providers } from './providers'

export default function PageLayout({ children }: { children: ReactNode }) {
  useConfigDomain()
  return (
    <>
      <Providers>
        <Header />
        <div className='min-h-[calc(100vh+1px)] h-auto pt-[80px] pb-6'>{children}</div>
      </Providers>
      <Toaster position='top-right' offset={70} />
    </>
  )
}
