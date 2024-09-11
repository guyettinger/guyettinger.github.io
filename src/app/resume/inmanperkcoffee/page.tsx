"use client"
import { Stack, ScrollArea } from "@mantine/core";
import { InmanPark } from "@/blocks/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark";
import { Gainesville } from "@/blocks/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville";

const Page = () => {
    return (
        <ScrollArea.Autosize flex={1}>
            <Stack align="center">
                <h1>Inman Perk Coffee</h1>
                <InmanPark/>
                <Gainesville/>
            </Stack>
        </ScrollArea.Autosize>
    )
}

export default Page