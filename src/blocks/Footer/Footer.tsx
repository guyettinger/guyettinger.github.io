import { Stack, Text } from "@mantine/core";

export const Footer = () => {
    return (
        <Stack flex={1} align="center" justify="center" bg={'rgba(0, 0, 0, 0.7)'} h={52}>
            <Text>
                © {new Date().getFullYear()} Guy Ettinger
            </Text>
        </Stack>
    )
}