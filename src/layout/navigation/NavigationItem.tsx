import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { SubMenu } from "./SubMenu";
import { TabItem } from "./useCategories";

interface NavigationItemProps {
  isActive: boolean;
  tab: TabItem;
  onClick: () => void;
}

export const NavigationItem = ({
  isActive,
  tab,
  onClick,
}: NavigationItemProps) => {
  return (
    <Container
      data-test-id="navigation-item"
      onClick={onClick}
      $isActive={isActive}
    >
      <Link href="#">
        <Typography>{tab.name}</Typography>
        {isActive && <SubMenu categories={tab.categories} />}
      </Link>
    </Container>
  );
};

const Container = styled.li<{ $isActive: boolean }>`
  position: relative;
  margin: 0;
  list-style-type: none;
  height: 100%;
  cursor: pointer;
  overflow: unset;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% + 8px);
    height: 5px;
    bottom: 0;
    background-color: ${({ $isActive }) =>
      $isActive ? "rgb(46, 104, 150)" : "white"};
  }
`;

const Link = styled.a`
  list-style-type: none;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;
