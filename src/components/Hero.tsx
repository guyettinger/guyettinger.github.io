"use client"
import Image from "next/image"
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
`

const HeroText = styled.div`
  text-align: center;
  margin: 1rem 0;
  width: 80%;

  @media screen and (max-width: 768px) {
      width: 100%;
  }
`

const HeroHeader1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const HeroParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

const HeroSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1rem;
`

const HeroSocialLink = styled.a`
  color: #9B9C9D;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;

  :hover {
    color: #DADADB;
  }
`

const Hero = () => {
    return (
        <HeroContainer>
            <Image src='/avatar.png' className="profile-img" width={300} height={300} alt="Guy's Avatar" />
            <HeroText>
                <HeroHeader1>Hi, I'm Guy 👋</HeroHeader1>
                <HeroParagraph>
                    I'm a software developer based in Atlanta, GA. I specialize in designing and implementing
                    exceptional user experiences.
                </HeroParagraph>
                <HeroSocialIcons>
                    <HeroSocialLink
                        href="https://github.com/guyettinger"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </HeroSocialLink>
                    <HeroSocialLink
                        href="https://www.linkedin.com/in/guyettinger/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </HeroSocialLink>
                </HeroSocialIcons>
            </HeroText>
        </HeroContainer>
    )
}

export default Hero