import { ScrollArea } from "@/components/ui/scroll-area";
import { UnityARPathway } from "@/blocks/Learning/LearningSections/Unity/UnityARPathway/UnityARPathway";

const Page = () => {
    return (
        <ScrollArea className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold">Unity AR Pathway</h1>
                <UnityARPathway/>
            </div>
        </ScrollArea>
    )
}

export default Page