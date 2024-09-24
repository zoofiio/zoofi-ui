import { getBvaultEpochYtPrices } from '@/config/api'
import { BVaultConfig } from '@/config/bvaults'
import { useQuery } from '@tanstack/react-query'
import EChartsReact from 'echarts-for-react'

import { fmtTime } from '@/lib/utils'
import { graphic } from 'echarts'
import _ from 'lodash'
import { formatEther } from 'viem'

export default function BvaultEpochYtPrices({ bvc, epochId }: { bvc: BVaultConfig; epochId: bigint }) {
  const { data: prices } = useQuery({
    queryKey: ['bvualt-epoch-yt-prices', bvc.vault, epochId],
    queryFn: () => getBvaultEpochYtPrices(bvc.vault, epochId),
    initialData: [],
  })
  const data = prices.map((p) => [fmtTime(p.time * 1000, 'all'), _.round(parseFloat(formatEther(BigInt(p.price))), 5)])
  const options = {
    animation: true,
    animationDuration: 200,
    tooltip: {
      trigger: 'axis',
      valueFormatter: (value: number) => value.toString(),
    },
    grid: { show: false },
    toolbox: { show: false },
    xAxis: {
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: { show: false },
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
        minValueSpan: 10
      },
      {
        show: false,
      },
    ],
    series: [
      {
        name: 'YT Price',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(30, 202, 83)',
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(30, 202, 83)',
            },
            {
              offset: 1,
              color: 'rgba(30, 202, 83, 0.2)',
            },
          ]),
        },
        data: data,
      },
    ],
  }
  return (
    <div className='card mx-auto max-w-4xl w-full'>
      <div className='flex justify-between gap-2 items-center'>
        <span className='text-base font-bold'>YT Price Chart</span>
        <span className='text-xs font-medium text-[#FBECEC]'>The value of YT will become ZERO at the end of the Epoch.</span>
      </div>
      <EChartsReact option={options}></EChartsReact>
    </div>
  )
}
