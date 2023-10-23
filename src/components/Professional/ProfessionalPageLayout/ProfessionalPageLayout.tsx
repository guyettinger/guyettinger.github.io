import styled from "styled-components";
import { ReactNode } from "react";

export const ProfessionalPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  main {
    margin: 1rem 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  h1, h2, h3 {
    margin: 1rem 0 2rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
  
  section {
    margin-left: 1rem;
    margin-bottom: 2rem;
  }

`

export const ProfessionalPageLayout = ({children}: { children: ReactNode }) => {
    return (
        <ProfessionalPageContainer>
            <main>
                {children}
            </main>
        </ProfessionalPageContainer>
    )
}