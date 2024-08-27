'use client'

import { Header } from '@/components/header'
import { useConfigDomain } from '@/hooks/useConfigDomain'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Providers } from './providers'
import { isBETA } from '@/constants'
// background: linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%);

export default function PageLayout({ children }: { children: ReactNode }) {
  useConfigDomain()
  return (
    <>
      <Providers>
        <Header />
        {children}
      </Providers>
      <Toaster position='top-right' offset={70} />
      {isBETA && <div className='fixed left-0 top-0 z-50 px-1 text-xs bg-red-600 text-white'>Beta</div>}
    </>
  )
}
