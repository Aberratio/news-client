import {} from "styled-components";

import { Theme } from "./core/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
