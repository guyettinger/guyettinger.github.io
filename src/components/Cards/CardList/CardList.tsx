import { SimpleGrid, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import { CardContext } from "@/components/Cards/cardContext";
import { CardListProps } from "@/components/Cards/CardList/CardList.types";

const MotionStack = motion(Stack)

export const CardList = ({items, setIndex}: CardListProps) => {
    return (
        <SimpleGrid
            className="card-list-container"
            cols={{base: 1, sm: 2, lg: 3, xl: 4}}
            spacing={'xl'}
            verticalSpacing={'xl'}>
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
        </SimpleGrid>
    );
}