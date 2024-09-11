"use client"
import { Stack, ScrollArea } from "@mantine/core";
import {
    UnityEssentialsPathway
} from "@/blocks/Learning/LearningSections/Unity/UnityEssentialsPathway/UnityEssentialsPathway";

const Page = () => {
    return (
        <ScrollArea.Autosize flex={1}>
            <Stack align="center">
                <h1>Unity Essentials Pathway</h1>
                <UnityEssentialsPathway/>
            </Stack>
        </ScrollArea.Autosize>
    )
}

export default Page