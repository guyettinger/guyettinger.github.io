import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/Stars/Stars";
import styled from "styled-components";

const BackgroundCanvas = styled(Canvas)`
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(10deg, #0f0f10, #013062);
`

export const Background = (props: any) => {
    return (
        <BackgroundCanvas camera={{position: [0, 0, 1]}}>
            <Stars {...props}/>
        </BackgroundCanvas>
    )
}