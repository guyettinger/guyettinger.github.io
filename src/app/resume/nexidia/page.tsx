"use client"
import { DialogueSearch } from "@/components/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch";
import { Illuminate } from "@/components/Resume/ResumeSections/Nexidia/Illuminate/Illuminate";
import { Emmy } from "@/components/Resume/ResumeSections/Nexidia/Emmy/Emmy";
import { ResumePageLayout } from "@/components/Resume/ResumePageLayout/ResumePageLayout";

const Page = () => {
    return (
        <ResumePageLayout>
            <h1>Nexidia</h1>
            <DialogueSearch/>
            <Illuminate/>
            <Emmy/>
        </ResumePageLayout>
    )
}

export default Page