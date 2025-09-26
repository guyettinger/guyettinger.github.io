import '@/app/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const AppStyleProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children as any}
    </NextThemesProvider>
  );
};
