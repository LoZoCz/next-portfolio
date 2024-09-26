import {
    AnchorProps,
    ParaProps,
    StrongProps,
    UListProps,
} from '@/lib/typographyTypes'
import { cn } from '@/lib/utils'
import { HeadingProps } from '@react-email/components'

export function H1({ children, className, ...props }: HeadingProps) {
    return (
        <h1
            {...props}
            className={cn(
                'scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl',
                className
            )}
        >
            {children}
        </h1>
    )
}

export function H2({ children, className, ...props }: HeadingProps) {
    return (
        <h2
            {...props}
            className={cn(
                'mb-2 w-fit scroll-m-20 border-b border-zinc-100 text-3xl font-semibold tracking-tight first:mt-0',
                className
            )}
        >
            {children}
        </h2>
    )
}

export function H3({ children, className, ...props }: HeadingProps) {
    return (
        <h3
            {...props}
            className={cn(
                'scroll-m-20 text-2xl font-semibold tracking-tight',
                className
            )}
        >
            {children}
        </h3>
    )
}

export function Para({ children, className, ...props }: ParaProps) {
    return (
        <p
            {...props}
            className={cn(
                'font-light leading-7 [&:not(:first-child)]:mt-4',
                className
            )}
        >
            {children}
        </p>
    )
}

export function Anchor({ children, className, ...props }: AnchorProps) {
    return (
        <a
            {...props}
            className={cn(
                'font-medium text-primary underline underline-offset-4 hover:text-primary/75',
                className
            )}
        >
            {children}
        </a>
    )
}

export function Strong({ children, className, ...props }: StrongProps) {
    return (
        <strong
            {...props}
            className={cn('font-semibold text-primary', className)}
        >
            {children}
        </strong>
    )
}

export function Italic({ children, className, ...props }: StrongProps) {
    return (
        <span {...props} className={cn('italic text-foreground', className)}>
            {children}
        </span>
    )
}

export function BulletList({ children, className, ...props }: UListProps) {
    return (
        <ul
            {...props}
            className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
        >
            {children}
        </ul>
    )
}
