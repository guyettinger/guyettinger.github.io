import { PortfolioThemeProviderProps } from "./Theme.types";
import { DefaultTheme } from "./DefaultTheme";

export const ThemeProvider = ({theme, children}: PortfolioThemeProviderProps) => {
    const portfolioTheme = Object.assign({}, DefaultTheme, theme)

    return (
            <>{children}</>
    )
}