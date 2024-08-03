"use client"
import styled from "styled-components";
import { resumeData } from "@/data/resumeData";

const ResumeItemsContainer = styled.div`
  padding: 2rem 0;
`

const ResumeItemsHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const ResumeItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
`

const ResumeItemsCard = styled.div`
  border: 1px solid  rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  &:hover {
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
  &:hover{
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

export const ResumeList = () => {
    return (
        <ResumeItemsContainer>
            <ResumeItemsHeader>Portfolio</ResumeItemsHeader>
            <ResumeItemsGrid>
                {resumeData && resumeData.map((resumeItem) => (
                    <ResumeItemsCard key={resumeItem.id}>
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
                    </ResumeItemsCard>
                ))
                }
            </ResumeItemsGrid>
        </ResumeItemsContainer>
    )
}