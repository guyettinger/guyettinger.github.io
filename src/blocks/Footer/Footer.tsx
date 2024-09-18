import { Paper, Stack, Text } from "@mantine/core";

export const Footer = () => {
    return (
        <Paper radius={0}>
            <Stack flex={1} align="center" justify="center" h={52}>
                <Text>
                    © {new Date().getFullYear()} Guy Ettinger
                </Text>
            </Stack>
        </Paper>
    )
}