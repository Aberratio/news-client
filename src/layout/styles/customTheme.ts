import {
  OppositeColor,
  CustomTheme,
} from "../../core/styles/customization/CustomTheme";

const WHITE: OppositeColor = "white";
const BLUE: string = "#5069A7";
const BLACK: OppositeColor = "black";
const SILVER: string = "#ccc";
const LIGHT_GREY: string = "#e7e7e6";
const DARK_GREY: string = "#262B34";
const DISABLED: string =
  "internal-light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3))";
const GREEN = "#15a752";

const PRIMARY_COLOR = "#f2f2f2;";
const PRIMARY_OPPOSITE_COLOR: OppositeColor = WHITE;
const SPECIAL_ACCENT_COLOR = SILVER;

export const customTheme: CustomTheme = {
  general: {
    borderRadius: "0px",
    errorMessageColor: "red",
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
      borderColor: BLACK,
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
