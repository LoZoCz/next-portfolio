import { cn } from '@/lib/utils'
import { FC } from 'react'

interface MainProps {
    children: React.ReactNode
    className?: string
}

const MainCont: FC<MainProps> = ({ children, className }) => {
    return (
        <main
            className={cn(
                'mx-auto flex max-w-screen-lg flex-col justify-center gap-8 text-zinc-50 md:pb-24',
                className
            )}
        >
            {children}
        </main>
    )
}

export default MainCont
