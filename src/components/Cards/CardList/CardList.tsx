import { Group, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import { CardContext } from "@/components/Cards/cardContext";
import { CardListProps } from "@/components/Cards/CardList/CardList.types";

const MotionStack = motion(Stack)

export const CardList = ({items, setIndex}: CardListProps) => {
    return (
        <Group className="card-list-container" justify={'space-around'}>
            {items.map((cardContext: CardContext, i: number) => (
                <MotionStack
                    className="card-list-item"
                    layoutId={cardContext.id}
                    key={cardContext.id}
                    onClick={() => setIndex(i)}
                >
                    {cardContext.smallView}
                </MotionStack>
            ))}
        </Group>
    );
}