"use client"
import { ReactNode } from "react";
import Link from "next/link";
import { resumeData } from "@/data/resumeData";
import { CardContext } from "@/components/Cards/cardContext";
import { CardGallery, CardView } from "@/components/Cards";
import PointivoPage from "@/app/resume/pointivo/page";
import AvidPage from "@/app/resume/avid/page";
import NexidiaPage from "@/app/resume/nexidia/page";
import InmanPerkCoffeePage from "@/app/resume/inmanperkcoffee/page";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ResumeItemViewProps {
    resumeItem: typeof resumeData[1],
    children?: ReactNode
}

const SmallResumeItemView = ({resumeItem, children}: ResumeItemViewProps) => {
    return (
        <CardView
            key={resumeItem.id}
            title={resumeItem.company}
            description={resumeItem.title}
            iconArea={<i className="fa-solid fa-file-lines text-[20px]"/>}
            actionArea={
                <>
                    {!!resumeItem.link &&
                        <Link href={resumeItem.link} target="_blank">
                            <i className="fa-solid fa-link text-[20px]"/>
                        </Link>
                    }
                </>
            }
        >
            {children}
        </CardView>
    )
}

const LargeResumeItemView = ({resumeItem, children}: ResumeItemViewProps) => {
    return (
        <CardView
            key={resumeItem.id}
            title={resumeItem.company}
            description={resumeItem.title}
            className="min-w-[60vw] max-w-[60vw] min-h-[50vh] max-h-[80vh]"
            iconArea={<i className="fa-solid fa-file-lines text-[20px]"/>}
            actionArea={
                <>
                    {!!resumeItem.link &&
                        <Link href={resumeItem.link} target="_blank">
                            <i className="fa-solid fa-link text-[20px]"/>
                        </Link>
                    }
                </>
            }
        >
            <ScrollArea className="max-h-[70vh]">
                <div>
                    {children}
                </div>
            </ScrollArea>
        </CardView>
    )
}

const cardContexts: CardContext[] = []
resumeData.forEach(resumeItem => {
    let largeViewChildren: ReactNode | null = null
    switch (resumeItem.id) {
        case "pointivo":
            largeViewChildren = <PointivoPage/>
            break;
        case "avid":
            largeViewChildren = <AvidPage/>
            break;
        case "nexidia":
            largeViewChildren = <NexidiaPage/>
            break;
        case "inmanperkcoffee":
            largeViewChildren = <InmanPerkCoffeePage/>
            break;
    }

    cardContexts.push({
        id: resumeItem.id,
        smallView: SmallResumeItemView({resumeItem}),
        largeView: LargeResumeItemView({resumeItem, children: largeViewChildren}),
    })
})

export const ResumeList = () => {
    return (
        <section className="py-2">
            <h2 className="text-2xl font-semibold">Portfolio</h2>
            <div className="py-6">
                <CardGallery cardContexts={cardContexts}/>
            </div>
        </section>
    )
}