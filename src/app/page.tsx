import ContinueLink from '@/components/pages/ContinueLink'
import { H1, TextFormat } from '@/components/pages/typography'
import { HomePageTypes } from '@/sanity/sanity.types'
import { fetchHomePage } from '@/sanity/sanity.client'
import MainCont from '@/components/pages/MainCont'
import SocialLinks from '@/components/pages/SocialLinks'

export default async function Home() {
    const homeData: HomePageTypes = await fetchHomePage()

    return (
        <MainCont>
            <H1 className="">{homeData.title}</H1>
            <TextFormat content={homeData.content} className="space-y-4" />
            <div className="space-y-12">
                <ContinueLink path="/about" className="w-fit">
                    {homeData.bottomLink}
                </ContinueLink>
                <SocialLinks />
            </div>
        </MainCont>
    )
}
