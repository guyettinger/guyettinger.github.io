import { Stack, ScrollAreaAutosize } from "@mantine/core";
import {
    UnityEssentialsPathway
} from "@/blocks/Learning/LearningSections/Unity/UnityEssentialsPathway/UnityEssentialsPathway";

const Page = () => {
    return (
        <ScrollAreaAutosize flex={1}>
            <Stack align="center">
                <h1>Unity Essentials Pathway</h1>
                <UnityEssentialsPathway/>
            </Stack>
        </ScrollAreaAutosize>
    )
}

export default Page