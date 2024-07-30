import { H1, TextFormat } from '@/components/custom/typography'
import { HomePageTypes } from '@/sanity/sanity.types'
import Footer from '@/components/custom/footer'
import { fetchHome } from '@/sanity/sanity.fetch'

export default async function Home() {
    const homeData: HomePageTypes = await fetchHome()

    return (
        <>
            <H1>{homeData.title}</H1>
            <TextFormat value={homeData.content} className="space-y-4" />
            <Footer
                bottomLink={homeData.bottomLink}
                path="/about"
                classNames="mb-16"
            />
        </>
    )
}
