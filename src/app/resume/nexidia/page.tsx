"use client"
import { ScrollArea, Stack } from "@mantine/core";
import { DialogueSearch } from "@/blocks/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch";
import { Illuminate } from "@/blocks/Resume/ResumeSections/Nexidia/Illuminate/Illuminate";
import { Emmy } from "@/blocks/Resume/ResumeSections/Nexidia/Emmy/Emmy";

const Page = () => {
    return (
        <ScrollArea.Autosize flex={1}>
            <Stack align="center">
                <h1>Nexidia</h1>
                <DialogueSearch/>
                <Illuminate/>
                <Emmy/>
            </Stack>
        </ScrollArea.Autosize>
    )
}

export default Page