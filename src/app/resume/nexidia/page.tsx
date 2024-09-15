import { ScrollAreaAutosize, Stack } from "@mantine/core";
import { DialogueSearch } from "@/blocks/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch";
import { Illuminate } from "@/blocks/Resume/ResumeSections/Nexidia/Illuminate/Illuminate";
import { Emmy } from "@/blocks/Resume/ResumeSections/Nexidia/Emmy/Emmy";

const Page = () => {
    return (
        <ScrollAreaAutosize flex={1}>
            <Stack align="center">
                <h1>Nexidia</h1>
                <DialogueSearch/>
                <Illuminate/>
                <Emmy/>
            </Stack>
        </ScrollAreaAutosize>
    )
}

export default Page