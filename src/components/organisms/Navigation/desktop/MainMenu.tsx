import styled from "styled-components";

import { NavigationItem } from "./NavigationItem";
import { useRef, useState } from "react";
import { useOutsideClick } from "core/hooks/useOutsideClick";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";

export const MainMenu = () => {
  const [activeNavigationItemIndex, setActiveNavigationItemIndex] =
    useState<number>(0);
  const mainMenuRef = useRef(null);
  const { tabs } = useOrganizationInfo();

  useOutsideClick([mainMenuRef], () => setActiveNavigationItemIndex(0));

  return (
    <Container data-testid="main-menu" ref={mainMenuRef}>
      {tabs.map((tab) => {
        return (
          <NavigationItem
            isActive={activeNavigationItemIndex === tab.tabId}
            key={tab.tabId}
            tab={tab}
            onClick={() => {
              setActiveNavigationItemIndex(tab.tabId);
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
