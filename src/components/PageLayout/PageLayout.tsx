'use client'
import { ReactNode } from "react";
import { Color } from "three";
import { RootState } from "@react-three/fiber";
import styled from "styled-components";
import { AppStyleProvider } from "@/styles/AppStyleProvider";
import { PortalMaterial, ShaderCanvas } from "gle-r3f-components";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PageBody = styled.body`
    position: relative !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
`

const PageBackground = styled.div`
    position: absolute !important;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
`

const PageContent = styled.div`
    position: absolute !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const PageMain = styled.main`
    flex: 1;
    overflow: auto;
`

const PageNav = styled.div`
`

export const PageLayout = ({children}: { children: ReactNode }) => {
    const shaderMaterial = new PortalMaterial()
    shaderMaterial.uniforms.uColorStart.value = new Color('#353535')
    shaderMaterial.uniforms.uColorEnd.value = new Color('#323232')
    const renderCallback = (state: RootState, delta: number) => {
        shaderMaterial.uniforms.uTime.value += delta
    }

    return (
        <PageBody>
            <AppStyleProvider>
                <PageContent>
                    <PageNav>
                        <Navbar/>
                    </PageNav>
                    <PageMain>
                        {children}
                    </PageMain>
                    <Footer/>
                </PageContent>
                <PageBackground>
                    <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback}/>
                </PageBackground>
            </AppStyleProvider>
        </PageBody>
    )
}