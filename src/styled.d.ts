import {} from "styled-components";

import { Theme } from "./core/styles/theme";

declare module "styled-components" {
  export type DefaultTheme = Theme;
}
