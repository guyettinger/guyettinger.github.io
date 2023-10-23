"use client"
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.4);
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