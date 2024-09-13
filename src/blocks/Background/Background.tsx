"use client"
import { Color } from "three";
import { RootState } from "@react-three/fiber";
import { PortalMaterial, ShaderCanvas } from "gle-r3f-components";

export const Background = () => {
    const shaderMaterial = new PortalMaterial()
    shaderMaterial.uniforms.uColorStart.value = new Color('#353535')
    shaderMaterial.uniforms.uColorEnd.value = new Color('#323232')
    const renderCallback = (state: RootState, delta: number) => {
        shaderMaterial.uniforms.uTime.value += delta
    }

    return (
        <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback}/>
    );
}