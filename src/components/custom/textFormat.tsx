import { TextFormatProps } from '@/lib/typographyTypes'
import { PortableText, PortableTextComponents } from 'next-sanity'
import {
    Anchor,
    BulletList,
    H1,
    H2,
    H3,
    Italic,
    Para,
    Strong,
} from './typography'
import { SanityImage } from './sanityImage'
import { cn } from '@/lib/utils'

const textSerializers: PortableTextComponents = {
    block: {
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        normal: ({ children }) => <Para>{children}</Para>,
    },
    marks: {
        link: ({ children, value }) => (
            <Anchor href={value.href}>{children}</Anchor>
        ),
        strong: ({ children }) => <Strong>{children}</Strong>,
        italic: ({ children }) => <Italic>{children}</Italic>,
    },
    list: {
        bullet: ({ children }) => <BulletList>{children}</BulletList>,
    },
    types: {
        image: ({ value }) => <SanityImage image={value} />,
    },
}

export function TextFormat({ value, className }: TextFormatProps) {
    return (
        <div className={cn('space-y-6', className)}>
            <PortableText value={value} components={textSerializers} />
        </div>
    )
}
