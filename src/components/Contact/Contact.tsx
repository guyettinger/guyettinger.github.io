import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 2rem 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ContactHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const ContactParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: center;
`

const ContactLink = styled.a`
  background-color: #45a5da;
  color: #1D1E20;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  display: inline-block;
`

export const Contact = () => {
    return (
        <ContactContainer className="contact-container">
            <ContactHeader>Get In Touch</ContactHeader>
            <ContactParagraph>If you want to work together or have any questions, my inbox is always open. I'll try my
                best to get back to you!
                Cheers!
            </ContactParagraph>
            <ContactLink href="mailto:guy.ettinger@gmail.com">Say Hello</ContactLink>
        </ContactContainer>
    )
}
