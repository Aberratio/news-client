import styled from "styled-components";

import { NavigationItem } from "./NavigationItem";

export const MainMenu = () => {
  return (
    <Container>
      <NavigationItem />
      <NavigationItem />
      <NavigationItem />
      <NavigationItem />
    </Container>
  );
};

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;
