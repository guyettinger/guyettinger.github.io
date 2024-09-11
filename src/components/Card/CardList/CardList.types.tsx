import { CardContext } from "@/components/Card/cardContext";

export interface CardListProps {
    items: CardContext[];
    setIndex: (index: number) => void;
}