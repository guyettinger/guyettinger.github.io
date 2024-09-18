import { useState } from "react";
import { Stack } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { CardGrid } from "@/components/Cards/CardGrid/CardGrid";
import { CardModal } from "@/components/Cards/CardModal/CardModal";
import { CardGalleryProps } from "@/components/Cards/CardGallery/CardGallery.types";

const CardOverlay = motion(Stack)

export const CardGallery = ({cardContexts}: CardGalleryProps) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <CardGrid items={cardContexts} setIndex={setIndex}/>
            <AnimatePresence>
                {index >= 0 && (
                    <CardOverlay
                        key="overlay"
                        className="overlay"
                        style={{
                            background: 'black',
                            opacity: 0.2,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }}
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