"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Box } from "@mantine/core";

export default function Template({children}: { children: ReactNode }) {
    return (
        <Box
            flex={"auto"}
            h={"100%"}
            display={"flex"}
            component={motion.div}
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ease: "easeInOut", duration: 0.75}}
        >
            {children}
        </Box>
    );
}
