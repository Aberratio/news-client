import {} from "styled-components";

import { Theme } from "./src/core/styles/theme";

declare module "styled-components" {
  export type DefaultTheme = Theme;
}
