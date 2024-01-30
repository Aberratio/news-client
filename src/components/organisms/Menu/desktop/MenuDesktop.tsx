"use client";

import styled from "styled-components";
import { TopBar } from "./TopBar";

import { LogoBar } from "./LogoBar";
import { SubTitleBar } from "./SubTitleBar";
import { TitleBar } from "./TitleBar";

export const MenuDesktop = () => {
  return (
    <Header data-testid="menu-desktop">
      <Container>
        <TopBar />
        <TitleBar />
        <LogoBar />
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
