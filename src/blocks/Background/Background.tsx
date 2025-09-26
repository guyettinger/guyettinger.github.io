'use client';

import { RootState } from '@react-three/fiber';
import { PortalMaterial, ShaderCanvas } from 'gle-r3f-components';
import { useTheme } from 'next-themes';
import { Color } from 'three';

export const Background = () => {
  const { theme, systemTheme } = useTheme();

  const shaderMaterial = new PortalMaterial();

  if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')) {
    shaderMaterial.uniforms.uColorStart.value = new Color('#353535');
    shaderMaterial.uniforms.uColorEnd.value = new Color('#323232');
  } else {
    shaderMaterial.uniforms.uColorStart.value = new Color('#ffffff');
    shaderMaterial.uniforms.uColorEnd.value = new Color('#cfcfcf');
  }

  const renderCallback = (state: RootState, delta: number) => {
    shaderMaterial.uniforms.uTime.value += delta;
  };

  return <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback} />;
};
