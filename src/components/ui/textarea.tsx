import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[80px] w-full rounded-md border border-zinc-400 bg-background/0 px-3 py-2 text-sm ring-offset-background transition-colors duration-200 placeholder:text-muted-foreground focus-visible:bg-background/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = 'Textarea'

export { Textarea }
