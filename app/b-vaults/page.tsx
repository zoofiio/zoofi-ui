'use client'

import { BVault } from '@/components/b-vault'
import { MigrationTip } from '@/components/migrationv2'
import { Noti } from '@/components/noti'
import { PageWrap } from '@/components/page-wrap'
import { BVAULTS_CONFIG } from '@/config/bvaults'
import { isBETA } from '@/constants'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { ReactNode } from 'react'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

export default function Vaults() {
  const chainId = useCurrentChainId()
  const bvcs = BVAULTS_CONFIG[chainId]
  const current = bvcs[0]
  return (
    <PageWrap>
      <div className='w-full max-w-[1160px] px-4 mx-auto md:pb-8'>
        <MigrationTip />
        <div className='page-title'>B-Vaults</div>
        <Noti data='A pendle-like product with more innovation.' />

        {current && isBETA && (
          <>
            <BVault bvc={current} />
          </>
        )}
      </div>
    </PageWrap>
  )
}
