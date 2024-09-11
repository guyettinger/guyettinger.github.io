"use client"
import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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

const SkillCardStyle = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0.4);;
    color: #efefef;
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
        background-color: #61DAFB90;
    }

    &.react-native:hover {
        background-color: #303c52;
    }

    &.angular:hover {
        background-color: #E34F2690;
    }

    &.typescript:hover {
        background-color: #264DE490;
    }

    &.js:hover {
        background-color: #F7DF1E90;
    }

    &.csharp:hover {
        background-color: #af1ef790;
    }

    &.golang:hover {
        background-color: #1eabf790;
    }

    &.python:hover {
        background-color: #f1da4890;
    }

    &.node:hover {
        background-color: #33993390;
    }

    &.html:hover {
        background-color: #E34F2690;
    }

    &.css:hover {
        background-color: #264DE490;
    }
`

const SkillIcon = styled.i`
    font-size: 1.5rem;
`

const SkillParagraph = styled.p`
`

const SkillCard = ({children, className}: { children: ReactNode, className: string }) => {
    return <SkillCardStyle
        className={className}
        whileHover={{scale: 1.05}}>
        {children}
    </SkillCardStyle>
}

export const Skills = () => {
    return (
        <SkillsContainer>
            <SkillsHeader>Skills</SkillsHeader>
            <SkillsGrid>
                <SkillCard className="react">
                    <SkillIcon className="fa-brands fa-react react-icon"></SkillIcon>
                    <SkillParagraph>React</SkillParagraph>
                </SkillCard>
                <SkillCard className="react-native">
                    <SkillIcon className="fa-brands fa-react react-native-icon"></SkillIcon>
                    <SkillParagraph>React Native</SkillParagraph>
                </SkillCard>
                <SkillCard className="typescript">
                    <SkillIcon className="fa-brands fa-t typescript-icon"></SkillIcon>
                    <SkillParagraph>Typescript</SkillParagraph>
                </SkillCard>
                <SkillCard className="js">
                    <SkillIcon className="fa-brands fa-js-square js-icon"></SkillIcon>
                    <SkillParagraph>JavaScript</SkillParagraph>
                </SkillCard>
                <SkillCard className="node">
                    <SkillIcon className="fa-brands fa-node-js node-icon"></SkillIcon>
                    <SkillParagraph>Node</SkillParagraph>
                </SkillCard>
                <SkillCard className="python">
                    <SkillIcon className="fa-brands fa-python python-icon"></SkillIcon>
                    <SkillParagraph>Python</SkillParagraph>
                </SkillCard>
                <SkillCard className="golang">
                    <SkillIcon className="fa-brands fa-golang golang-icon"></SkillIcon>
                    <SkillParagraph>Golang</SkillParagraph>
                </SkillCard>
                <SkillCard className="angular">
                    <SkillIcon className="fa-brands fa-angular angular-icon"></SkillIcon>
                    <SkillParagraph>Angular</SkillParagraph>
                </SkillCard>
                <SkillCard className="csharp">
                    <SkillIcon className="fa-brands fa-microsoft code-icon"></SkillIcon>
                    <SkillParagraph>C#</SkillParagraph>
                </SkillCard>
                <SkillCard className="html">
                    <SkillIcon className="fa-brands fa-html5 html-icon"></SkillIcon>
                    <SkillParagraph>HTML</SkillParagraph>
                </SkillCard>
                <SkillCard className="css">
                    <SkillIcon className="fa-brands fa-css3-alt css-icon"></SkillIcon>
                    <SkillParagraph>CSS</SkillParagraph>
                </SkillCard>
                <a href="https://www.linkedin.com/in/guyettinger/details/skills/" target="_blank">
                    <SkillCard className="css">
                        <SkillIcon className="fa-solid fa-ellipsis css-icon"></SkillIcon>
                    </SkillCard>
                </a>
            </SkillsGrid>
        </SkillsContainer>
    )
}
