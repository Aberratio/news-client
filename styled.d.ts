import "styled-components";

import { CustomTheme } from "./src/core/styles/types/CustomTheme";
import { Theme } from "./src/core/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, CustomTheme {}
}
