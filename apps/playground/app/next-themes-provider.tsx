'use client';

import { ThemeProvider } from 'next-themes';

export function NextThemeProvider({ children }): JSX.Element {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
