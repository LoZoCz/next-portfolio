import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                topBotBar:
                    "relative before:absolute before:-top-0.5 before:left-0 before:right-0 before:h-px before:origin-top-left before:scale-x-0 before:rounded-full before:bg-zinc-50 before:transition-transform before:duration-300 before:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:origin-top-right after:scale-x-0 after:rounded-full after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:before:origin-top-right hover:before:scale-x-100 hover:after:origin-top-left hover:after:scale-x-100",
                lefRigBar:
                    "relative before:absolute before:-left-0.5 before:bottom-0 before:top-0 before:w-px before:origin-bottom-left before:scale-y-0 before:rounded-full before:bg-zinc-50 before:transition-transform before:duration-300 before:content-[''] after:absolute after:-right-0.5 after:bottom-0 after:top-0 after:w-px after:origin-top-left after:scale-y-0 after:rounded-full after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:before:origin-top-left hover:before:scale-y-100 hover:after:origin-bottom-left hover:after:scale-y-100",
                blockSlideBot:
                    "relative font-medium transition-colors duration-300 after:absolute after:-left-1 after:-right-1 after:bottom-0 after:-z-10 after:h-full after:origin-top after:scale-y-0 after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:text-zinc-950 hover:after:origin-bottom hover:after:scale-y-100",
                blockSlideTop:
                    "relative font-medium transition-colors duration-300 after:absolute after:-left-1 after:-right-1 after:bottom-0 after:-z-10 after:h-full after:origin-bottom after:scale-y-0 after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:text-zinc-950 hover:after:origin-top hover:after:scale-y-100",
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
