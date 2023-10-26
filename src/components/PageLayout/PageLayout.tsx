'use client'
import { ReactNode } from "react";
import styled from "styled-components";
import { AppStyleProvider } from "@/styles/AppStyleProvider";
import { CanvasBackground, Stars } from "gle-r3f-components";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PageBody = styled.body`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`

const PageMain = styled.main`
  flex: 1;
`

export const PageLayout = ({children}: { children: ReactNode }) => {
    return (
        <PageBody>
            <CanvasBackground>
                <Stars/>
            </CanvasBackground>
            <AppStyleProvider>
                <Navbar/>
                <PageMain>
                    {children}
                </PageMain>
                <Footer/>
            </AppStyleProvider>
        </PageBody>
    )
}