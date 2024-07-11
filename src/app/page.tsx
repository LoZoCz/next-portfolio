import ContinueLink from '@/components/pages/ContinueLink'
import { H1, TextFormat } from '@/components/pages/typography'
import { HomePageTypes } from '@/sanity/sanity.types'
import DLFetch from '@/sanity/sanity.fetch'
import MainCont from '@/components/pages/MainCont'
import SocialLinks from '@/components/pages/SocialLinks'
import Footer from '@/components/pages/footer'

export default async function Home() {
    const homeData: HomePageTypes = await DLFetch.fetchHomePage()

    return (
        <MainCont>
            <H1 className="">{homeData.title}</H1>
            <TextFormat content={homeData.content} className="space-y-4" />
            <Footer bottomLink={homeData.bottomLink} path="/about" />
        </MainCont>
    )
}
