import Footer from '@/components/pages/footer'
import { H1, TextFormat } from '@/components/pages/typography'
import { ContactPageTypes } from '@/sanity/sanity.types'
import fetchData from '@/sanity/sanity.fetch'
import ContactForm from '@/components/pages/ContactForm'
import MainContToast from '@/components/pages/MainContToast'

export default async function Contact() {
    const contactData: ContactPageTypes = await fetchData('contact', true)

    return (
        <>
            <H1 className="w-full">{contactData.title}</H1>
            <TextFormat value={contactData.content} />
            <ContactForm />
            <Footer bottomLink={contactData.bottomLink} path="/" />
            <MainContToast />
        </>
    )
}
