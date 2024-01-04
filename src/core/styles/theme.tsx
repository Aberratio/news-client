import type { Theme as StyledSystemTheme } from "styled-system";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { shadows } from "./shadows";
import tools from "./tools";
import { spaces } from "./variables";
import { zIndices } from "./zIndices";

export interface Theme extends StyledSystemTheme {
  baseFontSize: number;
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  shadows: typeof shadows;
  spaces: typeof spaces;
  tools: typeof tools;
  zIndices: typeof zIndices;
}

export const theme: Theme = {
  baseFontSize: 16,
  breakpoints,
  colors,
  shadows,
  spaces,
  tools,
  zIndices,
};
