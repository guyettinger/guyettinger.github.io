import { ScrollArea } from "@/components/ui/scroll-area";
import { InmanPark } from "@/blocks/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark";
import { Gainesville } from "@/blocks/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville";

const Page = () => {
    return (
        <ScrollArea className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold">Inman Perk Coffee</h1>
                <InmanPark/>
                <Gainesville/>
            </div>
        </ScrollArea>
    )
}

export default Page