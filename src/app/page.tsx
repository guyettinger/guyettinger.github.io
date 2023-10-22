"use client"
import styled from "styled-components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  font-family: Roboto, sans-serif;
`

export default function Home() {
    return (
        <HomeContainer>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </HomeContainer>
    )
}
