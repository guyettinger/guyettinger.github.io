"use client"
import { Inspection } from "@/components/Resume/ResumeSections/Pointivo/Inspection/Inspection";
import { Telecom } from "@/components/Resume/ResumeSections/Pointivo/Telecom/Telecom";
import { FacilitiesManagement } from "@/components/Resume/ResumeSections/Pointivo/FacilitiesManagement/FacilitiesManagement";
import { Patent } from "@/components/Resume/ResumeSections/Pointivo/Patent/Patent";
import { ResumePageLayout } from "@/components/Resume/ResumePageLayout/ResumePageLayout";

const Page = () => {
    return (
        <ResumePageLayout>
            <h1>Pointivo</h1>
            <Inspection/>
            <Telecom/>
            <FacilitiesManagement/>
            <Patent/>
        </ResumePageLayout>
    )
}

export default Page