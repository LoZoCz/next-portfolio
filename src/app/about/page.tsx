import Footer from '@/components/custom/footer'
import { H1, H2 } from '@/components/custom/typography'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'
import NotFound from '../not-found'
import { TextFormat } from '@/components/custom/textFormat'

const options = { next: { revalidate: 360 } }

const ABOUT_QUERY = defineQuery(
    `*[_type == "about"]{title,aboutSections,bottomLink}`
)

export default async function About() {
    const about = await client.fetch(ABOUT_QUERY, {}, options)

    if (!about) {
        NotFound()
    }

    const { title, aboutSections, bottomLink } = about[0]

    return (
        <>
            <H1>{title}</H1>
            {aboutSections &&
                aboutSections.map((section) => {
                    const { _key, subtitle, body } = section

                    return (
                        <section key={_key} className="space-y-4">
                            <H2>{subtitle}</H2>
                            {body && (
                                <TextFormat
                                    value={body}
                                    className="space-y-2"
                                />
                            )}
                        </section>
                    )
                })}
            <Footer bottomLink={bottomLink || ''} path="/projects" />
        </>
    )
}
