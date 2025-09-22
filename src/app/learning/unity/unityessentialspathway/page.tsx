import { ScrollArea } from "@/components/ui/scroll-area";
import { UnityEssentialsPathway } from "@/blocks/Learning/LearningSections/Unity/UnityEssentialsPathway/UnityEssentialsPathway";

const Page = () => {
    return (
        <ScrollArea className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold">Unity Essentials Pathway</h1>
                <UnityEssentialsPathway/>
            </div>
        </ScrollArea>
    )
}

export default Page