import { ReactNode } from "react";

export interface CardContext {
    id: string;
    smallView: ReactNode
    largeView: ReactNode
}