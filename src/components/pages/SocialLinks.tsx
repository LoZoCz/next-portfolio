import { FC } from 'react'
import { buttonVariants } from '../ui/button'
import { SocialLinkTypes } from '@/sanity/sanity.types'
import Image from 'next/image'
import fetchData from '@/sanity/sanity.fetch'

const SocialLinks: FC = async () => {
    const socials: SocialLinkTypes[] = await fetchData('socials', false)

    return (
        <div className="flex items-center gap-4">
            {socials.map((social, id) => (
                <a
                    className={buttonVariants({
                        variant: id % 2 === 0 ? 'topBotBar' : 'lefRigBar',
                        size: 'icon',
                    })}
                    title={social.title}
                    key={social._id}
                    href={social.link}
                    target="_blank"
                >
                    <Image
                        src={social.icon.url}
                        alt={social.title + 'icon'}
                        width={25}
                        height={25}
                    />
                </a>
            ))}
        </div>
    )
}

export default SocialLinks
