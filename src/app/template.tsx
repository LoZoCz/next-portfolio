'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface MainProps {
    children: React.ReactNode
    className?: string
}

export default function Template({ children, className }: MainProps) {
    return (
        <motion.main
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className={cn(
                'mx-auto flex max-w-screen-lg flex-col justify-center gap-6 text-zinc-50',
                className
            )}
        >
            {children}
        </motion.main>
    )
}
