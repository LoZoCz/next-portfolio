import ContinueLink from '@/components/pages/ContinueLink'
import { H1, TextFormat } from '@/components/pages/typography'
import { HomePageTypes } from '@/sanity/sanity.types'
import { fetchHomePage } from '@/sanity/sanity.client'

export default async function Home() {
    const homeData: HomePageTypes = await fetchHomePage()

    return (
        <main className="mx-auto flex max-w-screen-xl flex-col justify-center space-y-8 pb-24 text-zinc-50">
            <H1>{homeData.title}</H1>
            <TextFormat content={homeData.content} classes="space-y-4" />
            <ContinueLink path="/about" classes="w-fit">
                {homeData.bottomLink}
            </ContinueLink>
        </main>
    )
}
