import type { Metadata } from 'next'
import { ReactNode } from "react";
import { AppProvider } from "@/providers/AppProvider";
import { AppLayout } from "../blocks/AppLayout";

export const metadata: Metadata = {
    title: 'Guy Ettinger',
    description: 'Portfolio for Guy Ettinger',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Roboto"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
        </head>
        <body lang="en">
        <AppProvider>
            <AppLayout>
                {children}
            </AppLayout>
        </AppProvider>
        </body>
        </html>
    )
}
