'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import mainLogo from '@/../public/thinIcon.svg'
import { FileCode, House, Send, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

const paths = [
    {
        title: 'Strona główna',
        path: '/',
        icon: <House className="block size-8 md:hidden" />,
    },
    {
        title: 'O mnie',
        path: '/about',
        icon: <User className="block size-8 md:hidden" />,
    },
    {
        title: 'Projekty',
        path: '/projects',
        icon: <FileCode className="block size-8 md:hidden" />,
    },
    {
        title: 'Kontakt',
        path: '/contact',
        icon: <Send className="block size-8 md:hidden" />,
    },
]

const Header: FC = () => {
    const pathName = usePathname()

    const isActive = (path: string) => path === pathName

    return (
        <header className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 pt-6 md:pt-12">
            <Image
                src={mainLogo}
                alt="main logo header image"
                width={60}
                height={60}
                className=""
            />
            <nav>
                <ul className="flex gap-4 md:gap-8">
                    {paths.map((path, index) => (
                        <li key={index}>
                            <NavLink
                                key={index}
                                path={path.path}
                                className={
                                    isActive(path.path)
                                        ? 'after:scale-x-100'
                                        : 'after:scale-x-0'
                                }
                            >
                                <span className="hidden md:block">
                                    {path.title}
                                </span>
                                {path.icon}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

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

export default Header
