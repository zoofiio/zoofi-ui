import { BASE_PATH } from '@/config/env'
import { cn } from '@/lib/utils'

export type PointIconType = 'wand' | 'blast' | 'ethfi' | 'gold' | 'weeth'

const ICON_SRC: { [k in PointIconType]?: string } = {}

export function PointsIcons({ className, icons }: { className?: string; icons: PointIconType[] }) {
  return (
    <div className={cn('flex gap-1 items-center', className)}>
      <span className='mr-2'>Points:</span>
      {icons.map((icon, i) => (
        <img
          key={icon}
          className='rounded-full w-5 h-5 object-fill'
          alt={icon}
          src={BASE_PATH + (ICON_SRC[icon] || `${icon}.png`)}
        />
      ))}
    </div>
  )
}
