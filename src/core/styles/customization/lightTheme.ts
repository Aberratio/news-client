import { CustomTheme, OppositeColor } from "../types/CustomTheme";

// Default publication colors
const BLUE = "#2e6896"; //rgb(46,104,150)";
const GREEN = "#15a752";
const RED = "#b80000"; //rgb(184,0,0)";

const WHITE: OppositeColor = "white";
const BLACK: OppositeColor = "black";

const SILVER = "#ccc";
const LIGHT_GREY = "#e7e7e6";
const DARK_GREY = "#262B34";
const DISABLED =
  "internal-light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3))";

const PRIMARY_COLOR = BLUE;
const PRIMARY_OPPOSITE_COLOR: OppositeColor = WHITE;
const SECONDARY_COLOR = GREEN;
const SECONDARY_OPPOSITE_COLOR: OppositeColor = WHITE;
const TERTIARY_COLOR = RED;
const TERTIARY_OPPOSITE_COLOR: OppositeColor = WHITE;

const SPECIAL_ACCENT_COLOR = SILVER;

export const lightTheme: CustomTheme = {
  general: {
    borderRadius: "8px",
    errorMessageColor: RED,
    primaryColor: PRIMARY_COLOR,
    primaryOppositeColor: PRIMARY_OPPOSITE_COLOR,
    secondaryColor: SECONDARY_COLOR,
    secondaryOppositeColor: SECONDARY_OPPOSITE_COLOR,
    tertiaryColor: TERTIARY_COLOR,
    tertiaryOppositeColor: TERTIARY_OPPOSITE_COLOR,
  },
  publicationVisual: {
    cardBorderColor: "#e6e8eb",
    cardBorderWidth: "1px",
    cardHoverColor: SECONDARY_COLOR,
    cardShadow: "0 10px 28px rgb(25 31 40 / 12%)",
    cardShadowHover: "0 14px 34px rgb(25 31 40 / 16%)",
    cornerRadius: "8px",
    density: "comfortable",
    footerAccentColor: SECONDARY_COLOR,
    footerBackgroundColor: "#222222",
    footerCopyrightBackgroundColor: "#151515",
    formFocusShadow: "0 0 0 3px rgb(46 104 150 / 16%)",
    headerAccentColor: TERTIARY_COLOR,
    headerBackgroundColor: PRIMARY_COLOR,
    mobileNavigationBackgroundColor: SECONDARY_COLOR,
    mutedBorderColor: "#d7dce0",
    sectionHeaderBackgroundColor: WHITE,
    sectionHeaderBorderColor: PRIMARY_COLOR,
    sectionHeaderColor: BLACK,
    submenuActiveBackgroundColor: PRIMARY_COLOR,
    themePreset: "classic",
  },
  buttons: {
    primary: {
      backgroundColor: WHITE,
      backgroundOppositeColor: BLACK,
      borderColor: BLACK,
      disabledBackgroundColor: DISABLED,
      disabledBackgroundOppositeColor: DARK_GREY,
      onHoverBackgroundColor: PRIMARY_COLOR,
      onHoverBackgroundOppositeColor: PRIMARY_OPPOSITE_COLOR,
    },
    secondary: {
      backgroundColor: PRIMARY_COLOR,
      backgroundOppositeColor: PRIMARY_OPPOSITE_COLOR,
      borderColor: "transparent",
      disabledBackgroundColor: DISABLED,
      disabledBackgroundOppositeColor: DARK_GREY,
      onHoverBackgroundColor: DARK_GREY,
      onHoverBackgroundOppositeColor: WHITE,
    },
    tertiary: {
      backgroundColor: LIGHT_GREY,
      backgroundOppositeColor: BLACK,
      borderColor: SPECIAL_ACCENT_COLOR,
      disabledBackgroundColor: DISABLED,
      disabledBackgroundOppositeColor: DARK_GREY,
      onHoverBackgroundColor: LIGHT_GREY,
      onHoverBackgroundOppositeColor: BLACK,
    },
    link: {
      color: SILVER,
      onHoverColor: GREEN,
    },
  },
  modals: {
    backgroundColor: BLACK,
    backgroundOppositeColor: WHITE,
    specialAccentColor: PRIMARY_COLOR,
    specialAccentOppositeColor: WHITE,
  },
  forms: {
    primary: {
      labelColor: WHITE,
    },
  },
};
