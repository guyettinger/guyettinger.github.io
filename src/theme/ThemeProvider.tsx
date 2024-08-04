import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GLEComponentDefaultTheme, GLEComponentThemeProvider } from "gle-components";
import { PortfolioThemeProviderProps } from "./Theme.types";
import { DefaultTheme } from "./DefaultTheme";

export const ThemeProvider = ({theme, children}: PortfolioThemeProviderProps) => {
    const portfolioTheme = Object.assign({}, DefaultTheme, theme)

    GLEComponentDefaultTheme.gle.color.buttonPrimaryForeground = "white"
    GLEComponentDefaultTheme.gle.color.buttonPrimaryBackground = "rgba(0,0,0,0)"

    return (
        <StyledComponentsThemeProvider theme={portfolioTheme}>
            <GLEComponentThemeProvider theme={GLEComponentDefaultTheme}>
                {children}
            </GLEComponentThemeProvider>
        </StyledComponentsThemeProvider>
    )
}