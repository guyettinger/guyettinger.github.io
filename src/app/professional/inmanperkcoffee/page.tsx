"use client"
import { InmanPark } from "@/components/Professional/InmanPerkCoffee/InmanPark/InmanPark";
import { Gainesville } from "@/components/Professional/InmanPerkCoffee/Gainesville/Gainesville";
import { ProfessionalPageLayout } from "@/components/Professional/ProfessionalPageLayout/ProfessionalPageLayout";

const Page = () => {
    return (
        <ProfessionalPageLayout>
            <h1>Inman Perk Coffee</h1>
            <InmanPark/>
            <Gainesville/>
        </ProfessionalPageLayout>
    )
}

export default Page