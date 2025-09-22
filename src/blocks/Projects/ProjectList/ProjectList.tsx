"use client"
import Link from "next/link";
import { projectData } from "@/data/projectData";
import { CardGallery, CardView } from "@/components/Cards";
import { CardContext } from "@/components/Cards/cardContext";
import { MarkdownDocument } from "@/components/Markdown";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectViewProps {
    project: typeof projectData[1]
}

const SmallProjectView = ({project}: ProjectViewProps) => {
    return (
        <CardView
            key={project.id}
            title={project.title}
            description={project.description}
            actionArea={
                <>
                    {!!project.demoLink &&
                        <Link href={project.demoLink} target="_blank">
                            <i className="fa-solid fa-link text-[20px]"/>
                        </Link>
                    }
                    {!!project.gitHubLink &&
                        <Link href={project.gitHubLink} target="_blank">
                            <i className="fa-brands fa-github text-[20px]"/>
                        </Link>
                    }
                </>
            }
        />
    )
}

const LargeProjectView = ({project}: ProjectViewProps) => {
    const baseUrl = `https://raw.githubusercontent.com/${project.githubProject}/${project.githubBranch}/`
    const readmeUrl = `${baseUrl}/README.md`

    return (
        <CardView
            key={project.id}
            title={project.title}
            description={project.description}
            className="min-w-[60vw] max-w-[60vw] min-h-[50vh] max-h-[80vh]"
            actionArea={
                <>
                    {!!project.demoLink &&
                        <Link href={project.demoLink} target="_blank">
                            <i className="fa-solid fa-link text-[20px]"/>
                        </Link>
                    }
                    {!!project.gitHubLink &&
                        <Link href={project.gitHubLink} target="_blank">
                            <i className="fa-brands fa-github text-[20px]"/>
                        </Link>
                    }
                </>
            }
        >
            <ScrollArea>
                <div className="max-w-[calc(60vw-38px)]">
                    <MarkdownDocument url={readmeUrl} baseUrl={baseUrl}/>
                </div>
            </ScrollArea>
        </CardView>
    )
}

const cardContexts: CardContext[] = []
projectData.forEach(project => {
    cardContexts.push({
        id: project.id,
        smallView: SmallProjectView({project}),
        largeView: LargeProjectView({project}),
    })
})

export const ProjectList = () => {
    return (
        <section className="p-2">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="py-6">
                <CardGallery cardContexts={cardContexts}/>
            </div>
        </section>
    )
}