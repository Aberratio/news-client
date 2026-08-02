"use client";

import { ActionIcon, AppShell, Flex, Group, NavLink } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { buildCategoryPath, buildTabPath } from "core/builders/buildPath";
import Image from "next/image";
import Link from "next/link";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

import { DesktopLogoBar } from "components/organisms/Menu/desktop/DesktopLogoBar";
import { SubTitleBar } from "components/organisms/Menu/desktop/SubTitleBar";
import { TitleBar } from "components/organisms/Menu/desktop/TitleBar";
import { NavigationDesktop } from "components/organisms/Navigation/desktop/NavigationDesktop";

interface MobileNavbarProps {
  children: React.ReactNode;
}

export const MobileNavbar = ({ children }: MobileNavbarProps) => {
  const [opened, { close, toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const { generalConfig, tabs } = useOrganizationInfo();

  if (!generalConfig) return null;

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="0"
    >
      <AppShell.Header mih={60} withBorder>
        <Group h="100%" gap={0}>
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            px={{ base: "md", xs: "xl" }}
            w="100%"
            hiddenFrom="sm"
          >
            <ActionIcon
              aria-label={opened ? "Zamknij menu" : "Otworz menu"}
              onClick={toggle}
              size="lg"
              variant="subtle"
              color="dark"
            >
              {opened ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </ActionIcon>
            <LogoWrapper href="/">
              <Logo
                src={generalConfig.footerLogo.path}
                alt={generalConfig.footerLogo.alt}
                width={300}
                height={30}
              />
            </LogoWrapper>
          </Flex>
          <Flex
            direction="column"
            display="flex"
            justify="space-between"
            visibleFrom="sm"
            style={{
              flex: 1,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000000,
              transform: `translate3d(0, ${pinned ? 0 : "-900px"}, 0)`,
              transition: "transform 300ms ease",
              backgroundColor: "var(--mantine-color-body)",
            }}
          >
            <TitleBar />
            <DesktopLogoBar />
            <SubTitleBar />
            <NavigationDesktop />
          </Flex>
          {!pinned && (
            <Flex
              style={{
                flex: 1,
              }}
              visibleFrom="sm"
              direction="row"
              justify="space-between"
              align="center"
              px={{ base: "md", xs: "xl" }}
              w="100%"
              gap="xl"
            >
              <LogoWrapper href="/">
                <Logo
                  src={generalConfig.footerLogo.path}
                  alt={generalConfig.footerLogo.alt}
                  width={300}
                  height={30}
                />
              </LogoWrapper>
              <NavigationDesktop />
            </Flex>
          )}
        </Group>
      </AppShell.Header>

      <MobileOnlyNavbar hiddenFrom="sm" py="md" px="xs" mt={60}>
        {tabs.map((tab) => {
          const hasSubmenu = tab.categories.length > 1;

          return (
            <NavLink
              key={tab.tabSlug}
              href={buildTabPath(tab.tabSlug)}
              label={tab.name}
              childrenOffset={28}
              onClick={() => {
                if (!hasSubmenu) close();
              }}
              w="100%"
            >
              {hasSubmenu &&
                tab.categories.map((category) => {
                  return (
                    <NavLink
                      key={category.slug}
                      href={`${buildCategoryPath(category.slug)}`}
                      label={category.name}
                      onClick={close}
                    />
                  );
                })}
            </NavLink>
          );
        })}
      </MobileOnlyNavbar>

      <AppShell.Main pt={{ base: 60, sm: 250 }}>{children}</AppShell.Main>
    </AppShell>
  );
};

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 65px;
  min-width: 0;
`;

const Logo = styled(Image)`
  vertical-align: middle;
  border-style: none;
  height: auto;
  max-height: 36px;
  width: min(220px, 58vw);
  object-fit: contain;
`;

const MobileOnlyNavbar = styled(AppShell.Navbar)`
  ${({ theme }) => `
    @media screen and (min-width: ${theme.breakpoints.tabletS}) {
      display: none;
    }
  `}
`;
