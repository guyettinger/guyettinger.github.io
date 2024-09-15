import Link from "next/link";
import { Stack, Text, Title } from "@mantine/core";

export const Contact = () => {
    return (
        <Stack align="center" m={"lg"}>
            <Title>Get In Touch</Title>
            <Text>If you want to work together or have any questions, my inbox is always open. I'll try my
                best to get back to you!
                Cheers!
            </Text>
            <Link
                href="mailto:guy.ettinger@gmail.com"
                style={{
                    backgroundColor: "#0186de",
                    color: "#efefef",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    transition: "all 0.5s ease-in-out",
                    cursor: "pointer"
                }}>Say Hello</Link>
        </Stack>
    )
}
