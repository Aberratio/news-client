import { useRef, useState } from "react";
import { useOutsideClick } from "core/hooks/useOutsideClick";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";

import { NavigationItem } from "./NavigationItem";

export const NavigationMenu = () => {
  const [activeNavigationItemIndex, setActiveNavigationItemIndex] =
    useState<number>(-1);
  const mainMenuRef = useRef(null);
  const { tabs } = useOrganizationInfo();

  useOutsideClick([mainMenuRef], () => setActiveNavigationItemIndex(-1));

  return (
    <Container data-testid="naviagtion-menu" ref={mainMenuRef}>
      {tabs.map((tab, index) => {
        return (
          <NavigationItem
            isActive={activeNavigationItemIndex === index}
            key={index}
            tab={tab}
            onClick={() => {
              setActiveNavigationItemIndex(index);
            }}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  height: 100%;
  display: flex;
  gap: 40px;
  overflow: unset;
`;
