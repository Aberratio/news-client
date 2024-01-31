"use client";

import { LinkButton } from "components/atoms/LinkButton/LinkButton";
import { Typography } from "components/atoms/Typography/Typography";
import { MenuMobile } from "components/organisms/Menu/mobile/MenuMobile";
import { aboutPagePath, buildTabPath } from "core/builders/buildPath";
import Link from "next/link";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { useState } from "react";
import { styled } from "styled-components";

export const NavigationMobile = () => {
  const { tabs } = useOrganizationInfo();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container $isOpen={isMenuOpen} data-testid="navigation-mobile">
      <MenuMobile isOpen={isMenuOpen} handleClick={handleClick} />

      {isMenuOpen && (
        <>
          <TopBar>
            <LinkButton to={aboutPagePath}>
              <Typography>O nas</Typography>
            </LinkButton>
          </TopBar>
          <NavigationMenu data-testid="navigation-mobile-menu">
            {tabs.map((tab) => {
              return (
                <NavigtionItem
                  key={tab.tabId}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={buildTabPath(tab.tabId)}>
                    <Typography variant="h2" color="white">
                      {tab.name}
                    </Typography>
                  </Link>
                </NavigtionItem>
              );
            })}
          </NavigationMenu>
        </>
      )}
    </Container>
  );
};

const Container = styled.div<{ $isOpen: boolean }>`
  ${({ $isOpen }) => `
    display: block;
    background-color: #17b978;
    z-index: 200;
    cursor: pointer;

  ${
    $isOpen &&
    `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100dvw;
      height: 100dvh;
      `
  }
  `}
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  background-color: #222;
`;

const NavigationMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin: 100px 50px 0 50px;
  background-color: #17b978;
`;

const NavigtionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  margin: 0;
  height: 2rem;
  min-width: 7rem;
  padding: 0.375rem 0.5rem;

  cursor: pointer;

  background-color: #17b978;
  border-bottom: 1px solid #ccc;
`;
