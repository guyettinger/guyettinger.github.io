import { ReactNode } from "react";
import { StackProps } from "@mantine/core";

export interface CardViewProps extends StackProps {
    title?: string
    description?: string
    iconArea?: ReactNode
    actionArea?: ReactNode
}