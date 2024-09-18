import Link from "next/link";
import { Button, Stack, Text, Title } from "@mantine/core";

export const Contact = () => {
    return (
        <Stack align="center" m={"lg"}>
            <Title>Get In Touch</Title>
            <Text>If you want to work together or have any questions, my inbox is always open. I'll try my
                best to get back to you!
                Cheers!
            </Text>
            <Button
                component={Link}
                href="mailto:guy.ettinger@gmail.com">Say Hello</Button>
        </Stack>
    )
}
