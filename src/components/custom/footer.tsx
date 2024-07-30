import { FC } from 'react'
import { cn } from '@/lib/utils'
import ContinueLink from './continueLink'
import SocialLinks from './socialLinks'

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
        <div className={cn('space-y-8', classNames)}>
            <ContinueLink path={path}>{bottomLink}</ContinueLink>
            <SocialLinks />
        </div>
    )
}

export default Footer
