import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_SANITY_DATASET,
    apiVersion: process.env.NEXT_SANITY_API_VERSION,
    useCdn: false, // Set to `true` for production environments
})
