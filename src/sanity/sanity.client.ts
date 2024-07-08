import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: '1zr8xbn3',
    dataset: 'production',
    apiVersion: '2024-07-08',
    useCdn: false, // Set to `true` for production environments
})

export const fetchHomePage = async () => {
    if (!process.env.NEXT_HOME_DATA_QUERY) return

    const data = await client.fetch(process.env.NEXT_HOME_DATA_QUERY)

    return data[0]
}
