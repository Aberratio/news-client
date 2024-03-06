"use client";

import styled from "styled-components";

import { NavigationMenu } from "./NavigationMenu";

export const NavigationDesktop = () => {
  return (
    <Wrapper data-testid="navigation-desktop">
      <Container>
        <Navigation>
          <NavigationMenu />
        </Navigation>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  z-index: 1000;
  overflow: unset;
`;
const Container = styled.div`
  width: 100%;
  height: 55px;
  z-index: 2000;
  background-color: white;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
  transform: translateY(0%);
  overflow: unset;
`;

const Navigation = styled.nav`
  display: block;
  max-width: calc(100% - 30px);
  width: 1350px;
  margin: 0 auto;
  height: 55px;
  position: relative;
`;
