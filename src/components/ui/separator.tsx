import * as React from 'react'
import { cn } from './cn'

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn('my-2 h-px w-full bg-border', className)}
      {...props}
    />
  )
}
