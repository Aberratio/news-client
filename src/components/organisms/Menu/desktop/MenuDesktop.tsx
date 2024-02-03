"use client";

import styled from "styled-components";
import { TopBar } from "./TopBar";

export const MenuDesktop = () => {
  return (
    <Header data-testid="menu-desktop">
      <Container>
        <TopBar />
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
