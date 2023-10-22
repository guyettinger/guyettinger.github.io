"use client"
import Image from "next/image";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 2rem 0;
`

const AboutHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const AboutFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const AboutTextContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const AboutParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

const AboutImageContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const AboutImage = styled(Image)`
  overflow: hidden;
  width: 100%;
  height: 500px;
  object-fit: cover;
  border: 2px solid #DADADB;
  filter: grayscale(100%);
  transition: all 0.5s ease-in-out;
  cursor: cell;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
`

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>About Me</AboutHeader>
            <AboutFlexContainer>
                <AboutTextContainer>
                    <AboutParagraph>
                        As an engineer, I have always been passionate about creating elegant and effective solutions to
                        complex problems. I have a strong foundation in software development, with a focus on web
                        technologies. I enjoy working on both the front-end and back-end of applications, and I am
                        always looking for ways to optimize performance, improve user experience, and ensure the highest
                        level of code quality.
                    </AboutParagraph>
                    <AboutParagraph>
                        Throughout my career, I have worked on a wide range of projects, from simple tools to complex
                        enterprise-level applications. I am experienced in working with a variety of development tools
                        and frameworks. I am always eager to learn and explore new technologies, and I am constantly
                        seeking out opportunities to improve my skills and knowledge.
                    </AboutParagraph>
                </AboutTextContainer>
                <AboutImageContainer>
                    <AboutImage src='/avatar.png' width={300} height={500} alt={"Avatar"}/>
                </AboutImageContainer>
            </AboutFlexContainer>
        </AboutContainer>
    )
}

export default About