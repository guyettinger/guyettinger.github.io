"use client"
import { ReactNode } from "react";
import { Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

const MotionGroup = motion(Group)

interface SkillCardProps {
    children: ReactNode,
    backgroundColor?: string
}

const SkillCard = ({children, backgroundColor = "#ffffff"}: SkillCardProps) => {
    return (
        <Card p={0} withBorder shadow={"sm"} radius="md">
            <MotionGroup
                justify={'center'}
                align={'center'}
                py={'1rem'}
                whileHover={{backgroundColor: backgroundColor}}>
                {children}
            </MotionGroup>
        </Card>
    )
}

export const Skills = () => {
    return (
        <Stack py={2}>
            <Title>Skills</Title>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3, xl: 4}}
                        py={'md'}
                        spacing={'xl'}
                        verticalSpacing={'xl'}>
                <SkillCard backgroundColor="#61DAFB90">
                    <Text className="fa-brands fa-react react-icon" size={"1.5rem"}/>
                    <Text>React</Text>
                </SkillCard>
                <SkillCard backgroundColor="#303c52">
                    <Text className="fa-brands fa-react react-native-icon" size={"1.5rem"}/>
                    <Text>React Native</Text>
                </SkillCard>
                <SkillCard backgroundColor="#264DE490">
                    <Text className="fa-brands fa-t typescript-icon" size={"1.5rem"}/>
                    <Text>Typescript</Text>
                </SkillCard>
                <SkillCard backgroundColor="#F7DF1E90">
                    <Text className="fa-brands fa-js-square js-icon" size={"1.5rem"}/>
                    <Text>JavaScript</Text>
                </SkillCard>
                <SkillCard backgroundColor="#33993390">
                    <Text className="fa-brands fa-node-js node-icon" size={"1.5rem"}/>
                    <Text>Node</Text>
                </SkillCard>
                <SkillCard backgroundColor="#f1da4890">
                    <Text className="fa-brands fa-python python-icon" size={"1.5rem"}/>
                    <Text>Python</Text>
                </SkillCard>
                <SkillCard backgroundColor="#1eabf790">
                    <Text className="fa-brands fa-golang golang-icon" size={"1.5rem"}/>
                    <Text>Golang</Text>
                </SkillCard>
                <SkillCard backgroundColor="#E34F2690">
                    <Text className="fa-brands fa-angular angular-icon" size={"1.5rem"}/>
                    <Text>Angular</Text>
                </SkillCard>
                <SkillCard backgroundColor="#af1ef790">
                    <Text className="fa-brands fa-microsoft code-icon" size={"1.5rem"}/>
                    <Text>C#</Text>
                </SkillCard>
                <SkillCard backgroundColor="#E34F2690">
                    <Text className="fa-brands fa-html5 html-icon" size={"1.5rem"}/>
                    <Text>HTML</Text>
                </SkillCard>
                <SkillCard backgroundColor="#264DE490">
                    <Text className="fa-brands fa-css3-alt css-icon" size={"1.5rem"}/>
                    <Text>CSS</Text>
                </SkillCard>
                <a href="https://www.linkedin.com/in/guyettinger/details/skills/" target="_blank">
                    <SkillCard backgroundColor="#264DE490">
                        <Text className="fa-solid fa-ellipsis css-icon" size={"1.5rem"}/>
                    </SkillCard>
                </a>
            </SimpleGrid>
        </Stack>
    )
}
