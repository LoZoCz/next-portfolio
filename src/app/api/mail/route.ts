import Mail from '@/emails/mail'
import { NextResponse } from 'next/server'
import { ReactElement } from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { name, mail, content } = await req.json()

    return resend.emails
        .send({
            from: 'onboarding@resend.dev',
            to: ['m.czernik12@gmail.com'],
            subject: `Portfolio - wysłał do ciebie wiadomość: ${name}`,
            react: Mail({
                name,
                mail,
                content,
            }) as ReactElement,
        })
        .then(() => {
            return NextResponse.json(
                { status: 'ok', message: 'Email has been send.' },
                { status: 200 }
            )
        })
        .catch((error) => {
            console.error('Error sending email:', error)
            return NextResponse.json(
                { status: 'error', message: 'Failed to send email.' },
                { status: 500 }
            )
        })
}
