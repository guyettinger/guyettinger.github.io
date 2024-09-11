import styled from "styled-components";
import { motion } from "framer-motion";
import { CardContext } from "@/components/Card/cardContext";
import { CardListProps } from "@/components/Card/CardList/CardList.types";

const CardListContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const CardListItem = styled(motion.div)`
    cursor: pointer;
`
export const CardList = ({items, setIndex}: CardListProps) => {
    return (
        <CardListContainer className="card-list-container">
            {items.map((cardContext: CardContext, i: number) => (
                <CardListItem
                    className="card-list-item"
                    layoutId={cardContext.id}
                    key={cardContext.id}
                    onClick={() => setIndex(i)}
                >
                    {cardContext.smallView}
                </CardListItem>
            ))}
        </CardListContainer>
    );
}