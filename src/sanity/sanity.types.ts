export interface HomePageTypes {
    title: string
    bottomLink: string
    content: Content[]
}

export interface Content {
    _type: string
    style: string
    _key: string
    markDefs: any[]
    children: Child[]
}

export interface Child {
    _type: string
    marks: any[]
    text: string
    _key: string
}

export interface SocialLinkTypes {
    _id: string
    title: string
    link: string
    icon: Icon
}

export interface Icon {
    url: string
}
