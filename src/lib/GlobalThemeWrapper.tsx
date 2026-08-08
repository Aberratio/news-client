"use client";
import type { ReactNode } from "react";
import { mapPublicationBrandColorsToTheme } from "core/styles/customization/publicationTheme";
import { GlobalStyle } from "core/styles/GlobalStyles";
import { theme } from "core/styles/theme";
import { ThemeProvider } from "styled-components";
import type { PublicationSettingsItem } from "types/PublicationSettingsItem";

interface GlobalThemeWrapperProps {
  children: ReactNode;
  publicationSettings?: PublicationSettingsItem;
}

export default function GlobalThemeWrapper({
  children,
  publicationSettings,
}: GlobalThemeWrapperProps) {
  const customTheme = mapPublicationBrandColorsToTheme(
    publicationSettings?.brandColors
  );

  return (
    <ThemeProvider
      theme={{
        ...theme,
        customTheme,
        ...customTheme,
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
