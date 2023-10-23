import { PortfolioTheme } from "./Theme.types";
import { LightTheme } from "./LightTheme";
import { baseColors, boxShadow } from "./Variables";

export const DarkTheme: PortfolioTheme = {
    ...LightTheme,
    boxShadow: {
        ...boxShadow,
        outerBorder: `0 0 0 2px ${baseColors.blue.dark5}, 0 0 0 4px ${baseColors.blue.base}`,
    },
    color: {
        ...LightTheme.color,
    },
    name: 'dark'
}