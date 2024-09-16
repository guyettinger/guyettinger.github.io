import { Group, Stack, Title, Image, Text } from "@mantine/core";

export const About = () => {
    return (
        <Stack>
            <Title>About Me</Title>
            <Group wrap={'nowrap'} align={'flex-start'}>
                <Stack>
                    <Text size={'lg'}>
                        I specialize in designing and implementing exceptional user experiences (and drinking massive
                        amounts of coffee).
                    </Text>
                    <Text size={'lg'}>
                        As an engineer, I have always been passionate about creating elegant and effective solutions to
                        complex problems. I have a strong foundation in software development, with a focus on emerging
                        technologies. I enjoy working on both the front-end and back-end of applications, and I am
                        always looking for ways to improve everyone experience (user and engineer alike).
                    </Text>
                    <Text size={'lg'}>
                        Throughout my career, I have worked on a wide range of projects, from simple tools to complex
                        enterprise-level applications. I am experienced in working with a variety of development tools
                        and frameworks. I am always eager to learn and explore new technologies, and I am constantly
                        seeking out opportunities to improve my skills and knowledge.
                    </Text>
                </Stack>
                <Stack miw={'30vw'} maw={'30vw'}>
                    <Image src='/images/coffeepowered.jpeg' radius={10} alt={"Powered by Coffee"} />
                </Stack>
            </Group>
        </Stack>
    )
}