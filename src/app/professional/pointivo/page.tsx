"use client"
import { Inspection } from "@/components/Professional/Pointivo/Inspection/Inspection";
import { Telecom } from "@/components/Professional/Pointivo/Telecom/Telecom";
import { FacilitiesManagement } from "@/components/Professional/Pointivo/FacilitiesManagement/FacilitiesManagement";
import { Patent } from "@/components/Professional/Pointivo/Patent/Patent";
import { ProfessionalPageLayout } from "@/components/Professional/ProfessionalPageLayout/ProfessionalPageLayout";

const Page = () => {
    return (
        <ProfessionalPageLayout>
            <h1>Pointivo</h1>
            <Inspection/>
            <Telecom/>
            <FacilitiesManagement/>
            <Patent/>
        </ProfessionalPageLayout>
    )
}

export default Page