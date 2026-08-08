import { CustomTheme,OppositeColor } from "../types/CustomTheme";

const WHITE: OppositeColor = "white";
const BLUE = "#5069A7";
const BLACK: OppositeColor = "black";
const SILVER = "#ccc";
const LIGHT_GREY = "#e7e7e6";
const DARK_GREY = "#262B34";
const DISABLED =
  "internal-light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3))";
const GREEN = "#15a752";

const PRIMARY_COLOR = "rgb(46,104,150)";
const PRIMARY_OPPOSITE_COLOR: OppositeColor = WHITE;
const SECONDARY_COLOR = "#15a752";
const SECONDARY_OPPOSITE_COLOR: OppositeColor = WHITE;
const TERTIARY_COLOR = "rgb(184,0,0)";
const TERTIARY_OPPOSITE_COLOR: OppositeColor = WHITE;

const SPECIAL_ACCENT_COLOR = SILVER;

export const darkTheme: CustomTheme = {
  general: {
    borderRadius: "8px",
    errorMessageColor: "red",
    primaryColor: PRIMARY_COLOR,
    primaryOppositeColor: PRIMARY_OPPOSITE_COLOR,
    secondaryColor: SECONDARY_COLOR,
    secondaryOppositeColor: SECONDARY_OPPOSITE_COLOR,
    tertiaryColor: TERTIARY_COLOR,
    tertiaryOppositeColor: TERTIARY_OPPOSITE_COLOR,
  },
  publicationVisual: {
    cardBorderColor: "#3a414d",
    cardBorderWidth: "1px",
    cardHoverColor: SECONDARY_COLOR,
    cardShadow: "0 10px 28px rgb(0 0 0 / 28%)",
    cardShadowHover: "0 14px 34px rgb(0 0 0 / 34%)",
    cornerRadius: "8px",
    density: "comfortable",
    footerAccentColor: SECONDARY_COLOR,
    footerBackgroundColor: "#222222",
    footerCopyrightBackgroundColor: "#151515",
    formFocusShadow: "0 0 0 3px rgb(46 104 150 / 22%)",
    headerAccentColor: TERTIARY_COLOR,
    headerBackgroundColor: PRIMARY_COLOR,
    mobileNavigationBackgroundColor: SECONDARY_COLOR,
    mutedBorderColor: "#3a414d",
    sectionHeaderBackgroundColor: BLACK,
    sectionHeaderBorderColor: PRIMARY_COLOR,
    sectionHeaderColor: WHITE,
    submenuActiveBackgroundColor: PRIMARY_COLOR,
    themePreset: "classic",
  },
  buttons: {
    primary: {
      backgroundColor: WHITE,
      backgroundOppositeColor: BLACK,
      borderColor: BLUE,
      disabledBackgroundColor: DISABLED,
      disabledBackgroundOppositeColor: DARK_GREY,
      onHoverBackgroundColor: BLUE,
      onHoverBackgroundOppositeColor: WHITE,
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
