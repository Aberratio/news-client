import { CustomStyles } from "../types/CustomStyles";

import { fonts } from "./fonts";
import { lightTheme } from "./lightTheme";

export const useStyles = (): CustomStyles => {
  return {
    customFonts: fonts,
    customTheme: lightTheme,
  };
};
