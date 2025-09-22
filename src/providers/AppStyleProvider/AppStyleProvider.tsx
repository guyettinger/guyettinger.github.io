import { ReactNode } from "react";
import "@/app/globals.css";

export const AppStyleProvider = ({children}: { children: ReactNode }) => {
    return children as any;
}