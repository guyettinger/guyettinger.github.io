import { ReactNode } from "react";
import { Header } from "@/blocks/Header";
import { Footer } from "@/blocks/Footer";
import { Background } from "@/blocks/Background";

const HeaderHeight = 60;
const FooterHeight = 52;
const ContentHeight = `calc(100% - ${HeaderHeight}px - ${FooterHeight}px)`;

export const AppLayout = ({children}: { children: ReactNode }) => {

    return (
        <div className="absolute inset-0 flex flex-col">
            <div className="absolute inset-0 flex flex-col">
                <div style={{ minHeight: HeaderHeight, maxHeight: HeaderHeight }}>
                    <Header/>
                </div>
                <div style={{ minHeight: ContentHeight, maxHeight: ContentHeight }}>
                    {children}
                </div>
                <div style={{ minHeight: FooterHeight, maxHeight: FooterHeight }}>
                    <Footer/>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 flex flex-col">
                {/*<Background/>*/}
            </div>
        </div>
    );
}