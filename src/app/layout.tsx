import type { Metadata } from 'next'
import { Roboto as FontSans } from 'next/font/google'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { cn } from '@/lib/utils'
import Header from '@/components/pages/header'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '300', '400', '500', '700', '900'],
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
        <html lang="en" className="dark">
            <body
                style={{ gridTemplateRows: 'auto 1fr' }}
                className={cn(
                    'grid min-h-screen gap-8 font-sans antialiased md:gap-12',
                    fontSans.variable
                )}
            >
                <Header />
                {children}
            </body>
        </html>
    )
}
