import { CustomFonts } from "../types/CustomFonts";

const FONT_FAMILY_PRIMARY = "'Cabin', sans-serif";
// const FONT_FAMILY_SECONDARY = "Roboto-Medium";
const WEIGHT_100 = 100;
const WEIGHT_200 = 200;
const WEIGHT_300 = 300;
const WEIGHT_400 = 400;
const WEIGHT_500 = 500;

export const fonts: CustomFonts = {
  h1: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "30px",
    lineHeight: "1.3",
    fontWeight: WEIGHT_500,
  },
  h1T: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: WEIGHT_400,
  },
  h1M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "30px",
    lineHeight: "1.3",
    fontWeight: WEIGHT_300,
  },
  h2: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: WEIGHT_300,
  },
  h2M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: WEIGHT_300,
  },
  h3: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: WEIGHT_200,
  },
  h3M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: WEIGHT_200,
  },
  body: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "19px",
    lineHeight: "1.5",
    fontWeight: WEIGHT_200,
  },
  bodyM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: WEIGHT_100,
  },
  small: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: WEIGHT_100,
  },
  smallM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: WEIGHT_100,
  },
};
