import { fonts } from "./fonts";
import { lightTheme } from "./lightTheme";
import { CustomStyles } from "../types/CustomStyles";

export const useStyles = (): CustomStyles => {
  return {
    customFonts: fonts,
    customTheme: lightTheme,
  };
};
