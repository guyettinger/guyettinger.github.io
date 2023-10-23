"use client"
import styled from "styled-components";
import { learningData } from "@/data/learningData";

const LearningItemsContainer = styled.div`
  padding: 2rem 0;
`

const LearningItemsHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const LearningItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
`

const LearningItemsCard = styled.div`
  border: 1px solid  rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  &:hover {
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

const LearningItemDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #b3b3b3;
`

export const LearningList = () => {
    return (
        <LearningItemsContainer>
            <LearningItemsHeader>Learning</LearningItemsHeader>
            <LearningItemsGrid>
                {learningData && learningData.map((learningItem) => (
                    <LearningItemsCard key={learningItem.id}>
                        <LearningItemHeader>
                            <LearningItemFolderIcon className="fa-solid fa-graduation-cap"></LearningItemFolderIcon>
                            <LearningItemIcons>
                                <LearningItemLink href={learningItem.link}>
                                    <LearningItemIcon className="fa-solid fa-link"></LearningItemIcon>
                                </LearningItemLink>
                            </LearningItemIcons>
                        </LearningItemHeader>
                        <LearningItemTitle>{learningItem.title}</LearningItemTitle>
                    </LearningItemsCard>
                ))
                }
            </LearningItemsGrid>
        </LearningItemsContainer>
    )
}