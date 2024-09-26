import Footer from '@/components/custom/footer'
import { H1, H3 } from '@/components/custom/typography'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import NotFound from '../not-found'
import { imagesUrlGen } from '@/lib/imagesUrlGen'
import { TextFormat } from '@/components/custom/textFormat'

type ProjectCardProps = {
    image: string
    children: ReactNode
}

const options = { next: { revalidate: 360 } }

const PROJECTS_QUERY = defineQuery(
    `*[_type == "Projects-Page"]{title,bottomLink,projects[]->{_id,title,slug,tags,github,demo,body,image}}`
)

export default async function Projects() {
    const projectsData = await client.fetch(PROJECTS_QUERY, {}, options)

    if (!projectsData) {
        NotFound()
    }

    const { title, projects, bottomLink } = projectsData[0]

    return (
        <>
            <H1>{title}</H1>
            <section className="space-y-8">
                {projects &&
                    projects.map((project) => {
                        const { _id, title, body, tags, demo, github, image } =
                            project

                        const imgUrl =
                            image?.asset &&
                            imagesUrlGen(image?.asset?._ref, 1024, 500)

                        return (
                            <ProjectCard
                                key={_id}
                                image={
                                    imgUrl ||
                                    'https://via.placeholder.com/1024x500'
                                }
                            >
                                <div className="space-y-1">
                                    <H3>{title}</H3>
                                    <ProjectTags tags={tags || []} />
                                    {body && <TextFormat value={body} />}
                                </div>

                                <div className="flex items-center gap-6">
                                    <Button asChild variant="blockSlideTop">
                                        <a target="_blank" href={demo || ''}>
                                            Demo
                                        </a>
                                    </Button>
                                    <Button asChild variant="blockSlideBot">
                                        <a target="_blank" href={github || ''}>
                                            Github
                                        </a>
                                    </Button>
                                </div>
                            </ProjectCard>
                        )
                    })}
            </section>
            <Footer bottomLink={bottomLink || ''} path="/contact" />
        </>
    )
}

const ProjectCard: FC<ProjectCardProps> = ({ image, children }) => {
    return (
        <article className="relative min-w-full rounded-md">
            <div className="relative mx-auto before:absolute before:left-0 before:right-0 before:z-20 before:h-full before:rounded-md before:bg-gradient-to-b before:from-transparent before:to-transparent before:content-[''] lg:w-full lg:before:to-zinc-950">
                <Image
                    src={image}
                    alt="project main img"
                    width={1024}
                    height={500}
                    className="z-10 h-auto w-auto rounded-md"
                />
            </div>
            <div className="static bottom-0 left-0 right-0 z-50 flex flex-col gap-4 self-end pt-4 lg:absolute lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-4">
                {children}
            </div>
        </article>
    )
}

const ProjectTags: FC<{ tags: string[] }> = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
            ))}
        </div>
    )
}
