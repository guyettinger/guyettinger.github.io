"use client"
import { ReactNode } from "react";
import Link from "next/link";
import { Box, ScrollAreaAutosize, Stack, Text, Title } from "@mantine/core";
import { resumeData } from "@/data/resumeData";
import { CardContext } from "@/components/Cards/cardContext";
import { CardGallery, CardView } from "@/components/Cards";
import PointivoPage from "@/app/resume/pointivo/page";
import AvidPage from "@/app/resume/avid/page";
import NexidiaPage from "@/app/resume/nexidia/page";
import InmanPerkCoffeePage from "@/app/resume/inmanperkcoffee/page";

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
            iconArea={<Text className="fa-solid fa-file-lines" size={"20px"}/>}
            actionArea={
                <>
                    {!!resumeItem.link &&
                        <Link href={resumeItem.link} target="_blank">
                            <Text className="fa-solid fa-link" size={"20px"}/>
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
            miw={'60vw'}
            maw={'60vw'}
            mih={'80vh'}
            mah={'80vh'}
            iconArea={<Text className="fa-solid fa-file-lines" size={"20px"}/>}
            actionArea={
                <>
                    {!!resumeItem.link &&
                        <Link href={resumeItem.link} target="_blank">
                            <Text className="fa-solid fa-link" size={"20px"}/>
                        </Link>
                    }
                </>
            }
        >
            <ScrollAreaAutosize offsetScrollbars={true} scrollbarSize={4}>
                <Box>
                    {children}
                </Box>
            </ScrollAreaAutosize>
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
        <Box py={2}>
            <Title>Portfolio</Title>
            <Stack py={'xl'}>
                <CardGallery cardContexts={cardContexts}/>
            </Stack>
        </Box>
    )
}