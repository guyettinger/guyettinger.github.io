"use client"
import { UnityEssentialsPathway } from "@/components/Learning/LearningSections/Unity/UnityEssentialsPathway/UnityEssentialsPathway";
import { UnityARPathway } from "@/components/Learning/LearningSections/Unity/UnityARPathway/UnityARPathway";
import { LearningPageLayout } from "@/components/Learning/LearningPageLayout";

const Page = () => {
    return (
        <LearningPageLayout>
            <h1>Unity</h1>
            <UnityEssentialsPathway/>
            <UnityARPathway/>
        </LearningPageLayout>
    )
}

export default Page