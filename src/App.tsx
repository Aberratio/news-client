import styled from "styled-components";

import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";

import Footer from "components/organisms/Footer";
import { MenuDesktop } from "components/organisms/Menu/desktop/MenuDesktop";
import { NavigationDesktop } from "components/organisms/Navigation/NavigationDesktop";
import { PageContainer } from "page/PageContainer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./core/styles/ThemeProvider";
import { GlobalStyle } from "./core/styles/global";

export const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <GlobalStyle />
        <BrowserRouter>
          <OrganizationContextProvider>
            <MenuDesktop />
            <NavigationDesktop />
            <PageContainer />
            <Footer />
          </OrganizationContextProvider>
        </BrowserRouter>
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
