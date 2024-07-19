import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Tailwind,
    Text,
} from '@react-email/components'
import { FC } from 'react'

interface EmailProps {
    name: string
    mail: string
    content: string
}

const Mail: FC<Readonly<EmailProps>> = ({ name, mail, content }) => {
    return (
        <Tailwind>
            <Html className="bg-zinc-900">
                <Head>
                    <title>Nowy mail od {name}</title>
                </Head>
                <Preview>{content}</Preview>
                <Body className="bg-zinc-900 font-sans text-zinc-50">
                    <Container>
                        <Text className="scroll-m-20 text-4xl font-semibold tracking-tight">
                            Napisał do ciebie: {name}
                        </Text>
                        <Text className="mb-12 scroll-m-20 text-2xl font-normal tracking-tight">
                            Mail autora: {mail}
                        </Text>
                        <Text className="text-lg font-light leading-7 [&:not(:first-child)]:mt-4">
                            {content}
                        </Text>
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    )
}

export default Mail
