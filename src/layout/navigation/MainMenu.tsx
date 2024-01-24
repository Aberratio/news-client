import styled from "styled-components";

import { NavigationItem } from "./NavigationItem";
import { useRef, useState } from "react";
import { useOutsideClick } from "common/hooks/useOutsideClick";

export interface Categories {
  id: number;
  name: string;
}

export interface TabItem {
  id: number;
  name: string;
  categories: Categories[];
}

const mockedTabs: TabItem[] = [
  {
    id: 1,
    name: "Wiadomości",
    categories: [
      {
        id: 1,
        name: "aktualności",
      },
      {
        id: 2,
        name: "różności",
      },
      {
        id: 3,
        name: "kultura",
      },
      {
        id: 6,
        name: "dolina baryczy",
      },
    ],
  },
  {
    id: 2,
    name: "Sport",
    categories: [
      {
        id: 5,
        name: "wiadomości sportowe",
      },
    ],
  },
  {
    id: 3,
    name: "Sylwetki",
    categories: [
      {
        id: 4,
        name: "sylwetki",
      },
    ],
  },
];

export const MainMenu = () => {
  const [activeNavigationItemIndex, setActiveNavigationItemIndex] =
    useState<number>(0);
  const mainMenuRef = useRef(null);

  useOutsideClick([mainMenuRef], () => setActiveNavigationItemIndex(0));

  return (
    <Container data-test-id="main-menu" ref={mainMenuRef}>
      {mockedTabs.map((tab) => {
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
