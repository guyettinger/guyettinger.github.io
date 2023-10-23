"use client"
import styled from "styled-components";

const SkillsContainer = styled.div`
  padding: 2rem 0;
`

const SkillsHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }
`

const SkillCard = styled.div`
  background-color: #DADADB;
  color: #1D1E20;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
  cursor: context-menu;

  &.react:hover {
    background-color: #61DAFB;
  }

  &.angular:hover {
    background-color: #E34F26;
  }

  &.typescript:hover {
    background-color: #264DE4;
  }

  &.js:hover {
    background-color: #F7DF1E;
  }

  &.csharp:hover {
    background-color: #af1ef7;
  }

  &.golang:hover {
    background-color: #1eabf7;
  }

  &.python:hover {
    background-color: #3776AB;
  }

  &.node:hover {
    background-color: #339933;
  }

  &.html:hover {
    background-color: #E34F26;
  }

  &.css:hover {
    background-color: #264DE4;
  }
`

const SkillIcon = styled.i`
  font-size: 1.5rem;
`

const SkillParagraph = styled.p`
`

export const Skills = () => {
    return (
        <SkillsContainer>
            <SkillsHeader>Skills</SkillsHeader>
            <SkillsGrid>
                <SkillCard className="react">
                    <SkillIcon className="fa-brands fa-react react-icon"></SkillIcon>
                    <SkillParagraph>React</SkillParagraph>
                </SkillCard>
                <SkillCard className="angular">
                    <SkillIcon className="fa-brands fa-angular angular-icon"></SkillIcon>
                    <SkillParagraph>Angular</SkillParagraph>
                </SkillCard>
                <SkillCard className="typescript">
                    <SkillIcon className="fa-brands fa-t typescript-icon"></SkillIcon>
                    <SkillParagraph>Typescript</SkillParagraph>
                </SkillCard>
                <SkillCard className="js">
                    <SkillIcon className="fa-brands fa-js-square js-icon"></SkillIcon>
                    <SkillParagraph>JavaScript</SkillParagraph>
                </SkillCard>
                <SkillCard className="csharp">
                    <SkillIcon className="fa-brands fa-microsoft code-icon"></SkillIcon>
                    <SkillParagraph>C#</SkillParagraph>
                </SkillCard>
                <SkillCard className="golang">
                    <SkillIcon className="fa-brands fa-golang golang-icon"></SkillIcon>
                    <SkillParagraph>Golang</SkillParagraph>
                </SkillCard>
                <SkillCard className="python">
                    <SkillIcon className="fa-brands fa-python python-icon"></SkillIcon>
                    <SkillParagraph>Python</SkillParagraph>
                </SkillCard>
                <SkillCard className="node">
                    <SkillIcon className="fa-brands fa-node-js node-icon"></SkillIcon>
                    <SkillParagraph>Node</SkillParagraph>
                </SkillCard>
                <SkillCard className="html">
                    <SkillIcon className="fa-brands fa-html5 html-icon"></SkillIcon>
                    <SkillParagraph>HTML</SkillParagraph>
                </SkillCard>
                <SkillCard className="css">
                    <SkillIcon className="fa-brands fa-css3-alt css-icon"></SkillIcon>
                    <SkillParagraph>CSS</SkillParagraph>
                </SkillCard>
            </SkillsGrid>
        </SkillsContainer>
    )
}
