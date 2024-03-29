import { CustomFonts } from "../types/CustomFonts";

const FONT_FAMILY_PRIMARY = "'Spectral', sans-serif";
const FONT_FAMILY_SECONDARY =
  'source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif';

const WEIGHT_100 = 100;
const WEIGHT_200 = 200;
const WEIGHT_300 = 300;
const WEIGHT_400 = 400;
const WEIGHT_500 = 500;

export const fonts: CustomFonts = {
  title: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "32px",
    lineHeight: "1.75",
    fontWeight: WEIGHT_500,
  },
  titleM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "24px",
    lineHeight: "1.5",
    fontWeight: WEIGHT_400,
  },
  h1: {
    fontFamily: FONT_FAMILY_SECONDARY,
    fontSize: "40px",
    lineHeight: "1.25",
    fontWeight: WEIGHT_500,
  },
  h1M: {
    fontFamily: FONT_FAMILY_SECONDARY,
    fontSize: "30px",
    lineHeight: "1.15",
    fontWeight: WEIGHT_300,
  },
  h2: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "22px",
    lineHeight: "32px",
    fontWeight: WEIGHT_200,
  },
  h2M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: WEIGHT_200,
  },
  h3: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "20px",
    lineHeight: "1.25",
    fontWeight: WEIGHT_200,
  },
  h3M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "1.15",
    fontWeight: WEIGHT_200,
  },
  body: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: WEIGHT_200,
  },
  bodyM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "1.5",
    fontWeight: WEIGHT_100,
  },
  small: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: WEIGHT_100,
  },
  smallM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: WEIGHT_100,
  },
  article: {
    fontFamily: FONT_FAMILY_SECONDARY,
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: WEIGHT_200,
  },
  articleM: {
    fontFamily: FONT_FAMILY_SECONDARY,
    fontSize: "16px",
    lineHeight: "28px",
    fontWeight: WEIGHT_200,
  },
};
