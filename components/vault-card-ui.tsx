import { cn } from '@/lib/utils'
import { CoinIcon } from './icons/coinicon'
import { displayBalance } from '@/utils/display'
import { IconsMap } from './icons'

export const itemClassname = 'py-5 flex flex-col items-center gap-2 relative dark:border-border border-solid'
export const renderToken = (symbol: string, amount: bigint, usd: bigint, borderL: boolean = false) => {
  return (
    <div className={cn(itemClassname, 'border-b', { 'border-l': borderL })}>
      <div>
        <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap flex gap-2 items-center'>
          <CoinIcon symbol={symbol} size={14} />
          {symbol}
        </div>
        <div className='flex mt-2 flex-col gap-1 pl-[1.375rem] text-xs font-medium'>
          <span className=''>{displayBalance(amount)}</span>
          <span className=' text-[#64748B] dark:text-slate-50/60'>{`$${displayBalance(usd)}`}</span>
        </div>
      </div>
    </div>
  )
}
export const renderStat = (tit: string, icon: string, sub: string, borderL: boolean = false) => (
  <div className={cn(itemClassname, 'border-b', { 'border-l': borderL })}>
    <div>
      <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
        {tit}
      </div>
      <div className='flex mt-2 items-center gap-2 text-sm font-medium'>
        <CoinIcon symbol={icon} size={14} />
        <span>{sub}</span>
      </div>
    </div>
  </div>
)
export const renderChoseSide = (
  leftSymbol: keyof typeof IconsMap,
  leftTitle: string,
  leftSub: string,
  rightSymbol: keyof typeof IconsMap,
  rightTitle: string,
  rightSub: string,
) => {
  const LeftIcon = IconsMap[leftSymbol]
  const RightIcon = IconsMap[rightSymbol]
  return (
    <div className={cn(itemClassname, 'col-span-2 gap-4')}>
      <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
        Choose your side
      </div>
      <div className='flex justify-between items-center gap-4 w-full px-4 md:px-5'>
        <div className='flex gap-4 items-center'>
          <LeftIcon className='text-4xl' showBg />
          <div className='flex flex-col items-start gap-2'>
            <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
              {leftTitle}
            </div>
            <span className=' text-[14px] leading-[14px] font-medium ml-[5px]'>{leftSub}</span>
          </div>
        </div>
        <div className='flex flex-row-reverse gap-4 items-center'>
          <RightIcon className='text-4xl' showBg />
          <div className='flex flex-col items-end gap-2'>
            <div className='text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap'>
              {rightTitle}
            </div>
            <span className=' text-[14px] leading-[14px] font-medium ml-[5px]'>{rightSub}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
