import Footer from '@/components/custom/footer'
import { H1 } from '@/components/custom/typography'
import ContactForm from '@/components/custom/contactForm'
import MainContToast from '@/components/custom/mainContToast'
import { defineQuery } from 'next-sanity'
import { client } from '@/sanity/client'
import NotFound from '../not-found'
import { TextFormat } from '@/components/custom/textFormat'

const options = { next: { revalidate: 360 } }

const CONTACT_QUERY = defineQuery(
    `*[_type == "contact"]{title,body,bottomLink}`
)

export default async function Contact() {
    const contact = await client.fetch(CONTACT_QUERY, {}, options)

    if (!contact) {
        NotFound()
    }

    const { title, body, bottomLink } = contact[0]

    return (
        <>
            <H1 className="w-full">{title}</H1>
            {body && <TextFormat className="space-y-3" value={body} />}
            <ContactForm />
            <Footer bottomLink={bottomLink || ''} path="/" />
            <MainContToast />
        </>
    )
}
