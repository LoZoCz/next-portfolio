import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: '1zr8xbn3',
    dataset: 'production',
    apiVersion: '2024-07-08',
    useCdn: false, // Set to `true` for production environments
})
