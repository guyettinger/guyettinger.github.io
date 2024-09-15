import { Stack, ScrollAreaAutosize } from "@mantine/core";
import { MediaCentralSearch } from "@/blocks/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch";
import { Illuminate } from "@/blocks/Resume/ResumeSections/Avid/Illuminate/Illuminate";

const Page = () => {
    return (
        <ScrollAreaAutosize flex={1}>
            <Stack align="center">
                <h1>Avid</h1>
                <MediaCentralSearch/>
                <Illuminate/>
            </Stack>
        </ScrollAreaAutosize>
    )
}

export default Page