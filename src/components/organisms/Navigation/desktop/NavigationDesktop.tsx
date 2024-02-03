"use client";

import styled from "styled-components";
import { MainMenu } from "./MainMenu";

export const NavigationDesktop = () => {
  return (
    <Wrapper data-testid="navigation-desktop">
      <Container>
        <Navigation>
          <MainMenu />
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
  background-color: #fff;
  border-bottom: 1px solid rgb(46, 104, 150);
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
