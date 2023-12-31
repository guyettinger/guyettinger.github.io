"use client"
import styled from "styled-components";
import { projectData } from "@/data/projectData";

const ProjectsContainer = styled.div`
  padding: 2rem 0;
`

const ProjectsHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ProjectsCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);

  &:hover {
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

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #b3b3b3;
`

export const ProjectList = () => {
    return (
        <ProjectsContainer>
            <ProjectsHeader>Projects</ProjectsHeader>
            <ProjectsGrid>
                {projectData && projectData.map((project) => (
                    <ProjectsCard key={project.id}>
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
                ))
                }
            </ProjectsGrid>
        </ProjectsContainer>
    )
}