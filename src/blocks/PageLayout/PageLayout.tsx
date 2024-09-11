"use client"
import { ReactNode } from "react";
import { Color } from "three";
import { RootState } from "@react-three/fiber";
import styled from "styled-components";
import { PortalMaterial, ShaderCanvas } from "gle-r3f-components";
import { MapProvider } from "react-map-gl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { AppStyleProvider } from "@/styles/AppStyleProvider";
import { Navbar } from "@/blocks/Navbar";
import { Footer } from "@/blocks/Footer";

const queryClient = new QueryClient();

const PageBody = styled.body`
    position: relative !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    color: white
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

const PageMain = styled.div`
    flex: 1;
    height: calc(100% - 60px);
`

const PageNav = styled.div`
    flex: auto;
    height: 60px;
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
            <QueryClientProvider client={queryClient}>
                <MantineProvider>
                    <MapProvider>
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
                    </MapProvider>
                </MantineProvider>
            </QueryClientProvider>
        </PageBody>
    );
}