import Footer from '@/components/custom/footer'
import { H1, H2, TextFormat } from '@/components/custom/typography'
import { fetchAbout } from '@/sanity/sanity.fetch'
import { AboutPageTypes } from '@/sanity/sanity.types'

export default async function About() {
    const aboutData: AboutPageTypes = await fetchAbout()

    return (
        <>
            <H1>{aboutData.title}</H1>
            {aboutData.aboutSections.map((section) => (
                <section key={section._key} className="space-y-4">
                    <H2>{section.subtitle}</H2>
                    <TextFormat value={section.content} className="space-y-2" />
                </section>
            ))}
            <Footer bottomLink={aboutData.bottomLink} path="/projects" />
        </>
    )
}
