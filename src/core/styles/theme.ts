import { customFonts } from "core/styles/customization/customFonts";
import { lightTheme } from "core/styles/customization/lightTheme";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { shadows } from "./shadows";
import tools from "./tools";
import { spaces } from "./variables";
import { zIndices } from "./zIndices";

export interface Theme {
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  customFonts: typeof customFonts;
  customTheme: typeof lightTheme;
  shadows: typeof shadows;
  spaces: typeof spaces;
  tools: typeof tools;
  zIndices: typeof zIndices;
}

export const theme: Theme = {
  breakpoints,
  colors,
  customFonts,
  customTheme: lightTheme,
  shadows,
  spaces,
  tools,
  zIndices,
};
