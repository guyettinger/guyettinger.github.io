import { createStyledBreakpointsTheme } from 'styled-breakpoints';
import { PortfolioTheme } from "./Theme.types";
import { LightTheme } from "./LightTheme";

export const DefaultTheme: PortfolioTheme = {
    ...LightTheme,
    ...createStyledBreakpointsTheme()
}