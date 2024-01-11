import styled from "styled-components";
import { TopBar } from "../../../menu/desktop/TopBar";
import { TitleBar } from "../../../menu/desktop/TitleBar";
import { LogoBar } from "./LogoBar";
import { InfoBar } from "./InfoBar";

export const MenuDesktop = () => {
  return (
    <Header>
      <Container>
        <TopBar />
        <TitleBar />
        <LogoBar />
        <InfoBar />
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
