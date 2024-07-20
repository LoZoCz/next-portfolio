'use client'

import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { FC } from 'react'
import { Button } from '../ui/button'
import Loading from './Loading'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { toast } from 'react-toastify'
import ErrorMess from '@/components/pages/ErrorMess'

const schema = z.object({
    name: z.string().min(2, 'Pole imię jest wymagane'),
    mail: z
        .string()
        .email('Nieprawidłowy email')
        .min(1, 'Pole email jest wymagane'),
    content: z.string().min(1, 'Pole treść jest wymagane').max(500),
})

type FormFieldsTypes = z.infer<typeof schema>

const ContactForm: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFieldsTypes>({ resolver: zodResolver(schema) })

    const onSubmit: SubmitHandler<FormFieldsTypes> = async (data) => {
        await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                toast.success('Wiadomość została wysłana!')
                reset()
            })
            .catch((err) => {
                toast.error('Wiadomość nie została wysłana.')
                throw new Error(err)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="Autor..."
                    className={cn('md:w-1/3', errors.name && 'border-red-500')}
                    {...register('name')}
                    autoComplete="on"
                />
                {errors.name && <ErrorMess message={errors.name.message} />}
            </div>
            <div className="relative">
                <Input
                    type="email"
                    placeholder="Mail..."
                    className={cn('md:w-1/2', errors.mail && 'border-red-500')}
                    {...register('mail')}
                    autoComplete="on"
                />
                {errors.mail && <ErrorMess message={errors.mail.message} />}
            </div>
            <div className="relative">
                <Textarea
                    placeholder="Wiadomość..."
                    rows={6}
                    className={cn(
                        'md:w-3/4',
                        errors.content && 'border-red-500'
                    )}
                    {...register('content')}
                />
                {errors.content && (
                    <ErrorMess message={errors.content.message} />
                )}
            </div>
            <Button
                disabled={isSubmitting}
                className="min-w-20"
                type="submit"
                variant="blockBtn"
            >
                {isSubmitting ? <Loading /> : 'Wyślij'}
            </Button>
        </form>
    )
}

export default ContactForm
