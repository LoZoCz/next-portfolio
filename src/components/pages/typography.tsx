import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'
import PortableText from 'react-portable-text'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: string | ReactNode
    classes?: string
}

interface ParaProps extends HTMLAttributes<HTMLParagraphElement> {
    children: string | ReactNode
    classes?: string
}

interface TextFormatProps {
    content: object[]
    classes?: string
}

interface TextFormatSerailizersTypes {
    children: string | ReactNode
}

const textSerializers = {
    h1: ({ children }: TextFormatSerailizersTypes) => <H1>{children}</H1>,
    h2: ({ children }: TextFormatSerailizersTypes) => <H2>{children}</H2>,
    p: ({ children }: TextFormatSerailizersTypes) => <Para>{children}</Para>,
}

export const H1: FC<HeadingProps> = ({ children, classes, ...props }) => {
    return (
        <h1
            {...props}
            className={cn(
                'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
                classes
            )}
        >
            {children}
        </h1>
    )
}

export const H2: FC<HeadingProps> = ({ children, classes, ...props }) => {
    return (
        <h1
            {...props}
            className={cn(
                'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
                classes
            )}
        >
            {children}
        </h1>
    )
}

export const Para: FC<ParaProps> = ({ children, classes, ...props }) => {
    return (
        <p
            {...props}
            className={cn('leading-7 [&:not(:first-child)]:mt-6', classes)}
        >
            {children}
        </p>
    )
}

export const TextFormat: FC<TextFormatProps> = ({ content, classes }) => {
    return (
        <PortableText
            content={content}
            serializers={textSerializers}
            className={classes}
        />
    )
}
