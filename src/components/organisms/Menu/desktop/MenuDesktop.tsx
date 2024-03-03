"use client";

import styled from "styled-components";

import { BigLogoBar } from "./BigLogoBar";
// import { BigTopBar } from "./BigTopBar";
import { SubTitleBar } from "./SubTitleBar";
import { TitleBar } from "./TitleBar";

export const MenuDesktop = () => {
  return (
    <Header data-testid="menu-desktop">
      <Container>
        {/* <BigTopBar /> */}
        <TitleBar />
        <BigLogoBar />
        <SubTitleBar />
      </Container>
    </Header>
  );
};

const Header = styled.header`
  display: block;
`;
const Container = styled.div`
  background-color: #fff;
`;
