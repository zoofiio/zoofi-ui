import { cn, fmtPercent } from '@/lib/utils'

export function FmtPercent({
  className,
  value,
  decimals,
  showDecimals = 2,
  plusI0 = true,
}: {
  className?: string
  value?: bigint
  decimals: number | bigint
  showDecimals?: number
  plusI0?: boolean
}) {
  const _value = value == 0n ? 0n : value || 0n
  const showPlus = plusI0 ? _value >= 0n : _value > 0n
  const _showDef = value == null || value == undefined || typeof value != 'bigint'

  return (
    <span className={cn(className, showPlus ? 'text-green-600' : 'text-red-600')}>
      {_showDef ? (
        '-%'
      ) : (
        <>
          {showPlus && '+'}
          {fmtPercent(_value, decimals, showDecimals)}
        </>
      )}
    </span>
  )
}
