"use client"
import { DialogueSearch } from "@/components/Professional/Nexidia/DialogueSearch/DialogueSearch";
import { Illuminate } from "@/components/Professional/Nexidia/Illuminate/Illuminate";
import { Emmy } from "@/components/Professional/Nexidia/Emmy/Emmy";
import { ProfessionalPageLayout } from "@/components/Professional/ProfessionalPageLayout/ProfessionalPageLayout";

const Page = () => {
    return (
        <ProfessionalPageLayout>
            <h1>Nexidia</h1>
            <DialogueSearch/>
            <Illuminate/>
            <Emmy/>
        </ProfessionalPageLayout>
    )
}

export default Page