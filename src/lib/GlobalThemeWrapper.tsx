"use client";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import React from "react";
import { lightTheme } from "core/styles/customization/lightTheme";
import { GlobalStyle } from "core/styles/GlobalStyles";
import { theme } from "core/styles/theme";

interface GlobalThemeWrapperProps {
  children: React.ReactNode;
}

export default function GlobalThemeWrapper({
  children,
}: GlobalThemeWrapperProps) {
  const [customTheme] = useLocalStorage("theme", lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...customTheme,
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
