import WebGL from 'three/addons/capabilities/WebGL.js';
import { useState } from "react";

const isWebGLAvailable = () => {
    return WebGL.isWebGLAvailable() && WebGL.isWebGL2Available()
}

export const useWebGLAvailable = () => {
    const [webGLAvailable, setWebGLAvailable] = useState(isWebGLAvailable())
    return [webGLAvailable, setWebGLAvailable]
}