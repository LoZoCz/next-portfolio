import { FC } from 'react'
import { cn } from '@/lib/utils'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { SocialLinkTypes } from '@/sanity/sanity.types'
import DLFetch from '@/sanity/sanity.fetch'
import Image from 'next/image'

interface LinkProps {
    children: string
    path: string
    className?: string
}

interface FooterProps {
    bottomLink: string
    path: string
    classNames?: string
}

const Footer: FC<FooterProps> = ({ bottomLink, path, classNames }) => {
    return (
        <div className={cn('space-y-12', classNames)}>
            <ContinueLink path={path}>{bottomLink}</ContinueLink>
            <SocialLinks />
        </div>
    )
}

export default Footer

const ContinueLink: FC<LinkProps> = ({ children, path, className }) => {
    return (
        <Link
            className={cn(
                'group relative flex w-fit items-center gap-2 font-normal after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:origin-top-right after:scale-x-0 after:rounded-full after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[""] hover:after:origin-top-left hover:after:scale-x-100',
                className
            )}
            href={path}
        >
            {children}
            <ChevronsRight className="size-6 transition-all duration-200 group-hover:ml-2" />
        </Link>
    )
}

const SocialLinks: FC = async () => {
    const socials: SocialLinkTypes[] = await DLFetch.fetchSocialLinks()

    return (
        <div className="flex items-center gap-4">
            {socials.map((social, id) => (
                <Button
                    key={social._id}
                    variant={id % 2 === 0 ? 'topBotBar' : 'lefRigBar'}
                    size="icon"
                    asChild
                >
                    <a title={social.title} href={social.link} target="_blank">
                        <Image
                            src={social.icon.url}
                            alt={social.title + 'icon'}
                            width={25}
                            height={25}
                        />
                    </a>
                </Button>
            ))}
        </div>
    )
}
