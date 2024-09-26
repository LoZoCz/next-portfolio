import { BlockContent } from '@/sanity/types'
import { TypedObject } from '@portabletext/types'
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    children: string | ReactNode
    className?: string
}

export type ParaProps = HTMLAttributes<HTMLParagraphElement> & {
    children: string | ReactNode
    className?: string
}

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: string | ReactNode
    className?: string
}

export type StrongProps = HTMLAttributes<HTMLElement> & {
    children: string | ReactNode
    className?: string
}

export type UListProps = HTMLAttributes<HTMLUListElement> & {
    children: string | ReactNode
    className?: string
}

export type imgAsset = {
    _type: string
    _key: string
    asset: {
        _ref: string
        _type: string
    }
}

export type TextFormatProps = {
    value: BlockContent
    className?: string
}
