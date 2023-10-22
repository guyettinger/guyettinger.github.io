'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import styled from "styled-components";
import AppStyleProvider from "@/styles/AppStyleProvider";
import { Background } from "@/components/Background/Background";

const PageBody = styled.body`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  font-family: Roboto, sans-serif;
`

const PageMain = styled.main`
  flex: 1;
`

const PageLayout = ({children}: { children: ReactNode }) => {
    return (
        <PageBody>
            <Background/>
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

export default PageLayout