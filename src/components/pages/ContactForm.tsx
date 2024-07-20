'use client'

import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { FC, useState } from 'react'
import { Button } from '../ui/button'

const ContactForm: FC = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        // await fetch('/api/mail', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Input
                type="text"
                placeholder="Autor..."
                className="md:w-1/3"
                name="name"
                required
            />
            <Input
                type="email"
                placeholder="Mail..."
                className="md:w-1/2"
                name="mail"
                required
            />
            <Textarea
                placeholder="Wiadomość..."
                rows={6}
                className="md:w-3/4"
                name="content"
                required
            />
            <Button
                disabled={loading}
                className="min-w-20"
                type="submit"
                variant="blockBtn"
            >
                {loading ? '...' : 'Wyślij'}
            </Button>
        </form>
    )
}

export default ContactForm
