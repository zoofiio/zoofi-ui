import { cn } from '@/lib/utils'

export function Switch(p: { checked?: boolean; onChange?: (check?: boolean) => void }) {
  return (
    <div
      style={{
        padding: 1,
        border: '1px solid transparent',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box,border-box',
        backgroundOrigin: 'padding-box,border-box',
        backgroundImage: !p.checked
          ? 'radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)'
          : 'radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)',
      }}
      className={cn('relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl')}
      onClick={() => p.onChange?.(!p.checked)}
    >
      <div
        className={cn('transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]', !p.checked ? 'left-[1em]' : '-left-[1px]')}
        style={{
          background: !p.checked
            ? '#3B4144'
            : 'radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)',
        }}
      />
    </div>
  )
}
