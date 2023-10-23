"use client"
import { MediaCentralSearch } from "@/components/Professional/Avid/MediaCentralSearch/MediaCentralSearch";
import { Illuminate } from "@/components/Professional/Avid/Illuminate/Illuminate";
import { ProfessionalPageLayout } from "@/components/Professional/ProfessionalPageLayout/ProfessionalPageLayout";

const Page = () => {
    return (
        <ProfessionalPageLayout>
            <h1>Avid</h1>
            <MediaCentralSearch/>
            <Illuminate/>
        </ProfessionalPageLayout>
    )
}

export default Page