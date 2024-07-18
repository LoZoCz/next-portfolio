import { client } from './sanity.client'

const fetchHomePage = async () => {
    if (!process.env.NEXT_HOME_DATA_QUERY) return

    const data = await client.fetch(process.env.NEXT_HOME_DATA_QUERY)

    return data[0]
}

const fetchSocialLinks = async () => {
    if (!process.env.NEXT_SOCIALS_DATA_QUERY) return

    const data = await client.fetch(process.env.NEXT_SOCIALS_DATA_QUERY)

    return data
}

const fetchAboutPage = async () => {
    if (!process.env.NEXT_ABOUT_DATA_QUERY) return

    const data = await client.fetch(process.env.NEXT_ABOUT_DATA_QUERY)

    return data[0]
}

const fetchProjectsPage = async () => {
    if (!process.env.NEXT_PROJECTS_DATA_QUERY) return

    const data = await client.fetch(process.env.NEXT_PROJECTS_DATA_QUERY)

    return data[0]
}

const fetchContactPage = async () => {
    if (!process.env.NEXT_CONTACT_DATA_QUERY) return

    const data = await client.fetch(process.env.NEXT_CONTACT_DATA_QUERY)

    return data[0]
}

const DLFetch = {
    fetchHomePage,
    fetchSocialLinks,
    fetchAboutPage,
    fetchProjectsPage,
    fetchContactPage,
}

export default DLFetch
