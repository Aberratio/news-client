import { customFonts } from "./customFonts";
import { customTheme } from "./customTheme";
import { CustomStyles } from "../../core/styles/customization/CustomStyles";

export const useStyles = (): CustomStyles => {
  return {
    customFonts,
    customTheme,
  };
};
