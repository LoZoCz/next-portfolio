import { cache } from 'react'
import { client } from './sanity.client'

const fetchHomePage = cache(async () => {
    if (!process.env.HOME_DATA_QUERY) return

    const data = await client.fetch(process.env.HOME_DATA_QUERY)

    return data[0]
})

const fetchSocialLinks = cache(async () => {
    if (!process.env.SOCIALS_DATA_QUERY) return

    const data = await client.fetch(process.env.SOCIALS_DATA_QUERY)

    return data
})

const fetchAboutPage = cache(async () => {
    if (!process.env.ABOUT_DATA_QUERY) return

    const data = await client.fetch(process.env.ABOUT_DATA_QUERY)

    return data[0]
})

const fetchProjectsPage = cache(async () => {
    if (!process.env.PROJECTS_DATA_QUERY) return

    const data = await client.fetch(process.env.PROJECTS_DATA_QUERY)

    return data[0]
})

const fetchContactPage = cache(async () => {
    if (!process.env.CONTACT_DATA_QUERY) return

    const data = await client.fetch(process.env.CONTACT_DATA_QUERY)

    return data[0]
})

const DLFetch = {
    fetchHomePage,
    fetchSocialLinks,
    fetchAboutPage,
    fetchProjectsPage,
    fetchContactPage,
}

export default DLFetch
