import { useState } from "react";
import { buildTabPath } from "core/builders/buildPath";
import Link from "next/link";
import styled from "styled-components";
import { TabItem } from "types/TabItem";

import Typography from "components/atoms/Typography";

import { SubMenu } from "./SubMenu";

interface NavigationItemProps {
  isActive: boolean;
  tab: TabItem;
  onClick: () => void;
}

export const NavigationItem = ({
  isActive: isItemClicked = false,
  tab,
  onClick,
}: NavigationItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(isItemClicked);

  if (!tab.categories) return null;

  const hasSubmenu = tab.categories.length > 1;

  return (
    <Container
      data-testid="navigation-item"
      onClick={onClick}
      $isActive={isActive}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      <StyledLink href={buildTabPath(tab.tabSlug)}>
        <Typography color="black">{tab.name}</Typography>
        {isActive && hasSubmenu && <SubMenu categories={tab.categories} />}
      </StyledLink>
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

  &:hover {
    p {
      color: rgb(46, 104, 150);
    }
  }
`;

const StyledLink = styled(Link)`
  list-style-type: none;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;
