export interface CustomTheme {
  general: {
    borderRadius: string;
    errorMessageColor: string;
    primaryColor: string;
    primaryOppositeColor: OppositeColor;
    secondaryColor: string;
    secondaryOppositeColor: OppositeColor;
    tertiaryColor: string;
    tertiaryOppositeColor: OppositeColor;
  };
  publicationVisual: {
    cardBorderColor: string;
    cardBorderWidth: string;
    cardHoverColor: string;
    cardShadow: string;
    cardShadowHover: string;
    cornerRadius: string;
    density: "compact" | "comfortable";
    footerAccentColor: string;
    footerBackgroundColor: string;
    footerCopyrightBackgroundColor: string;
    formFocusShadow: string;
    headerAccentColor: string;
    headerBackgroundColor: string;
    mobileNavigationBackgroundColor: string;
    mutedBorderColor: string;
    sectionHeaderBackgroundColor: string;
    sectionHeaderBorderColor: string;
    sectionHeaderColor: string;
    submenuActiveBackgroundColor: string;
    themePreset: "classic" | "modern" | "civic" | "magazine";
  };
  buttons: {
    primary: {
      backgroundColor: string;
      backgroundOppositeColor: OppositeColor;
      borderColor: string;
      disabledBackgroundColor: string;
      disabledBackgroundOppositeColor: string;
      onHoverBackgroundColor: string;
      onHoverBackgroundOppositeColor: OppositeColor;
    };
    secondary: {
      backgroundColor: string;
      backgroundOppositeColor: OppositeColor;
      borderColor: string;
      disabledBackgroundColor: string;
      disabledBackgroundOppositeColor: string;
      onHoverBackgroundColor: string;
      onHoverBackgroundOppositeColor: OppositeColor;
    };
    tertiary: {
      backgroundColor: string;
      backgroundOppositeColor: OppositeColor;
      borderColor: string;
      disabledBackgroundColor: string;
      disabledBackgroundOppositeColor: string;
      onHoverBackgroundColor: string;
      onHoverBackgroundOppositeColor: OppositeColor;
    };
    link: {
      color: string;
      onHoverColor: string;
    };
  };
  modals: {
    backgroundColor: string;
    backgroundOppositeColor: OppositeColor;
    specialAccentColor: string;
    specialAccentOppositeColor: OppositeColor;
  };
  forms: {
    primary: {
      labelColor: string;
    };
  };
}

export type OppositeColor = "white" | "black";
