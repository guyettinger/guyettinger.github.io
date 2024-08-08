"use client"
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Menu, MenuItem } from "gle-components";
import { projectData } from "@/data/projectData";
import { resumeData } from "@/data/resumeData";
import { learningData } from "@/data/learningData";

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background: rgba(0, 0, 0, 0.4);

    button {
        margin-left: 0.5rem;
    }
`

const NavLogo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`

const NavImage = styled(Image)`
    margin: 0 0
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
    font-size: 1rem;
`

const NameLink = styled(Link)`
    margin-right: 1rem;
`

const MenuLink = styled(Link)`
    margin-top: -9px;
    padding-top: 9px;
    margin-bottom: -11px;
    padding-bottom: 11px;
`

export const Navbar = () => {
    return (
        <NavContainer>
            <NavLogo>
                <NavImage src='/images/avatar.png' className="profile-img" width={48} height={48} alt="Guy's Avatar"/>
            </NavLogo>
            <NameLink href="/">
                Guy Ettinger
            </NameLink>
            <Menu name="Resume" primary={true} variant={"medium"}
                  buttonContent={<span><NavMenuIcon className="fa-solid fa-file-pdf"/>Resume</span>}>
                <MenuItem key="resume" name="resume">
                    <MenuLink href="/pdfs/Resume-Guy-Ettinger-08-02-2024.pdf">
                        Resume 2024
                    </MenuLink>
                </MenuItem>
                <MenuItem key="leadership" name="leadership">
                    <MenuLink href="/pdfs/Leadership-Guy-Ettinger-08-02-2024.pdf">
                        Leadership Summary 2024
                    </MenuLink>
                </MenuItem>
            </Menu>
            <Menu name="Portfolio" primary={true} variant={"medium"}
                  buttonContent={<span><NavMenuIcon className="fa-solid fa-image"/>Portfolio</span>}>
                {resumeData && resumeData.map((resumeItem) => {
                    return (
                        <MenuItem key={resumeItem.id} name={resumeItem.company}>
                            <MenuLink href={resumeItem.link}>{resumeItem.company}</MenuLink>
                        </MenuItem>
                    )
                })
                }
            </Menu>
            <Menu name="Projects" primary={true} variant={"medium"}
                  buttonContent={<span><NavMenuIcon className="fa-brands fa-github"/>Github Projects</span>}>
                {projectData && projectData.map((project) => {
                    return (
                        <Menu key={project.id} name={project.title} buttonContent={<span><NavMenuIcon
                            className="fa-regular fa-folder-open"/>{project.title}</span>}>
                            {project.gitHubLink &&
                                <MenuItem key={`${project.id}-github`} name={`${project.title} Github`}>
                                    <MenuLink href={project.gitHubLink} target={"_blank"}><NavMenuIcon
                                        className="fa-brands fa-github"/>{project.title} Github</MenuLink>
                                </MenuItem>
                            }
                            {project.demoLink &&
                                <MenuItem key={`${project.id}-demo`} name={`${project.title} Demo`}>
                                    <MenuLink href={project.demoLink} target={"_blank"}><NavMenuIcon
                                        className="fa-solid fa-link"/>{project.title} Demo</MenuLink>
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
                            <MenuLink href={learning.link}>{learning.title}</MenuLink>
                        </MenuItem>
                    )
                })
                }
            </Menu>
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