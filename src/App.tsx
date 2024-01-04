import styled from "styled-components";

import { OrganizationContextProvider } from "core/context/OrganizationContextProvider";

import { GlobalStyle } from "./core/styles/global";
import { ThemeProvider } from "./core/styles/ThemeProvider";

export const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <GlobalStyle />
        <OrganizationContextProvider>
          <p>test</p>
        </OrganizationContextProvider>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 120px 1600px 1fr;
  overflow: hidden;
`;
