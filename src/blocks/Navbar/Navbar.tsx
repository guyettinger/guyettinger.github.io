"use client"
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Menu, Button, Text, Group } from '@mantine/core';
import { projectData } from "@/data/projectData";
import { resumeData } from "@/data/resumeData";
import { learningData } from "@/data/learningData";

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
`

const NameLink = styled(Link)`
`

const MenuLink = styled(Link)`
`

export const Navbar = () => {
    return (
        <Group justify="space-between" bg={"rgba(0, 0, 0, 0.4)"} h={"auto"}>
            <Group gap={0}>
                <NavLogo>
                    <NavImage src='/images/avatar.png'
                              className="profile-img"
                              width={48}
                              height={48}
                              alt="Guy's Avatar"
                              priority={true}/>
                </NavLogo>

                <NameLink href="/public">
                    <Text c={"white"} fw={500} size={"lg"}>
                        Guy Ettinger
                    </Text>
                </NameLink>
            </Group>

            <Menu>
                <Menu.Target>
                    <Button variant="subtle">
                        <Text c={"white"}><NavMenuIcon className="fa-solid fa-scroll"/>Resume</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>
                        <MenuLink href="/pdfs/Resume-Guy-Ettinger-08-11-2024.pdf">
                            Resume 2024
                        </MenuLink>
                    </Menu.Item>
                    <Menu.Item>
                        <MenuLink href="/pdfs/Leadership-Guy-Ettinger-08-02-2024.pdf">
                            Leadership Summary 2024
                        </MenuLink>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            <Menu>
                <Menu.Target>
                    <Button variant="subtle">
                        <Text c={"white"}><NavMenuIcon className="fa-solid fa-photo-film"/>Portfolio</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    {resumeData && resumeData.map((resumeItem) => {
                        return (
                            <Menu.Item key={resumeItem.id} name={resumeItem.company}>
                                <MenuLink href={resumeItem.link}>{resumeItem.company}</MenuLink>
                            </Menu.Item>
                        )
                    })
                    }
                </Menu.Dropdown>
            </Menu>

            <Menu closeOnItemClick={false} position="bottom-start">
                <Menu.Target>
                    <Button variant="subtle">
                        <Text c={"white"}><NavMenuIcon className="fa-brands fa-github"/>Github Projects</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    {projectData && projectData.map((project) => {
                        return (
                            <Menu key={project.id} closeOnItemClick={false} position="right-start">
                                <Menu.Target>
                                    <Menu.Item>
                                        <Text><NavMenuIcon className="fa-regular fa-folder-open"/>{project.title}</Text>
                                    </Menu.Item>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {project.gitHubLink &&
                                        <Menu.Item key={`${project.id}-github`} name={`${project.title} Github`}>
                                            <MenuLink href={project.gitHubLink} target={"_blank"}><NavMenuIcon
                                                className="fa-brands fa-github"/>{project.title} Github</MenuLink>
                                        </Menu.Item>
                                    }
                                    {project.demoLink &&
                                        <Menu.Item key={`${project.id}-demo`} name={`${project.title} Demo`}>
                                            <MenuLink href={project.demoLink} target={"_blank"}><NavMenuIcon
                                                className="fa-solid fa-link"/>{project.title} Demo</MenuLink>
                                        </Menu.Item>
                                    }

                                </Menu.Dropdown>
                            </Menu>
                        )
                    })
                    }
                </Menu.Dropdown>
            </Menu>

            <Menu>
                <Menu.Target>
                    <Button variant="subtle">
                        <Text c={"white"}><NavMenuIcon className="fa-solid fa-graduation-cap"/>Learning</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    {learningData && learningData.map((learning) => {
                        return (
                            <Menu.Item key={learning.id} name={learning.title}>
                                <MenuLink href={learning.link}>{learning.title}</MenuLink>
                            </Menu.Item>
                        )
                    })
                    }
                </Menu.Dropdown>
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
        </Group>
    )
}