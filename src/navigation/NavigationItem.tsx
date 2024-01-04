import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { SubMenu } from "./SubMenu";

export const NavigationItem = () => {
  return (
    <Container>
      <Link href="#">
        <Typography>Wiadomości</Typography>
        <SubMenu />
      </Link>
    </Container>
  );
};

const Container = styled.li`
  position: static;
  margin: 0;
  list-style-type: none;
  height: 100%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% + 36px);
    height: 5px;
    bottom: 0;
    left: -18px;
    background-color: rgb(46, 104, 150);
  }
`;

const Link = styled.a`
  list-style-type: none;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;
