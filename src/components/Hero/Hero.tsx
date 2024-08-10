"use client"
import Image from "next/image"
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
`

const HeroImageContainer = styled(motion.div)`
`

const HeroText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const HeroHeader1 = styled.h1`
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

const HeroWave = styled(motion.div)`
    margin-left: 10px;
`

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroImageContainer
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Image src='/images/heroshot.png' className="profile-img" width={200} height={200} alt="Guy's Avatar"/>
            </HeroImageContainer>
            <HeroText>
                <HeroHeader1>Hi, I'm Guy</HeroHeader1>
                <HeroWave animate={{rotate: [0, 0, 90, 90, 0]}}>
                    <HeroHeader1>👋</HeroHeader1>
                </HeroWave>
            </HeroText>
        </HeroContainer>
    )
}