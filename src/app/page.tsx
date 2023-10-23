"use client"
import styled from "styled-components";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { GithubProjects } from "@/components/GithubProjects";
import { ProfessionalProjects } from "@/components/ProfessionalProjects";

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
            <ProfessionalProjects/>
            <GithubProjects/>
            <Contact/>
        </HomeContainer>
    )
}
