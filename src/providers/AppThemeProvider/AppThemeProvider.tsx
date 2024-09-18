import { createTheme, MantineProvider } from "@mantine/core";
import { AppThemeProviderProps } from "./AppThemeProvider.types";

export const theme = createTheme({
    /* Put your mantine theme override here */
});

export const AppThemeProvider = ({children}: AppThemeProviderProps) => {
    return (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            {children}
        </MantineProvider>
    )
}