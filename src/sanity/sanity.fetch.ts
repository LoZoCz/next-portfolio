'use server'

import { cache } from 'react'
import { client } from './sanity.client'

export const fetchHome = cache(async () => {
    const query = `*[_type == "home"]{title, bottomLink, content}`
    const data = await client.fetch(query)

    return data[0]
})

export const fetchAbout = cache(async () => {
    const query = `*[_type == "about"]{title, bottomLink, aboutSections}`
    const data = await client.fetch(query)

    return data[0]
})

export const fetchProjects = cache(async () => {
    const query = `*[_type == "Projects-Page"]{title, bottomLink, "projects": projects[]->{_id,title,slug,tags,github,demo,content,"imageUrl": image.asset->url}}`
    const data = await client.fetch(query)

    return data[0]
})

export const fetchContact = cache(async () => {
    const query = `*[_type == "contact"]{title, content, bottomLink}`
    const data = await client.fetch(query)

    return data[0]
})

export const fetchSocials = cache(async () => {
    const query = `*[_type == "socials"]{_id,title,link,icon{"url":asset->url}}`
    const data = await client.fetch(query)

    return data
})
