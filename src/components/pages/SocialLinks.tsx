import { FC } from 'react'
import { Button } from '../ui/button'
import { fetchSocialLinks } from '@/sanity/sanity.client'
import { SocialLinkTypes } from '@/sanity/sanity.types'
import Image from 'next/image'

const SocialLinks: FC = async () => {
    const socials: SocialLinkTypes[] = await fetchSocialLinks()

    return (
        <div className="flex items-center gap-4">
            {socials.map((social, id) => (
                <a key={social._id} href={social.link}>
                    <Button
                        variant={id % 2 === 0 ? 'topBotBar' : 'lefRigBar'}
                        size="icon"
                        title={social.title}
                    >
                        <Image
                            src={social.icon.url}
                            alt={social.title + 'icon'}
                            width={25}
                            height={25}
                        />
                    </Button>
                </a>
            ))}
        </div>
    )
}

export default SocialLinks
