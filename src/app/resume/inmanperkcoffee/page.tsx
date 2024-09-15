import { Stack, ScrollAreaAutosize } from "@mantine/core";
import { InmanPark } from "@/blocks/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark";
import { Gainesville } from "@/blocks/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville";

const Page = () => {
    return (
        <ScrollAreaAutosize flex={1}>
            <Stack align="center">
                <h1>Inman Perk Coffee</h1>
                <InmanPark/>
                <Gainesville/>
            </Stack>
        </ScrollAreaAutosize>
    )
}

export default Page