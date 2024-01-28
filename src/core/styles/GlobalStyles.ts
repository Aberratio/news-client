import { createGlobalStyle } from "styled-components";
import { lightTheme } from "./customization/lightTheme";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${lightTheme.general.primaryColor};
    color: ${lightTheme.general.primaryOppositeColor};
}
`;
