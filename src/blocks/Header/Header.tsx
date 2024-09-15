"use client"
import Link from "next/link";
import Image from "next/image";
import { Menu, Button, Text, Group, Box } from '@mantine/core';
import { projectData } from "@/data/projectData";
import { resumeData } from "@/data/resumeData";
import { learningData } from "@/data/learningData";
import { HeaderProps } from "@/blocks/Header/Header.types";

export const Header = ({...groupProps}: HeaderProps) => {
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
                    <Button variant="filled" leftSection={<Text className="fa-solid fa-scroll"/>}>
                        <Text>Resume</Text>
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
                    <Button variant="filled" leftSection={<Text className="fa-solid fa-photo-film"/>}>
                        <Text>Portfolio</Text>
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
                    <Button variant="filled" leftSection={<Text className="fa-brands fa-github"/>}>
                        <Text>Github Projects</Text>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    {projectData && projectData.map((project) => {
                        return (
                            <Menu key={project.id} closeOnItemClick={false} position="right-start">
                                <Menu.Target>
                                    <Menu.Item>
                                        <Group>
                                            <Text className="fa-regular fa-folder-open"/><Text>{project.title}</Text>
                                        </Group>
                                    </Menu.Item>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {project.gitHubLink &&
                                        <Menu.Item key={`${project.id}-github`} name={`${project.title} Github`}>
                                            <Link href={project.gitHubLink} target={"_blank"}>
                                                <Group>
                                                    <Text className="fa-brands fa-github"/>
                                                    <Text>{project.title} Github</Text>
                                                </Group>
                                            </Link>
                                        </Menu.Item>
                                    }
                                    {project.demoLink &&
                                        <Menu.Item key={`${project.id}-demo`} name={`${project.title} Demo`}>
                                            <Link href={project.demoLink} target={"_blank"}>
                                                <Group>
                                                    <Text className="fa-solid fa-link"/>
                                                    <Text>{project.title} Demo</Text>
                                                </Group></Link>
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
                    <Button variant="filled" leftSection={<Text className="fa-solid fa-graduation-cap"/>}>
                        <Text>Learning</Text>
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
            <Group flex={1}></Group>
            <Link
                href="https://github.com/guyettinger"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Text className="fa-brands fa-github" size={'1.5rem'} mr={14}/>
            </Link>
            <Link
                href="https://www.linkedin.com/in/guyettinger/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Text className="fa-brands fa-linkedin" size={'1.5rem'} mr={14}/>
            </Link>
        </Group>
    )
}