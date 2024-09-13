"use client"
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { AppStyleProvider } from "@/styles/AppStyleProvider";

const queryClient = new QueryClient();

export const AppProvider = ({children}: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppStyleProvider>
                <MantineProvider>
                    {children}
                </MantineProvider>
            </AppStyleProvider>
        </QueryClientProvider>
    );
}