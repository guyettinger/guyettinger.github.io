"use client"
import { ReactNode } from "react";
import styled from "styled-components";
import { learningData } from "@/data/learningData";
import { CardContext } from "@/components/Card/cardContext";
import { CardGallery } from "@/components/Card";
import UnityEssentialsPathwayPage from "@/app/learning/unity/unityessentialspathway/page";
import UnityARPathwayPage from "@/app/learning/unity/unityarpathway/page";

const LearningItemsContainer = styled.div`
  padding: 2rem 0;
`

const LearningItemsHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const LearningItemsGrid = styled.div`
    display: flex;
`

const LearningItemsCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.9);
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.4);
    min-width: 325px;

    &:hover {
        background: rgba(0, 0, 0, 0.9);
    }

    &.small {
        max-width: 325px;
    }

    &.large {
        width: 60vw;
        height: 80vh;
        background: rgba(0, 0, 0, 0.9);
    }
`

const LearningItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`

const LearningItemFolderIcon = styled.i`
  font-size: 35px;
  color: #0186de;
`

const LearningItemIcons = styled.div`
  display: flex;
  gap: 0 5px;
`

const LearningItemLink = styled.a`
  margin-right: 5px;
  cursor: pointer;
  transition: all .5s ease;
  &:hover{
    color: #0186de;
  }
`

const LearningItemIcon = styled.i`
`

const LearningItemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`

interface LearningItemViewProps {
    learningItem: typeof learningData[1],
    children?: ReactNode
}

const SmallLearningItemView = ({learningItem, children}: LearningItemViewProps) => {
    return (
        <LearningItemsCard key={learningItem.id} className="small">
            <LearningItemHeader>
                <LearningItemFolderIcon className="fa-solid fa-graduation-cap"></LearningItemFolderIcon>
                <LearningItemIcons>
                    <LearningItemLink href={learningItem.link}>
                        <LearningItemIcon className="fa-solid fa-link"></LearningItemIcon>
                    </LearningItemLink>
                </LearningItemIcons>
            </LearningItemHeader>
            <LearningItemTitle>{learningItem.title}</LearningItemTitle>
            {!!children && (
                <>{children}</>
            )}
        </LearningItemsCard>
    )
}

const LargeLearningItemView = ({learningItem, children}: LearningItemViewProps) => {
    return (
        <LearningItemsCard key={learningItem.id} className="large">
            <LearningItemHeader>
                <LearningItemFolderIcon className="fa-solid fa-graduation-cap"></LearningItemFolderIcon>
                <LearningItemIcons>
                    <LearningItemLink href={learningItem.link}>
                        <LearningItemIcon className="fa-solid fa-link"></LearningItemIcon>
                    </LearningItemLink>
                </LearningItemIcons>
            </LearningItemHeader>
            <LearningItemTitle>{learningItem.title}</LearningItemTitle>
            {!!children && (
                <>{children}</>
            )}
        </LearningItemsCard>
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
        <LearningItemsContainer>
            <LearningItemsHeader>Learning</LearningItemsHeader>
            <LearningItemsGrid>
                <CardGallery cardContexts={cardContexts}/>
            </LearningItemsGrid>
        </LearningItemsContainer>
    )
}