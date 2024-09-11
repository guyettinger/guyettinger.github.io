import styled from "styled-components";
import { motion } from "framer-motion";
import { CardModalProps } from "@/components/Card/CardModal/CardModal.types";

const CardModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    * {
        pointer-events: all;
    }
`
const CardModalContent = styled(motion.div)`
`

export const CardModal = ({cardContext, onClick}: CardModalProps) => {
    return (
        <CardModalContainer className="card-container" onClick={onClick}>
            <CardModalContent
                layoutId={cardContext.id}
                className="card"
            >
                {cardContext.largeView}
            </CardModalContent>
        </CardModalContainer>
    );
}