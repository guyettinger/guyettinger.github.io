import { useState } from 'react';
import WebGL from 'three/addons/capabilities/WebGL.js';

const isWebGLAvailable = () => {
  return WebGL.isWebGLAvailable() && WebGL.isWebGL2Available();
};

export const useWebGLAvailable = () => {
  const [webGLAvailable, setWebGLAvailable] = useState(isWebGLAvailable());
  return [webGLAvailable, setWebGLAvailable];
};
