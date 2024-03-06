"use client";

import styled from "styled-components";

import { DesktopLogoBar } from "./DesktopLogoBar";
import { SubTitleBar } from "./SubTitleBar";
import { TitleBar } from "./TitleBar";

export const MenuDesktop = () => {
  return (
    <Header data-testid="menu-desktop">
      <Container>
        <TitleBar />
        <DesktopLogoBar />
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
