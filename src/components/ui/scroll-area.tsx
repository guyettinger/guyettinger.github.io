import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from './cn'

export function ScrollArea({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ScrollAreaPrimitive.Root className={cn('overflow-hidden', className)}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-muted" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}
