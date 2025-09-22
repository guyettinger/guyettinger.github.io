import { motion } from "framer-motion";
import { CardContext } from "@/components/Cards/cardContext";
import { CardGridProps } from "@/components/Cards/CardGrid/CardGrid.types";

const MotionDiv = motion.div

export const CardGrid = ({items, setIndex}: CardGridProps) => {
    return (
        <div className="card-list-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((cardContext: CardContext, i: number) => (
                <MotionDiv
                    className="card-list-item"
                    layoutId={cardContext.id}
                    key={cardContext.id}
                    onClick={() => setIndex(i)}
                >
                    {cardContext.smallView}
                </MotionDiv>
            ))}
        </div>
    );
}