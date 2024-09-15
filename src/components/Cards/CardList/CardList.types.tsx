import { CardContext } from "@/components/Cards/cardContext";

export interface CardListProps {
    items: CardContext[];
    setIndex: (index: number) => void;
}