'use client'

import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { FC } from 'react'
import { Button } from '../ui/button'
import Loading from './loading'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { toast } from 'react-toastify'
import ErrorMess from '@/components/custom/errorMess'

const schema = z.object({
    name: z.string().min(2, 'The first name field is required'),
    mail: z
        .string()
        .email('Incorrect email')
        .min(1, 'The email field is required'),
    content: z.string().min(1, 'Content field is required').max(500),
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
                toast.success('Message has been sent!')
                reset()
            })
            .catch((err) => {
                toast.error('Message has not been sent.')
                throw new Error(err)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="Author..."
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
                    placeholder="Content..."
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
                {isSubmitting ? <Loading /> : 'Send'}
            </Button>
        </form>
    )
}

export default ContactForm
