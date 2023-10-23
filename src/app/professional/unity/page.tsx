"use client"
import { UnityEssentialsPathway } from "@/components/Professional/Unity/UnityEssentialsPathway/UnityEssentialsPathway";
import { UnityARPathway } from "@/components/Professional/Unity/UnityARPathway/UnityARPathway";
import { ProfessionalPageLayout } from "@/components/Professional/ProfessionalPageLayout/ProfessionalPageLayout";

const Page = () => {
    return (
        <ProfessionalPageLayout>
            <h1>Unity</h1>
            <UnityEssentialsPathway/>
            <UnityARPathway/>
        </ProfessionalPageLayout>
    )
}

export default Page