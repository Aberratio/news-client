import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useStyles } from "./customization/useStyles";
import { theme } from "./theme";

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
