"use client"
import { ReactNode } from "react";
import Link from "next/link";
import { Box, ScrollAreaAutosize, Stack, Text, Title } from "@mantine/core";
import { learningData } from "@/data/learningData";
import { CardContext } from "@/components/Cards/cardContext";
import { CardGallery, CardView } from "@/components/Cards";
import UnityEssentialsPathwayPage from "@/app/learning/unity/unityessentialspathway/page";
import UnityARPathwayPage from "@/app/learning/unity/unityarpathway/page";

interface LearningItemViewProps {
    learningItem: typeof learningData[1],
    children?: ReactNode
}

const SmallLearningItemView = ({learningItem, children}: LearningItemViewProps) => {
    return (
        <CardView
            key={learningItem.id}
            title={learningItem.title}
            iconArea={<Text className="fa-solid fa-graduation-cap" size={"20px"}/>}
            actionArea={
                <>
                    {!!learningItem.link &&
                        <Link href={learningItem.link} target="_blank">
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

const LargeLearningItemView = ({learningItem, children}: LearningItemViewProps) => {
    return (
        <CardView
            key={learningItem.id}
            title={learningItem.title}
            miw={'60vw'}
            maw={'60vw'}
            mih={'80vh'}
            mah={'80vh'}
            iconArea={<Text className="fa-solid fa-graduation-cap" size={"20px"}/>}
            actionArea={
                <>
                    {!!learningItem.link &&
                        <Link href={learningItem.link} target="_blank">
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
learningData.forEach(learningItem => {
    let largeViewChildren: ReactNode | null = null
    switch (learningItem.id) {
        case "unity essentials pathway":
            largeViewChildren = <UnityEssentialsPathwayPage/>
            break;
        case "unity ar pathway":
            largeViewChildren = <UnityARPathwayPage/>
            break;
    }

    cardContexts.push({
        id: learningItem.id,
        smallView: SmallLearningItemView({learningItem}),
        largeView: LargeLearningItemView({learningItem, children: largeViewChildren}),
    })
})

export const LearningList = () => {
    return (
        <Box py={2}>
            <Title>Learning</Title>
            <Stack py={'xl'}>
                <CardGallery cardContexts={cardContexts}/>
            </Stack>
        </Box>
    )
}