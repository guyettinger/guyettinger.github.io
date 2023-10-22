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

const Hero = () => {
    return (
        <HeroContainer>
            <Image src='/images/heroshot.png' className="profile-img" width={200} height={200} alt="Guy's Avatar"/>
            <HeroText>
                <HeroHeader1>Hi, I'm Guy 👋</HeroHeader1>
                <HeroParagraph>
                    I'm a software engineer based in Atlanta, GA.
                </HeroParagraph>
                <HeroParagraph>
                    I specialize in designing and implementing exceptional user experiences (and drinking massive
                    amounts of coffee).
                </HeroParagraph>
            </HeroText>
        </HeroContainer>
    )
}

export default Hero