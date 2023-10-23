"use client"
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Button, Menu, MenuItem } from "gle-components";
import { githubProjectData } from "@/data/githubProjectData";
import { professionalProjectData } from "@/data/professionalProjectData";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.4);
  
  button {
    margin-left: 1.5rem;
  }
`

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const NavImage = styled(Image)`
    margin: -14px 0
`

const NavSpacer = styled.div`
  flex:auto;
`

const NavLinkIcon = styled.a`
  flex: auto;
  max-width:24px;
  margin-right: 14px;
  color: #dadada;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;

  :hover {
    color: #FFFFFF;
  }
`

export const Navbar = () => {
    return (
        <NavContainer>
            <NavLogo>
                <NavImage src='/images/avatar.png' className="profile-img" width={48} height={48} alt="Guy's Avatar" />
                <Link href="/">
                    Guy Ettinger
                </Link>
                <Button primary={true} variant={"medium"}>
                    <Link href="/"><i className="fa-solid fa-house"></i></Link>
                </Button>
                <Menu name="Professional" primary={true} variant={"medium"} buttonContent={<span>Professional Projects</span>}>
                    {professionalProjectData && professionalProjectData.map((professionalProject) => {
                        return (
                            <MenuItem key={professionalProject.id} name={professionalProject.title}>
                                <Link href={professionalProject.link}>{professionalProject.title}</Link>
                            </MenuItem>
                        )})
                    }
                </Menu>
                <Menu name="Projects" primary={true} variant={"medium"} buttonContent={<span>Github Projects</span>}>
                    {githubProjectData && githubProjectData.map((githubProject) => {
                        return (
                        <MenuItem key={githubProject.id} name={githubProject.title}>
                            <Link href={githubProject.gitHubLink} target={"_blank"}>{githubProject.title}</Link>
                        </MenuItem>
                        )})
                    }
                </Menu>
            </NavLogo>
            <NavSpacer></NavSpacer>
            <NavLinkIcon
                href="https://github.com/guyettinger"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </NavLinkIcon>
            <NavLinkIcon
                href="https://www.linkedin.com/in/guyettinger/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </NavLinkIcon>
        </NavContainer>
    )
}