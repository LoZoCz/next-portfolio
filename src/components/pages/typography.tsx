import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'
import PortableText from 'react-portable-text'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: string | ReactNode
    className?: string
}

interface ParaProps extends HTMLAttributes<HTMLParagraphElement> {
    children: string | ReactNode
    className?: string
}

interface TextFormatProps {
    content: object[]
    className?: string
}

interface TextFormatSerailizersTypes {
    children: string | ReactNode
    mark?: { blank: string; href: string }
}

const textSerializers = {
    h1: ({ children }: TextFormatSerailizersTypes) => <H1>{children}</H1>,
    h2: ({ children }: TextFormatSerailizersTypes) => <H2>{children}</H2>,
    normal: ({ children }: TextFormatSerailizersTypes) => (
        <Para>{children}</Para>
    ),
    block: ({ children }: TextFormatSerailizersTypes) => (
        <Para>{children}</Para>
    ),
    link: ({ children, mark }: TextFormatSerailizersTypes) => (
        <a href={mark?.href} target="_blank">
            {children}
        </a>
    ),
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

export const TextFormat: FC<TextFormatProps> = ({ content, className }) => {
    return (
        <PortableText
            content={content}
            serializers={textSerializers}
            className={className}
        />
    )
}
