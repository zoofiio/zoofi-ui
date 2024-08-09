import { cn } from '@/lib/utils'
import * as Dialog from '@radix-ui/react-dialog'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export function SimpleDialog({
  trigger,
  children,
  className,
  style,
  closeClassName,
  disableOutClose,
  disableClose,
  triggerProps,
  ...props
}: {
  trigger?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  closeClassName?: string
  disableOutClose?: boolean
  disableClose?: boolean
  triggerProps?: Dialog.DialogTriggerProps
} & Dialog.DialogProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger {...(triggerProps||{})}>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed top-0 left-0 inset-0 z-50 bg-black/60' />

        <Dialog.Content
          onEscapeKeyDown={(e) => {
            disableClose && e.stopPropagation()
            disableClose && e.preventDefault()
          }}
          onInteractOutside={(e) => {
            console.info('e:', e)
            disableOutClose && e.stopPropagation()
            disableOutClose && e.preventDefault()
          }}
          style={style}
          className={cn(
            'fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#333333] rounded-2xl overflow-hidden shadow-2xl z-50',
            className,
          )}
        >
          {children}
          <Dialog.Close
            disabled={disableClose}
            className={cn('absolute right-4 top-4 cursor-point text-xl', closeClassName)}
          >
            <IoIosCloseCircleOutline />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
