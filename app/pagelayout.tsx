'use client'

import { Header } from '@/components/header'
import { isBETA } from '@/constants'
import { useConfigDomain } from '@/hooks/useConfigDomain'
import { usePcReadingCount } from '@/hooks/useWrapPublicClient'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Providers } from './providers'
// background: linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%);

function BetaFlag() {
  const readingCount = usePcReadingCount()
  if (!isBETA) return null
  return <div className='fixed left-0 top-0 z-50 px-1 text-xs bg-red-600 text-white'>Beta {readingCount}</div>
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
      <BetaFlag />
    </>
  )
}
