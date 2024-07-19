import { H1, TextFormat } from '@/components/pages/typography'
import { HomePageTypes } from '@/sanity/sanity.types'
import DLFetch from '@/sanity/sanity.fetch'
import MainCont from '@/components/pages/MainCont'
import Footer from '@/components/pages/footer'

export default async function Home() {
    const homeData: HomePageTypes = await DLFetch.fetchHomePage()

    return (
        <MainCont>
            <H1>{homeData.title}</H1>
            <TextFormat value={homeData.content} className="space-y-4" />
            <Footer bottomLink={homeData.bottomLink} path="/about" />
        </MainCont>
    )
}
