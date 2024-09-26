import { imagesUrlGen } from '@/lib/imagesUrlGen'
import { imgAsset } from '@/lib/typographyTypes'
import Image from 'next/image'

export const SanityImage = ({ image }: { image: imgAsset }) => {
    const imgSrc = imagesUrlGen(image.asset._ref)

    return (
        <Image
            src={imgSrc || 'https://via.placeholder.com/850x400'}
            alt="image"
            width={850}
            height={400}
        />
    )
}
