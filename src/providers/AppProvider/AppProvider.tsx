"use client"
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppStyleProvider } from "@/providers/AppStyleProvider/AppStyleProvider";

const queryClient = new QueryClient();

export const AppProvider = ({children}: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppStyleProvider>
                {children}
            </AppStyleProvider>
        </QueryClientProvider>
    );
}