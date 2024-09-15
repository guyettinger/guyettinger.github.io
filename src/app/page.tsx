import { ScrollAreaAutosize, Stack } from "@mantine/core";
import { Hero, About, Skills, Contact, ProjectList, ResumeList, LearningList } from "@/blocks";

export default function Home() {
    return (
        <ScrollAreaAutosize flex={1}>
            <Stack px={`10vw`} justify="center">
                <Hero/>
                <About/>
                <Skills/>
                <ResumeList/>
                <ProjectList/>
                <LearningList/>
                <Contact/>
            </Stack>
        </ScrollAreaAutosize>
    )
}
