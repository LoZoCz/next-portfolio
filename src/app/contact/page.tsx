import Footer from '@/components/custom/footer'
import { H1, TextFormat } from '@/components/custom/typography'
import { ContactPageTypes } from '@/sanity/sanity.types'
import { fetchContact } from '@/sanity/sanity.fetch'
import ContactForm from '@/components/custom/contactForm'
import MainContToast from '@/components/custom/mainContToast'

export default async function Contact() {
    const contactData: ContactPageTypes = await fetchContact()

    return (
        <>
            <H1 className="w-full">{contactData.title}</H1>
            <TextFormat className="space-y-3" value={contactData.content} />
            <ContactForm />
            <Footer bottomLink={contactData.bottomLink} path="/" />
            <MainContToast />
        </>
    )
}
