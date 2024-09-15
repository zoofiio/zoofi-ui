'use client'

import { Header } from '@/components/header'
import { isBETA } from '@/constants'
import { useConfigDomain } from '@/hooks/useConfigDomain'
import { useReadingCount } from '@/hooks/useWrapPublicClient'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
// background: linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%);

function PageLoading() {
  const readingCount = useReadingCount()
  return <div className={cn('top-loader fixed z-10 top-0 left-0', readingCount ? 'visible' : 'invisible')} />
}

function BetaFlag() {
  if (!isBETA) return null
  return <div className='fixed left-0 top-0 z-50 px-1 text-xs bg-red-600 text-white'>Beta</div>
}

export default function PageLayout({ children }: { children: ReactNode }) {
  useConfigDomain()

  return (
    <>
      <Providers>
        <Header />
        {children}
      </Providers>
      <Toaster position='top-right' offset={70} />
      {/* <BetaFlag /> */}
      <PageLoading />
    </>
  )
}
