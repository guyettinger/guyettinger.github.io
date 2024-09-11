"use client"

import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.7);
`;

const FooterParagraph = styled.p`
  font-size: 0.8rem;
  color: #9B9C9D;
`

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterParagraph>
                    © {new Date().getFullYear()} Guy Ettinger
                </FooterParagraph>
            </FooterContainer>
        </>
    )
}