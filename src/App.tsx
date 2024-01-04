import styled from "styled-components";

import { OrganizationContextProvider } from "core/context/OrganizationContextProvider";

import { GlobalStyle } from "./core/styles/global";
import { ThemeProvider } from "./core/styles/ThemeProvider";
import { MenuDesktop } from "menu/desktop/MenuDesktop";

export const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <GlobalStyle />
        <OrganizationContextProvider>
          <MenuDesktop />
        </OrganizationContextProvider>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
