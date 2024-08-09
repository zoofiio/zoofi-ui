'use client'

import { MigrationTip } from '@/components/migrationv2'
import { PlainVault } from '@/components/plain-vault'
import { PLAIN_VAULTS_CONFIG, VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { Grid } from '@tremor/react'
import _ from 'lodash'
import { ReactNode, useMemo } from 'react'
import { AiFillNotification } from 'react-icons/ai'
import { GroupVaultCollapse } from '../../components/vault-collapse'

function StrongSpan({ children }: { children: ReactNode }) {
  return <span className='font-extrabold'>{children}</span>
}

export default function Vaults() {
  const chainId = useCurrentChainId()
  const vcs = VAULTS_CONFIG[chainId]
  const pvcs = PLAIN_VAULTS_CONFIG[chainId] || []
  const groupsVcs = useMemo(() => Object.values(_.groupBy(vcs, 'assetTokenSymbol')), [vcs])
  return (
    <div className='w-full max-w-screen-xl px-4 mx-auto md:pb-8'>
      <MigrationTip />
      <h2 className='page-title'>Vaults</h2>
      <div className='w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[24px] md:leading-[14px]'>
        <div className=''>
          <AiFillNotification size={20} />
        </div>
        <div className='text-sm ml-1 '>
          Depositing assets into Vaults allows you to earn <StrongSpan>Blast Points</StrongSpan>,{' '}
          <StrongSpan>Blast Gold</StrongSpan>, <StrongSpan>Protocol earnings</StrongSpan>, and{' '}
          <StrongSpan>Wand airdrops</StrongSpan>.
        </div>
      </div>
      {/* <BlastPointCards /> */}
      <Grid numItemsMd={1} className='gap-3 mt-4'>
        {groupsVcs.map((item, index) => (
          <GroupVaultCollapse key={`group_vault_item_${index}`} vcs={item} />
        ))}
        {pvcs.map((item, index) => (
          <PlainVault vc={item} key={`plain_vault_item_${index}`} />
        ))}
      </Grid>
    </div>
  )
}
