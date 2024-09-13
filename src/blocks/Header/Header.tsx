"use client"
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Menu, Button, Text, Group, Box } from '@mantine/core';
import { projectData } from "@/data/projectData";
import { resumeData } from "@/data/resumeData";
import { learningData } from "@/data/learningData";
import { HeaderProps } from "@/blocks/Header/Header.types";

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

export const Header = ({...groupProps}:HeaderProps) => {
    return (
        <Group justify="space-between" {...groupProps}>
            <Group gap={0}>
                <Box mx={"0.5rem"}>
                    <Image src='/images/avatar.png'
                           className="profile-img"
                           style={{margin: "0", verticalAlign: "middle"}}
                           width={48}
                           height={48}
                           alt="Guy's Avatar"
                           priority={true}/>
                </Box>

                <Link href="/">
                    <Text fw={500} size={"lg"}>
                        Guy Ettinger
                    </Text>
                </Link>
            </Group>

            <Menu>
                <Menu.Target>
                    <Button variant="filled">
                        <Text><NavMenuIcon className="fa-solid fa-scroll"/>Resume</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>
                        <Link href="/pdfs/Resume-Guy-Ettinger-08-11-2024.pdf">
                            Resume 2024
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/pdfs/Leadership-Guy-Ettinger-08-02-2024.pdf">
                            Leadership Summary 2024
                        </Link>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            <Menu>
                <Menu.Target>
                    <Button variant="filled">
                        <Text><NavMenuIcon className="fa-solid fa-photo-film"/>Portfolio</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    {resumeData && resumeData.map((resumeItem) => {
                        return (
                            <Menu.Item key={resumeItem.id} name={resumeItem.company}>
                                <Link href={resumeItem.link}>{resumeItem.company}</Link>
                            </Menu.Item>
                        )
                    })
                    }
                </Menu.Dropdown>
            </Menu>

            <Menu closeOnItemClick={false} position="bottom-start">
                <Menu.Target>
                    <Button variant="filled">
                        <Text><NavMenuIcon className="fa-brands fa-github"/>Github Projects</Text>
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
                                            <Link href={project.gitHubLink} target={"_blank"}><NavMenuIcon
                                                className="fa-brands fa-github"/>{project.title} Github</Link>
                                        </Menu.Item>
                                    }
                                    {project.demoLink &&
                                        <Menu.Item key={`${project.id}-demo`} name={`${project.title} Demo`}>
                                            <Link href={project.demoLink} target={"_blank"}><NavMenuIcon
                                                className="fa-solid fa-link"/>{project.title} Demo</Link>
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
                    <Button variant="filled">
                        <Text><NavMenuIcon className="fa-solid fa-graduation-cap"/>Learning</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    {learningData && learningData.map((learning) => {
                        return (
                            <Menu.Item key={learning.id} name={learning.title}>
                                <Link href={learning.link}>{learning.title}</Link>
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