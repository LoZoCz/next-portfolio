import Footer from '@/components/pages/footer'
import MainCont from '@/components/pages/MainCont'
import { H1, TextFormat } from '@/components/pages/typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import DLFetch from '@/sanity/sanity.fetch'
import { ContactPageTypes } from '@/sanity/sanity.types'

export default async function Contact() {
    const contactData: ContactPageTypes = await DLFetch.fetchContactPage()

    return (
        <MainCont className="md:pb-4">
            <H1 className="w-full">{contactData.title}</H1>
            <TextFormat content={contactData.content} />
            <form action="" className="space-y-6">
                <Input
                    type="text"
                    placeholder="Autor..."
                    className="md:w-1/3"
                    name="nameInp"
                />
                <Input
                    type="email"
                    placeholder="Mail..."
                    className="md:w-1/2"
                    name="mailInp"
                />
                <Textarea
                    placeholder="Wiadomość..."
                    rows={6}
                    className="md:w-3/4"
                    name="messInp"
                />
                <Button type="submit" variant="blockBtn">
                    Send
                </Button>
            </form>
            <Footer bottomLink={contactData.bottomLink} path="/" />
        </MainCont>
    )
}

// logika wysylania maila i moze ogarnij jak zrobic tego maila w tekscie z sanity (link do wyslania maila poprzez "a href="mailto:..."")
