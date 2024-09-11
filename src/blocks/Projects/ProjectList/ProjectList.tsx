"use client"
import styled from "styled-components";
import { projectData } from "@/data/projectData";
import { CardContext } from "@/components/Card/cardContext";
import { CardGallery } from "@/components/Card";
import { MarkdownDocument } from "@/components/Markdown";

const ProjectsContainer = styled.div`
    padding: 2rem 0;
`

const ProjectsHeader = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

const ProjectsGrid = styled.div`
    display: flex;
`

const ProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.9);
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.4);
    min-width: 325px;

    &:hover {
        background: rgba(0, 0, 0, 0.9);
    }

    &.small {
        max-width: 325px;
    }

    &.large {
        width: 60vw;
        height: 80vh;
        background: rgba(0, 0, 0, 0.9);
    }
`

const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
`

const ProjectFolderIcon = styled.i`
    font-size: 35px;
    color: #0186de;
`

const ProjectIcons = styled.div`
    display: flex;
    gap: 0 5px;
`

const ProjectLink = styled.a`
    margin-right: 5px;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
        color: #0186de;
    }
`

const ProjectIcon = styled.i`
`

const ProjectTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`

const ProjectDescription = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    color: #b3b3b3;
    overflow-y: auto;
`

interface ProjectViewProps {
    project: typeof projectData[1]
}

const SmallProjectView = ({project}: ProjectViewProps) => {
    return (
        <ProjectsCard key={project.id} className="small">
            <ProjectHeader>
                <ProjectFolderIcon className="fa-regular fa-folder-open"></ProjectFolderIcon>
                <ProjectIcons>
                    {!!project.demoLink &&
                        <ProjectLink href={project.demoLink} target="_blank">
                            <ProjectIcon className="fa-solid fa-link"></ProjectIcon>
                        </ProjectLink>
                    }
                    {!!project.gitHubLink &&
                        <ProjectLink href={project.gitHubLink} target="_blank">
                            <ProjectIcon className="fa-brands fa-github"></ProjectIcon>
                        </ProjectLink>
                    }
                </ProjectIcons>
            </ProjectHeader>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectsCard>
    )
}

const LargeProjectView = ({project}: ProjectViewProps) => {
    const baseUrl = `https://raw.githubusercontent.com/${project.githubProject}/${project.githubBranch}/`
    const readmeUrl = `${baseUrl}/README.md`

    return (
        <ProjectsCard key={project.id} className="large">
            <ProjectHeader>
                <ProjectFolderIcon className="fa-regular fa-folder-open"></ProjectFolderIcon>
                <ProjectIcons>
                    {!!project.demoLink &&
                        <ProjectLink href={project.demoLink} target="_blank">
                            <ProjectIcon className="fa-solid fa-link"></ProjectIcon>
                        </ProjectLink>
                    }
                    {!!project.gitHubLink &&
                        <ProjectLink href={project.gitHubLink} target="_blank">
                            <ProjectIcon className="fa-brands fa-github"></ProjectIcon>
                        </ProjectLink>
                    }
                </ProjectIcons>
            </ProjectHeader>
            <ProjectDescription>
                <MarkdownDocument url={readmeUrl} baseUrl={baseUrl}/>
            </ProjectDescription>
        </ProjectsCard>
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
        <ProjectsContainer>
            <ProjectsHeader>Projects</ProjectsHeader>
            <ProjectsGrid>
                <CardGallery cardContexts={cardContexts}/>
            </ProjectsGrid>
        </ProjectsContainer>
    )
}