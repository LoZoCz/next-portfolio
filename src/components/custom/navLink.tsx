import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

interface LinkProps {
    children: React.ReactNode
    path: string
    className?: string
}

const NavLink: FC<LinkProps> = ({ children, path, className }) => {
    const defaultStyles =
        "relative text-xl text-zinc-50 rounded-md font-light after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:origin-top-right after:scale-x-0 after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:after:origin-top-left hover:after:scale-x-100 focus-visible:border-zinc-50 focus-visible:border-[0.5px] focus-visible:rounded-sm focus-visible:border-spacing-2 after:rounded-full"

    return (
        <Link href={path} className={cn(defaultStyles, className)}>
            {children}
        </Link>
    )
}

export default NavLink
