import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'

import { cn } from '@/lib/utils'
import Header from '@/components/pages/header'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'Czernik - Portfolio',
    description: 'Created by M. Czernik `LoZo` portfolio site',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Header />
                {children}
            </body>
        </html>
    )
}
