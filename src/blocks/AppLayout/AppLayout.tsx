import { ReactNode } from "react";
import { Box } from "@mantine/core";
import { Header } from "@/blocks/Header";
import { Footer } from "@/blocks/Footer";
import { Background } from "@/blocks/Background";

const HeaderHeight = 60;
const FooterHeight = 52;
const ContentHeight = `calc(100% - ${HeaderHeight}px - ${FooterHeight}px)`;

export const AppLayout = ({children}: { children: ReactNode }) => {

    return (
        <Box style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column"
        }}>
            <Box style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column"
            }}>
                <Box mah={HeaderHeight} mih={HeaderHeight}>
                    <Header mah={HeaderHeight} mih={HeaderHeight}/>
                </Box>
                <Box mah={ContentHeight} mih={ContentHeight}>
                    {children}
                </Box>
                <Box mah={FooterHeight} mih={FooterHeight}>
                    <Footer/>
                </Box>
            </Box>
            <Box style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                zIndex: -1
            }}>
                <Background/>
            </Box>
        </Box>
    );
}