import styled from "styled-components";

import { NavigationItem } from "./NavigationItem";
import { useRef, useState } from "react";
import { useOutsideClick } from "core/hooks/useOutsideClick";
import { useOrganizationInfo } from "core/context/useOrganizationInfo";

export const MainMenu = () => {
  const [activeNavigationItemIndex, setActiveNavigationItemIndex] =
    useState<number>(0);
  const mainMenuRef = useRef(null);
  const { isReady, tabs } = useOrganizationInfo();

  useOutsideClick([mainMenuRef], () => setActiveNavigationItemIndex(0));

  if (!isReady) return null;

  return (
    <Container data-testid="main-menu" ref={mainMenuRef}>
      {tabs.map((tab) => {
        return (
          <NavigationItem
            isActive={activeNavigationItemIndex === tab.id}
            key={tab.id}
            tab={tab}
            onClick={() => setActiveNavigationItemIndex(tab.id)}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  height: 100%;
  display: flex;
  gap: 16px;
  overflow: unset;
`;
