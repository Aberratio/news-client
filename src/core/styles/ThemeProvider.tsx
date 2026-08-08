import type { FC, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useStyles } from "./customization/useStyles";
import { theme } from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { customTheme } = useStyles();

  return (
    <StyledThemeProvider
      theme={{
        ...theme,
        customTheme,
        ...customTheme,
      }}
    >
      {children}
    </StyledThemeProvider>
  );
};
