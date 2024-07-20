import Footer from '@/components/pages/footer'
import MainCont from '@/components/pages/MainCont'
import { H1, TextFormat } from '@/components/pages/typography'
import { ContactPageTypes } from '@/sanity/sanity.types'
import fetchData from '@/sanity/sanity.fetch'
import ContactForm from '@/components/pages/ContactForm'

export default async function Contact() {
    const contactData: ContactPageTypes = await fetchData('contact', true)

    return (
        <MainCont className="md:pb-4">
            <H1 className="w-full">{contactData.title}</H1>
            <TextFormat value={contactData.content} />
            <ContactForm />
            <Footer bottomLink={contactData.bottomLink} path="/" />
        </MainCont>
    )
}
