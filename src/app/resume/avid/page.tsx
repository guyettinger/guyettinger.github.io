import { ScrollArea } from "@/components/ui/scroll-area";
import { MediaCentralSearch } from "@/blocks/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch";
import { Illuminate } from "@/blocks/Resume/ResumeSections/Avid/Illuminate/Illuminate";

const Page = () => {
    return (
        <ScrollArea className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold">Avid</h1>
                <MediaCentralSearch/>
                <Illuminate/>
            </div>
        </ScrollArea>
    )
}

export default Page