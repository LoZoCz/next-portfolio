import Footer from '@/components/pages/footer'
import MainCont from '@/components/pages/MainCont'
import { H1, H3, TextFormat } from '@/components/pages/typography'
import { Button } from '@/components/ui/button'
import DLFetch from '@/sanity/sanity.fetch'
import { Content, ProjectsPageTypes } from '@/sanity/sanity.types'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface ProjectCardProps {
    image: string
    children: ReactNode
}

interface LinksTypes {
    demoLink: string
    githubLink: string
}
interface ContentTypes {
    name: string
    desc: Content[]
}

export default async function Projects() {
    const projectData: ProjectsPageTypes = await DLFetch.fetchProjectsPage()

    return (
        <MainCont>
            <H1>{projectData.title}</H1>
            <section className="space-y-8">
                {projectData.projects.map((project) => (
                    <ProjectCard key={project._id} image={project.imageUrl}>
                        <ProjectContent
                            name={project.title}
                            desc={project.content}
                        />
                        <ProjectLinks
                            demoLink={project.demo}
                            githubLink={project.github}
                        />
                    </ProjectCard>
                ))}
            </section>
            <Footer bottomLink={projectData.bottomLink} path="/contact" />
        </MainCont>
    )
}

const ProjectCard: FC<ProjectCardProps> = ({ image, children }) => {
    return (
        <article className="relative min-w-full rounded-md">
            <div className="relative mx-auto before:absolute before:left-0 before:right-0 before:z-20 before:h-full before:rounded-md before:bg-gradient-to-b before:from-transparent before:to-transparent before:content-[''] lg:w-full lg:before:to-zinc-950">
                <Image
                    src={image}
                    alt="project main img"
                    width={1000}
                    height={500}
                    className="z-10 rounded-md"
                />
            </div>
            <div className="static bottom-0 left-0 right-0 z-50 flex flex-col gap-4 self-end pt-4 lg:absolute lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-4">
                {children}
            </div>
        </article>
    )
}

const ProjectLinks: FC<LinksTypes> = ({ demoLink, githubLink }) => {
    return (
        <div className="flex items-center gap-6">
            <Button asChild variant="blockSlideTop">
                <a target="_blank" href={demoLink}>
                    Visit project
                </a>
            </Button>
            <Button asChild variant="blockSlideBot">
                <a target="_blank" href={githubLink}>
                    Github
                </a>
            </Button>
        </div>
    )
}
const ProjectContent: FC<ContentTypes> = ({ name, desc }) => {
    return (
        <div>
            <H3>{name}</H3>
            <TextFormat content={desc} />
        </div>
    )
}
