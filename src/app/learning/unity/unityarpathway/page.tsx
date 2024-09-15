import { Stack, ScrollAreaAutosize } from "@mantine/core";
import { UnityARPathway } from "@/blocks/Learning/LearningSections/Unity/UnityARPathway/UnityARPathway";

const Page = () => {
    return (
        <ScrollAreaAutosize flex={1}>
            <Stack align="center">
                <h1>Unity AR Pathway</h1>
                <UnityARPathway/>
            </Stack>
        </ScrollAreaAutosize>
    )
}

export default Page