import { Stack, Image, Group, Title } from "@mantine/core";
import { motion } from "framer-motion";

const MotionStack = motion(Stack)

export const Hero = () => {
    return (
        <Stack align={'center'} justify={'center'} m={'xl'}>
            <MotionStack
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition={{
                    duration: 0.8,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Image src='/images/heroshot.png' width={200} height={200} alt="Guy"/>
            </MotionStack>
            <Group>
                <Title>Hi, I'm Guy</Title>
                <MotionStack
                    animate={{rotate: [0, 0, 0, 90, 90, 0]}}
                    whileHover={{rotate: [0, 0, 0, 90, 90, 0]}}>
                    <Title>👋</Title>
                </MotionStack>
            </Group>
        </Stack>
    )
}