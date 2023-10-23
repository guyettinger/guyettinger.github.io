"use client"
import { MediaCentralSearch } from "@/components/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch";
import { Illuminate } from "@/components/Resume/ResumeSections/Avid/Illuminate/Illuminate";
import { ResumePageLayout } from "@/components/Resume/ResumePageLayout/ResumePageLayout";

const Page = () => {
    return (
        <ResumePageLayout>
            <h1>Avid</h1>
            <MediaCentralSearch/>
            <Illuminate/>
        </ResumePageLayout>
    )
}

export default Page