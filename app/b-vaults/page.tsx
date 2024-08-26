'use client'

import { MigrationTip } from '@/components/migrationv2'
import { PageWrap } from '@/components/page-wrap'
import { PLAIN_VAULTS_CONFIG, VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import _ from 'lodash'
import { ReactNode, useMemo } from 'react'
import { AiFillNotification } from 'react-icons/ai'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

export default function Vaults() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  const groupsVcs = useMemo(() => Object.values(_.groupBy(vcs, 'assetTokenSymbol')), [vcs])
  return (
    <PageWrap>
      <div className='w-full max-w-[1160px] px-4 mx-auto md:pb-8'>
        <MigrationTip />
        <h2 className='page-title'>B-Vaults</h2>
        <div className='w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[24px] md:leading-[14px]'>
          <div className=''>
            <AiFillNotification size={20} />
          </div>
          <div className='text-sm ml-1 '>A pendle-like product with more innovative.</div>
        </div>
      </div>
    </PageWrap>
  )
}
