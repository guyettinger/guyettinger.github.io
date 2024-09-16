import { ReactNode } from "react";
import "@/app/globals.css";
import '@mantine/core/styles.css';
import { AppThemeProvider } from "@/providers/AppThemeProvider";

export const AppStyleProvider = ({children}: { children: ReactNode }) => {
    return (
        <AppThemeProvider>
            {children}
        </AppThemeProvider>
    )
}