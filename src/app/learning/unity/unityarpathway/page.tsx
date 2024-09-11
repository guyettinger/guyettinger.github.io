"use client"
import { Stack, ScrollArea } from "@mantine/core";
import { UnityARPathway } from "@/blocks/Learning/LearningSections/Unity/UnityARPathway/UnityARPathway";

const Page = () => {
    return (
        <ScrollArea.Autosize flex={1}>
            <Stack align="center">
                <h1>Unity AR Pathway</h1>
                <UnityARPathway/>
            </Stack>
        </ScrollArea.Autosize>
    )
}

export default Page