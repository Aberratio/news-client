import styled from "styled-components";
import { MainMenu } from "./MainMenu";

export const NavigationDesktop = () => {
  return (
    <Wrapper>
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
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05) inset;
  transform: translateY(0%);
  overflow: unset;
`;

const Navigation = styled.nav`
  display: block;
  max-width: calc(100% - 30px);
  width: 1050px;
  margin: 0 auto;
  height: 55px;
  position: relative;
`;
