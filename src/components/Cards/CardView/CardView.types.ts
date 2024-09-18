import { ReactNode } from "react";
import { CardProps } from "@mantine/core";

export interface CardViewProps extends CardProps {
    title?: string
    description?: string
    iconArea?: ReactNode
    actionArea?: ReactNode
}