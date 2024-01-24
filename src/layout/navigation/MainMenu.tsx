import styled from "styled-components";

import { NavigationItem } from "./NavigationItem";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "common/hooks/useOutsideClick";
import { useCategories } from "./useCategories";

export const MainMenu = () => {
  const [activeNavigationItemIndex, setActiveNavigationItemIndex] =
    useState<number>(0);
  const mainMenuRef = useRef(null);
  const { isLoading, tabs, loadTabs } = useCategories();

  useOutsideClick([mainMenuRef], () => setActiveNavigationItemIndex(0));

  useEffect(() => {
    loadTabs();
  }, []);

  useEffect(() => {
    console.log("tabs", tabs);
  }, [tabs]);
  if (isLoading) return null;

  return (
    <Container data-test-id="main-menu" ref={mainMenuRef}>
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
