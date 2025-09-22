import { ScrollArea } from "@/components/ui/scroll-area";
import { Inspection } from "@/blocks/Resume/ResumeSections/Pointivo/Inspection/Inspection";
import { Telecom } from "@/blocks/Resume/ResumeSections/Pointivo/Telecom/Telecom";
import { FacilitiesManagement } from "@/blocks/Resume/ResumeSections/Pointivo/FacilitiesManagement/FacilitiesManagement";
import { Patent } from "@/blocks/Resume/ResumeSections/Pointivo/Patent/Patent";

const Page = () => {
    return (
        <ScrollArea className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold">Pointivo</h1>
                <Inspection/>
                <Telecom/>
                <FacilitiesManagement/>
                <Patent/>
            </div>
        </ScrollArea>
    )
}

export default Page