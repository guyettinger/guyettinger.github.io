"use client"
import { ReactNode } from "react";
import styled from "styled-components";
import { resumeData } from "@/data/resumeData";
import { CardContext } from "@/components/Card/cardContext";
import { CardGallery } from "@/components/Card";
import PointivoPage from "@/app/resume/pointivo/page";
import AvidPage from "@/app/resume/avid/page";
import NexidiaPage from "@/app/resume/nexidia/page";
import InmanPerkCoffeePage from "@/app/resume/inmanperkcoffee/page";

const ResumeItemsContainer = styled.div`
    padding: 2rem 0;
`

const ResumeItemsHeader = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

const ResumeItemsGrid = styled.div`
    display: flex;
`

const ResumeItemsCard = styled.div`
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

const ResumeItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
`

const ResumeItemFolderIcon = styled.i`
    font-size: 35px;
    color: #0186de;
`

const ResumeItemIcons = styled.div`
    display: flex;
    gap: 0 5px;
`

const ResumeItemLink = styled.a`
    margin-right: 5px;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
        color: #0186de;
    }
`

const ResumeItemIcon = styled.i`
`

const ResumeItemCompany = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`

const ResumeItemTitle = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: #b3b3b3;
`

interface ResumeItemViewProps {
    resumeItem: typeof resumeData[1],
    children?: ReactNode
}

const SmallResumeItemView = ({resumeItem, children}: ResumeItemViewProps) => {
    return (
        <ResumeItemsCard key={resumeItem.id} className="small">
            <ResumeItemHeader>
                <ResumeItemFolderIcon className="fa-solid fa-file-lines"></ResumeItemFolderIcon>
                <ResumeItemIcons>
                    <ResumeItemLink href={resumeItem.link}>
                        <ResumeItemIcon className="fa-solid fa-link"></ResumeItemIcon>
                    </ResumeItemLink>
                </ResumeItemIcons>
            </ResumeItemHeader>
            <ResumeItemCompany>{resumeItem.company}</ResumeItemCompany>
            <ResumeItemTitle>{resumeItem.title}</ResumeItemTitle>
            {!!children && (
                <>{children}</>
            )}
        </ResumeItemsCard>
    )
}

const LargeResumeItemView = ({resumeItem, children}: ResumeItemViewProps) => {
    return (
        <ResumeItemsCard key={resumeItem.id} className="large">
            <ResumeItemHeader>
                <ResumeItemFolderIcon className="fa-solid fa-file-lines"></ResumeItemFolderIcon>
                <ResumeItemIcons>
                    <ResumeItemLink href={resumeItem.link}>
                        <ResumeItemIcon className="fa-solid fa-link"></ResumeItemIcon>
                    </ResumeItemLink>
                </ResumeItemIcons>
            </ResumeItemHeader>
            <ResumeItemCompany>{resumeItem.company}</ResumeItemCompany>
            <ResumeItemTitle>{resumeItem.title}</ResumeItemTitle>
            {!!children && (
                <>{children}</>
            )}
        </ResumeItemsCard>
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
        <ResumeItemsContainer>
            <ResumeItemsHeader>Portfolio</ResumeItemsHeader>
            <ResumeItemsGrid>
                <CardGallery cardContexts={cardContexts}/>
            </ResumeItemsGrid>
        </ResumeItemsContainer>
    )
}