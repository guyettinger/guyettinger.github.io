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
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
`

const PageMain = styled.main`
    flex: 1;
`

const ShaderCanvasContainer = styled.div`
    position: fixed !important;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
            <ShaderCanvasContainer>
                <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback}/>
            </ShaderCanvasContainer>
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