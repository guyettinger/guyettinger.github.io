import { CardContext } from "@/components/Cards/cardContext";

export interface CardGridProps {
    items: CardContext[];
    setIndex: (index: number) => void;
}