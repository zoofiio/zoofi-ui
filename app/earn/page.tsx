'use client'

import { GroupDualTokenCard } from '@/components/dual-token-card'
import { MigrationTip } from '@/components/migrationv2'
import { VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { Grid } from '@tremor/react'
import { Fragment, useMemo } from 'react'

export default function EarnPage() {
  const chainId = useCurrentChainId()
  const vcs = useMemo(() => VAULTS_CONFIG[chainId].filter((item) => !item.isStable), [chainId])
  return (
    <div className='w-full h-full max-w-[1160px] px-4 mx-auto'>
      <MigrationTip />
      <h2 className='page-title'>Price Trigger Yield</h2>
      <Grid numItemsMd={2} className='gap-3 mt-4'>
        {vcs.map((vc, index) => (
          <Fragment key={`dual_card_group_${index}`}>
            <GroupDualTokenCard vcs={[vc]} type='buy' />
            <GroupDualTokenCard vcs={[vc]} type='sell' />
          </Fragment>
        ))}
      </Grid>
    </div>
  )
}
