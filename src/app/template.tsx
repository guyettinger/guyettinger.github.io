"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

const TemplateContainer = styled(motion.div)`

`

export default function Template({children}: { children: ReactNode }) {
    return (
        <TemplateContainer
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ease: "easeInOut", duration: 0.75}}
        >
            {children}
        </TemplateContainer>
    );
}
