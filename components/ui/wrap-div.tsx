import { HTMLAttributes } from 'react'

export function WrapDiv({
  children,
  wrap,
  ...props
}: { children: React.ReactNode; wrap?: boolean } & HTMLAttributes<HTMLDivElement>) {
  if (!wrap) return children
  return <div {...props}>{children}</div>
}
