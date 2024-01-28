import { customFonts } from "./customFonts";
import { lightTheme } from "./lightTheme";
import { CustomStyles } from "../types/CustomStyles";

export const useStyles = (): CustomStyles => {
  return {
    customFonts,
    customTheme: lightTheme,
  };
};
