import { client } from '@/sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const imagesUrlGen = (ref: string, width?: number, height?: number) => {
    if (width && height) {
        return imageUrlBuilder(client)
            .image(ref)
            .width(width)
            .height(height)
            .url()
    } else {
        return imageUrlBuilder(client).image(ref).url()
    }
}
