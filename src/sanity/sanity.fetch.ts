import { cache } from 'react'
import { client } from './sanity.client'

const queries = {
    home: process.env.HOME_DATA_QUERY,
    socials: process.env.SOCIALS_DATA_QUERY,
    about: process.env.ABOUT_DATA_QUERY,
    projects: process.env.PROJECTS_DATA_QUERY,
    contact: process.env.CONTACT_DATA_QUERY,
}

type QueryKey = keyof typeof queries

const fetchData = cache(
    async (queryKey: QueryKey, isSingle: boolean = false) => {
        const query = queries[queryKey]
        if (!query) throw new Error(`Invalid query key ${queryKey}`)

        const data = await client.fetch(query)

        return isSingle ? data[0] : data
    }
)

export default fetchData
