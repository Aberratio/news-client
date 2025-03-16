"use client";

import { AppShell, Flex, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useHeadroom } from "@mantine/hooks";
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
  const [opened, { toggle }] = useDisclosure();
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
      padding="md"
    >
      <AppShell.Header mih={60}>
        <Group h="100%">
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            px={{ base: "md", xs: "xl" }}
            w="100%"
            hiddenFrom="sm"
          >
            <Flex w={30}>
              {opened ? (
                <IconX onClick={toggle} size="xs" />
              ) : (
                <IconMenu2 onClick={toggle} size="xs" />
              )}
            </Flex>
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

      <AppShell.Navbar hiddenFrom="sm" py="md" px={4} mt={60}>
        {tabs.map((tab) => {
          const hasSubmenu = tab.categories.length > 1;

          return (
            <NavLink
              key={tab.tabSlug}
              href={buildTabPath(tab.tabSlug)}
              label={tab.name}
              childrenOffset={28}
              w="96%"
            >
              {hasSubmenu &&
                tab.categories.map((category) => {
                  return (
                    <NavLink
                      key={category.slug}
                      href={`${buildCategoryPath(category.slug)}`}
                      label={category.name}
                    />
                  );
                })}
            </NavLink>
          );
        })}
      </AppShell.Navbar>

      <AppShell.Main pt={{ base: 0, sm: 250 }}>{children}</AppShell.Main>
    </AppShell>
  );
};

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 65px;
`;

const Logo = styled(Image)`
  vertical-align: middle;
  border-style: none;
  height: auto;
`;
