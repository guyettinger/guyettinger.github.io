import { PointMaterial, Points } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as random from 'maath/random'

export const Stars = (props: any) => {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), {radius: 1.5}))
    useFrame((state, delta) => {
        const points = ref?.current as any
        if (!points) return
        points.rotation.x -= delta / 10
        points.rotation.y -= delta / 15
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#006fd3" size={0.005} sizeAttenuation={true} depthWrite={false}/>
            </Points>
        </group>
    )
}