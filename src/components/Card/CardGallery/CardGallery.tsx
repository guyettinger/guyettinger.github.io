import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { CardList } from "@/components/Card/CardList/CardList";
import { CardModal } from "@/components/Card/CardModal/CardModal";
import { CardGalleryProps } from "@/components/Card/CardGallery/CardGallery.types";

const CardOverlay = styled(motion.div)`
    background: black;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export const CardGallery = ({cardContexts}: CardGalleryProps) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <CardList items={cardContexts} setIndex={setIndex}/>
            <AnimatePresence>
                {index >= 0 && (
                    <CardOverlay
                        key="overlay"
                        className="overlay"
                        initial={{opacity: 0}}
                        animate={{opacity: 0.6}}
                        exit={{opacity: 0}}
                        onClick={() => setIndex(-1)}
                    />
                )}
                {index >= 0 && (
                    <CardModal
                        key="card"
                        cardContext={cardContexts[index]}
                        onClick={() => setIndex(-1)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}