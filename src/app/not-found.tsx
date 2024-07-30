import { H1, Para } from '@/components/custom/typography'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="mb-12 space-y-6">
            <div className="space-y-2">
                <H1 className="text-center">404 Error</H1>
                <Para className="text-center text-lg font-medium">
                    the page you&apos;re looking for isn&apos;t here.
                </Para>
            </div>
            <Para className="text-center">
                It&apos;s possible that the page was moved or never existed.
                Please try one of the following:
            </Para>
            <Para className="text-center">
                Homepage:{' '}
                <Link
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/75"
                    href="/"
                >
                    Return to our homepage.
                </Link>
            </Para>
            <Para className="text-center">
                Help:{' '}
                <Link
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/75"
                    href="/contact"
                >
                    Contact me
                </Link>{' '}
                if you need further assistance.
            </Para>
        </div>
    )
}
