'use client'

import Image from 'next/image'
import { FC } from 'react'
import mainLogo from '@/../public/thinIcon.svg'
import { FileCode, House, Send, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import NavLink from './navLink'

const Header: FC = () => {
    const paths = [
        {
            title: 'Home',
            path: '/',
            icon: <House className="block size-8 md:hidden" />,
        },
        {
            title: 'About me',
            path: '/about',
            icon: <User className="block size-8 md:hidden" />,
        },
        {
            title: 'Projects',
            path: '/projects',
            icon: <FileCode className="block size-8 md:hidden" />,
        },
        {
            title: 'Contact',
            path: '/contact',
            icon: <Send className="block size-8 md:hidden" />,
        },
    ]

    const pathName = usePathname()
    const isActive = (path: string) => path === pathName

    return (
        <motion.header
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 pt-6 md:pt-12"
        >
            <Image
                src={mainLogo}
                alt="main logo header image"
                width={60}
                height={60}
                className="size-10 md:size-16"
                priority
            />
            <nav>
                <ul className="flex gap-4 md:gap-8">
                    {paths.map((path, index) => (
                        <li key={index} className="flex items-center">
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
        </motion.header>
    )
}

export default Header
