import styled from "styled-components";

import { OrganizationContextProvider } from "core/context/OrganizationContextProvider";

import { GlobalStyle } from "./core/styles/global";
import { ThemeProvider } from "./core/styles/ThemeProvider";
import { MenuDesktop } from "menu/desktop/MenuDesktop";
import { NavigationDesktop } from "navigation/NavigationDesktop";
import { PageContainer } from "page/PageContainer";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <GlobalStyle />
        <OrganizationContextProvider>
          <BrowserRouter>
            <MenuDesktop />
            <NavigationDesktop />
            <PageContainer />
          </BrowserRouter>
        </OrganizationContextProvider>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;
