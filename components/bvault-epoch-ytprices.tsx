import { getBvaultEpochYtPrices } from '@/config/api'
import { BVaultConfig } from '@/config/bvaults'
import { useQuery } from '@tanstack/react-query'
import EChartsReact from 'echarts-for-react'

import { cn, fmtTime } from '@/lib/utils'
import { graphic } from 'echarts'
import _ from 'lodash'
import { useMemo } from 'react'
import { useToggle } from 'react-use'
import { formatEther } from 'viem'

const bnToNum = (bn: string) => _.round(parseFloat(formatEther(BigInt(bn))), 5)

// const absLog10 = (num: number) => Math.abs(Math.log10(num))
// const logTrans = (num: number) => (num > 1 ? _.round(1 + (num - 1) / absLog10(num), 5) : _.round(1 - (1 - num) / absLog10(num), 5))
// const revertLog = (num: number) => (num > 1 ? _.round((num - 1) * absLog10(num) + 1, 5) : _.round(1 - (1 - num) * absLog10(num), 5))
const logTrans = (num: number) => _.round(Math.log10(num * 10000), 5)
const revertLog = (num: number) => _.round(Math.pow(10, num) / 10000, 5)
export default function BvaultEpochYtPrices({ bvc, epochId }: { bvc: BVaultConfig; epochId: bigint }) {
  const { data: prices } = useQuery({
    queryKey: ['bvualt-epoch-yt-prices', bvc.vault, epochId],
    queryFn: () => getBvaultEpochYtPrices(bvc.vault, epochId),
    initialData: [],
  })
  const [isLOG, togLOG] = useToggle(true)
  const { options } = useMemo(() => {
    const data = prices.map((p) => [fmtTime(p.time * 1000, 'all'), isLOG ? logTrans(bnToNum(p.price)) : bnToNum(p.price)])
    const valueFormater = (value: number) => (isLOG ? revertLog(value).toString() : value.toString())
    const options = {
      animation: true,
      animationDuration: 200,
      tooltip: {
        trigger: 'axis',
        valueFormatter: valueFormater,
      },
      grid: { top: 30, bottom: 30, right: 20, show: false },
      toolbox: { show: false },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: { show: false },
        axisLabel: {
          formatter: valueFormater,
        },
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
          minValueSpan: 10,
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
    return { data, options }
  }, [prices, isLOG])

  return (
    <div className='card mx-auto max-w-4xl w-full'>
      <div className='flex justify-between gap-2 items-center'>
        <span className='text-base font-bold'>YT Price Chart</span>
        <span className='text-xs font-medium dark:text-[#FBECEC]'>The value of YT will become ZERO at the end of the Epoch.</span>
      </div>
      <div className='flex gap-2 justify-end items-center mt-2'>
        <span className={cn('cursor-pointer text-xs px-1 py-0 rounded border-primary border', isLOG ? 'bg-primary' : 'bg-transparent')} onClick={() => togLOG()}>
          LOG
        </span>
      </div>
      <EChartsReact option={options} style={{ height: 240 }}></EChartsReact>
    </div>
  )
}
