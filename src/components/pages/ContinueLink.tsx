import { cn } from '@/lib/utils'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface LinkProps {
    children: string
    path: string
    className?: string
}

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

export default ContinueLink
