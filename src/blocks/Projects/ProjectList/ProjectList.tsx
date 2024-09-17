"use client"
import Link from "next/link";
import { Box, ScrollAreaAutosize, Stack, Text, Title } from "@mantine/core";
import { projectData } from "@/data/projectData";
import { CardGallery, CardView } from "@/components/Cards";
import { CardContext } from "@/components/Cards/cardContext";
import { MarkdownDocument } from "@/components/Markdown";

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
                            <Text className="fa-solid fa-link" size={"20px"}/>
                        </Link>
                    }
                    {!!project.gitHubLink &&
                        <Link href={project.gitHubLink} target="_blank">
                            <Text className="fa-brands fa-github" size={"20px"}/>
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
            miw={'60vw'}
            maw={'60vw'}
            mih={'80vh'}
            mah={'80vh'}
            bg={'rgba(0, 0, 0, 0.9)'}
            actionArea={
                <>
                    {!!project.demoLink &&
                        <Link href={project.demoLink} target="_blank">
                            <Text className="fa-solid fa-link" size={"20px"}/>
                        </Link>
                    }
                    {!!project.gitHubLink &&
                        <Link href={project.gitHubLink} target="_blank">
                            <Text className="fa-brands fa-github" size={"20px"}/>
                        </Link>
                    }
                </>
            }
        >
            <Title>README</Title>
            <ScrollAreaAutosize offsetScrollbars={true} scrollbarSize={4}>
                <Stack bg={'black'} p={20} maw={'calc(60vw - 44px)'}>
                    <MarkdownDocument url={readmeUrl} baseUrl={baseUrl}/>
                </Stack>
            </ScrollAreaAutosize>
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
        <Box p={2}>
            <Title>Projects</Title>
            <Stack py={'xl'}>
                <CardGallery cardContexts={cardContexts}/>
            </Stack>
        </Box>
    )
}