'use client'

import { Header } from '@/components/header'
import { useConfigDomain } from '@/hooks/useConfigDomain'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Providers } from './providers'
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
    </>
  )
}
