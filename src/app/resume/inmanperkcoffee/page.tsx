"use client"
import { InmanPark } from "@/components/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark";
import { Gainesville } from "@/components/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville";
import { ResumePageLayout } from "@/components/Resume/ResumePageLayout/ResumePageLayout";

const Page = () => {
    return (
        <ResumePageLayout>
            <h1>Inman Perk Coffee</h1>
            <InmanPark/>
            <Gainesville/>
        </ResumePageLayout>
    )
}

export default Page