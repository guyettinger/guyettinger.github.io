import { Group, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import { CardModalProps } from "@/components/Cards/CardModal/CardModal.types";

const MotionStack = motion(Stack)

export const CardModal = ({cardContext, onClick}: CardModalProps) => {
    return (
        <Group
            className='card-container'
            justify={'center'}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                pointerEvents: 'none',
                zIndex: 4000,
            }}
            onClick={onClick}>
            <MotionStack
                layoutId={cardContext.id}
                className='card'
                style={{pointerEvents: 'all'}}
            >
                {cardContext.largeView}
            </MotionStack>
        </Group>
    );
}