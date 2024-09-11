"use client"
import { Stack, ScrollArea } from "@mantine/core";
import { MediaCentralSearch } from "@/blocks/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch";
import { Illuminate } from "@/blocks/Resume/ResumeSections/Avid/Illuminate/Illuminate";

const Page = () => {
    return (
        <ScrollArea.Autosize flex={1}>
            <Stack align="center">
                <h1>Avid</h1>
                <MediaCentralSearch/>
                <Illuminate/>
            </Stack>
        </ScrollArea.Autosize>
    )
}

export default Page