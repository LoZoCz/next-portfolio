import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { TypedObject } from '@portabletext/types'
import { link } from 'fs'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: string | ReactNode
    className?: string
}

interface ParaProps extends HTMLAttributes<HTMLParagraphElement> {
    children: string | ReactNode
    className?: string
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: string | ReactNode
    className?: string
}

interface TextFormatProps {
    value: TypedObject
    className?: string
}

const textSerializers: PortableTextComponents = {
    block: {
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        normal: (props) => <Para>{props.children}</Para>,
    },
    marks: {
        link: ({ children, value }) => (
            <Anchor href={value.href}>{children}</Anchor>
        ),
    },
}

export const H1: FC<HeadingProps> = ({ children, className, ...props }) => {
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

export const H2: FC<HeadingProps> = ({ children, className, ...props }) => {
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
export const H3: FC<HeadingProps> = ({ children, className, ...props }) => {
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

export const Para: FC<ParaProps> = ({ children, className, ...props }) => {
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

export const Anchor: FC<AnchorProps> = ({ children, className, ...props }) => {
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

export const TextFormat: FC<TextFormatProps> = ({ value, className }) => {
    return (
        <div className={cn('space-y-6', className)}>
            <PortableText value={value} components={textSerializers} />
        </div>
    )
}
