import { H1, TextFormat } from '@/components/pages/typography'
import { HomePageTypes } from '@/sanity/sanity.types'
import Footer from '@/components/pages/footer'
import fetchData from '@/sanity/sanity.fetch'

export default async function Home() {
    const homeData: HomePageTypes = await fetchData('home', true)

    return (
        <>
            <H1>{homeData.title}</H1>
            <TextFormat value={homeData.content} className="space-y-4" />
            <Footer bottomLink={homeData.bottomLink} path="/about" />
        </>
    )
}
