"use client"
import { Inspection } from "@/blocks/Resume/ResumeSections/Pointivo/Inspection/Inspection";
import { Telecom } from "@/blocks/Resume/ResumeSections/Pointivo/Telecom/Telecom";
import { FacilitiesManagement } from "@/blocks/Resume/ResumeSections/Pointivo/FacilitiesManagement/FacilitiesManagement";
import { Patent } from "@/blocks/Resume/ResumeSections/Pointivo/Patent/Patent";
import { ScrollArea, Stack } from "@mantine/core";

const Page = () => {
    return (
        <ScrollArea.Autosize flex={1}>
            <Stack align="center">
                <h1>Pointivo</h1>
                <Inspection/>
                <Telecom/>
                <FacilitiesManagement/>
                <Patent/>
            </Stack>
        </ScrollArea.Autosize>
    )
}

export default Page