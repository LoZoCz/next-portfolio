import Footer from '@/components/pages/footer'
import MainCont from '@/components/pages/MainCont'
import { H1, H2, TextFormat } from '@/components/pages/typography'
import fetchData from '@/sanity/sanity.fetch'
import { AboutPageTypes } from '@/sanity/sanity.types'

export default async function About() {
    const aboutData: AboutPageTypes = await fetchData('about', true)

    return (
        <MainCont>
            <H1>{aboutData.title}</H1>
            {aboutData.aboutSections.map((section) => (
                <section key={section._key} className="space-y-4">
                    <H2>{section.subtitle}</H2>
                    <TextFormat value={section.content} className="space-y-2" />
                </section>
            ))}
            <Footer bottomLink={aboutData.bottomLink} path="/projects" />
        </MainCont>
    )
}
