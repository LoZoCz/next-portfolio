import { FC } from 'react'
import { buttonVariants } from '../ui/button'
import Image from 'next/image'
import { defineQuery } from 'next-sanity'
import { client } from '@/sanity/client'
import { imagesUrlGen } from '@/lib/imagesUrlGen'
import NotFound from '@/app/not-found'

const options = { next: { revalidate: 100 } }

const SOCIALS_QUERY = defineQuery(`*[_type == "socials"]{_id,title,link,icon}`)

const SocialLinks: FC = async () => {
    const socials = await client.fetch(SOCIALS_QUERY, {}, options)

    if (!socials) {
        NotFound()
    }

    return (
        <div className="flex items-center gap-4">
            {socials.map((social, id) => {
                const { _id, title, link, icon } = social

                const imgUrl =
                    icon?.asset && imagesUrlGen(icon?.asset?._ref, 25, 25)

                return (
                    <a
                        className={buttonVariants({
                            variant: id % 2 === 0 ? 'topBotBar' : 'lefRigBar',
                            size: 'icon',
                        })}
                        title={title || 'Home title'}
                        key={_id}
                        href={link || ''}
                        target="_blank"
                    >
                        <Image
                            src={imgUrl || 'https://via.placeholder.com/25x25'}
                            alt={title + 'icon'}
                            width={25}
                            height={25}
                        />
                    </a>
                )
            })}
        </div>
    )
}

export default SocialLinks
