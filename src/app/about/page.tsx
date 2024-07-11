import Footer from '@/components/pages/footer'
import MainCont from '@/components/pages/MainCont'
import { H1, H2, TextFormat } from '@/components/pages/typography'
import DLFetch from '@/sanity/sanity.fetch'
import { AboutPageTypes } from '@/sanity/sanity.types'

export default async function About() {
    const aboutData: AboutPageTypes = await DLFetch.fetchAboutPage()

    return (
        <MainCont>
            <H1>{aboutData.title}</H1>
            {aboutData.aboutSections.map((section) => (
                <section key={section._key}>
                    <H2>{section.subtitle}</H2>
                    <TextFormat content={section.content} />
                </section>
            ))}
            <Footer bottomLink={aboutData.bottomLink} path="/projects" />
        </MainCont>
    )
}
