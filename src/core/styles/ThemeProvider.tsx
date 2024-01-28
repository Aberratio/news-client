import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "./theme";
import { useStyles } from "./customization/useStyles";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { customTheme } = useStyles();

  return (
    <StyledThemeProvider
      theme={{
        ...theme,
        ...customTheme,
      }}
    >
      {children}
    </StyledThemeProvider>
  );
};
