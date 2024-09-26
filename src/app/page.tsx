import { H1 } from '@/components/custom/typography'
import Footer from '@/components/custom/footer'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'
import NotFound from './not-found'
import { TextFormat } from '@/components/custom/textFormat'

const options = { next: { revalidate: 360 } }

const HOME_QUERY = defineQuery(`*[_type == "home"]{title,body,bottomLink,}`)

export default async function Home() {
    const home = await client.fetch(HOME_QUERY, {}, options)

    if (!home) {
        NotFound()
    }

    const { title, body, bottomLink } = home[0]

    return (
        <>
            <H1>{title}</H1>
            {body && <TextFormat value={body} className="space-y-4" />}
            <Footer
                bottomLink={bottomLink || ''}
                path="/about"
                classNames="mb-16"
            />
        </>
    )
}
