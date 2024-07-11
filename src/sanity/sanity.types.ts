// Home page ts types
export interface HomePageTypes {
    title: string
    bottomLink: string
    content: Content[]
}

// About page ts types
export interface AboutPageTypes {
    title: string
    bottomLink: string
    aboutSections: AboutSection[]
}

// Social links ts types
export interface SocialLinkTypes {
    _id: string
    title: string
    link: string
    icon: Icon
}

// Projects page ts types
export interface ProjectsPageTypes {
    title: string
    bottomLink: string
    projects: Project[]
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Additional ts types
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

export interface Icon {
    url: string
}

export interface AboutSection {
    subtitle: string
    _type: string
    _key: string
    content: Content[]
}

export interface Project {
    title: string
    slug: Slug
    github: string
    demo: string
    content: Content[]
    imageUrl: string
    _id: string
}

export interface Slug {
    current: string
    _type: string
}
