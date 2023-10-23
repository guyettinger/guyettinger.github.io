"use client"
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Button, Menu, MenuItem } from "gle-components";
import { projectData } from "@/data/projectData";
import { resumeData } from "@/data/resumeData";
import { learningData } from "@/data/learningData";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.4);

  button {
    margin-left: 1.5rem;
  }
`

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const NavImage = styled(Image)`
  margin: -14px 0
`

const NavSpacer = styled.div`
  flex: auto;
`

const NavLinkIcon = styled.a`
  flex: auto;
  max-width: 24px;
  margin-right: 14px;
  color: #dadada;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;

  :hover {
    color: #FFFFFF;
  }
`

const NavMenuIcon = styled.i`
  margin-right: 10px;
`

export const Navbar = () => {
    return (
        <NavContainer>
            <NavLogo>
                <NavImage src='/images/avatar.png' className="profile-img" width={48} height={48} alt="Guy's Avatar"/>
                <Link href="/">
                    Guy Ettinger
                </Link>
                <Button primary={true} variant={"medium"}>
                    <Link href="/"><NavMenuIcon className="fa-solid fa-house"/>Home</Link>
                </Button>
                <Menu name="Resume" primary={true} variant={"medium"}
                      buttonContent={<span><NavMenuIcon className="fa-solid fa-file-lines"/>Resume</span>}>
                    {resumeData && resumeData.map((resumeItem) => {
                        return (
                            <MenuItem key={resumeItem.id} name={resumeItem.company}>
                                <Link href={resumeItem.link}>{resumeItem.company}</Link>
                            </MenuItem>
                        )
                    })
                    }
                </Menu>
                <Menu name="Projects" primary={true} variant={"medium"}
                      buttonContent={<span><NavMenuIcon className="fa-regular fa-folder-open"/>Projects</span>}>
                    {projectData && projectData.map((project) => {
                        return (
                            <Menu key={project.id} name={project.title} buttonContent={<span><NavMenuIcon
                                className="fa-regular fa-folder-open"/>{project.title}</span>}>
                                {project.gitHubLink &&
                                    <MenuItem key={`${project.id}-github`} name={`${project.title} Github`}>
                                        <Link href={project.gitHubLink} target={"_blank"}><NavMenuIcon className="fa-brands fa-github"/>{project.title} Github</Link>
                                    </MenuItem>
                                }
                                {project.demoLink &&
                                    <MenuItem key={`${project.id}-demo`} name={`${project.title} Demo`}>
                                        <Link href={project.demoLink} target={"_blank"}><NavMenuIcon className="fa-solid fa-link"/>{project.title} Demo</Link>
                                    </MenuItem>
                                }
                            </Menu>
                        )
                    })
                    }
                </Menu>
                <Menu name="Learning" primary={true} variant={"medium"}
                      buttonContent={<span><NavMenuIcon className="fa-solid fa-graduation-cap"/>Learning</span>}>
                    {learningData && learningData.map((learning) => {
                        return (
                            <MenuItem key={learning.id} name={learning.title}>
                                <Link href={learning.link}>{learning.title}</Link>
                            </MenuItem>
                        )
                    })
                    }
                </Menu>
            </NavLogo>
            <NavSpacer></NavSpacer>
            <NavLinkIcon
                href="https://github.com/guyettinger"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </NavLinkIcon>
            <NavLinkIcon
                href="https://www.linkedin.com/in/guyettinger/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </NavLinkIcon>
        </NavContainer>
    )
}