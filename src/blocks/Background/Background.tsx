"use client"
import { Color } from "three";
import { RootState } from "@react-three/fiber";
import { PortalMaterial, ShaderCanvas } from "gle-r3f-components";
import { useComputedColorScheme } from "@mantine/core";

export const Background = () => {

    const colorScheme = useComputedColorScheme('dark');

    const shaderMaterial = new PortalMaterial()

    if (colorScheme === 'dark') {
        shaderMaterial.uniforms.uColorStart.value = new Color('#353535')
        shaderMaterial.uniforms.uColorEnd.value = new Color('#323232')
    } else {
        shaderMaterial.uniforms.uColorStart.value = new Color('#ffffff')
        shaderMaterial.uniforms.uColorEnd.value = new Color('#cfcfcf')
    }

    const renderCallback = (state: RootState, delta: number) => {
        shaderMaterial.uniforms.uTime.value += delta
    }

    return (
        <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback}/>
    );
}