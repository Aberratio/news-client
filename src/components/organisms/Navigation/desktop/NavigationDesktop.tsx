"use client";

import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { buildTabPath } from "core/builders/buildPath";
import { theme } from "core/styles/theme";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";
import { TabItem } from "types/TabItem";

import { NavigationMenu } from "./NavigationMenu";

import classes from "./NavigationDesktop.module.css";

export const NavigationDesktop = () => {
  const { tabs } = useOrganizationInfo();

  return (
    <Wrapper data-testid="navigation-desktop">
      <Container>
        <Navigation>
          <Group h="100%" gap={0} visibleFrom="sm">
            {tabs.map((tab: TabItem) => {
              const hasSubmenu = tab.categories.length > 1 || tab.tabAction;

              if (hasSubmenu) {
                return (
                  <HoverCard
                    width={600}
                    position="bottom"
                    radius="md"
                    shadow="md"
                    withinPortal
                    key={tab.tabSlug}
                  >
                    <HoverCard.Target>
                      <a href="#" className={classes.link}>
                        <Center inline>
                          <Box component="span" mr={5}>
                            {tab.name}
                          </Box>
                          <IconChevronDown
                            size={16}
                            color={theme.colors.blue[6]}
                            fill={theme.colors.blue[6]}
                          />
                        </Center>
                      </a>
                    </HoverCard.Target>

                    <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                      <Group justify="space-between" px="md">
                        <Text fw={500}>{tab.name}</Text>
                        <Anchor href={buildTabPath(tab.tabSlug)} fz="xs">
                          Pokaż wszystkie
                        </Anchor>
                      </Group>

                      <Divider my="sm" />

                      {tab.categories.length > 0 && (
                        <SimpleGrid cols={2} spacing={0}>
                          {tab.categories.map((category) => (
                            <UnstyledButton
                              className={classes.subLink}
                              key={category.slug}
                            >
                              <Group wrap="nowrap" align="flex-start">
                                <img
                                  src={category.image?.path}
                                  alt={category.image?.alt}
                                  width="36px"
                                  height="36px"
                                  style={{
                                    borderRadius: "12%",
                                  }}
                                />
                                <div>
                                  <Text size="sm" fw={500}>
                                    {category.name}
                                  </Text>
                                  <Text size="xs" c="dimmed">
                                    {category.description}
                                  </Text>
                                </div>
                              </Group>
                            </UnstyledButton>
                          ))}
                        </SimpleGrid>
                      )}

                      {tab.tabAction && (
                        <div className={classes.dropdownFooter}>
                          <Group justify="space-between">
                            <div>
                              <Text fw={500} fz="sm">
                                {tab.tabAction.title}
                              </Text>
                              <Text size="xs" c="dimmed">
                                {tab.tabAction.description}
                              </Text>
                            </div>
                            <Button
                              variant="default"
                              onClick={() => {
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                tab.tabAction &&
                                  window.open(tab.tabAction.ctaLink, "_blank");
                              }}
                            >
                              {tab.tabAction.ctaText}
                            </Button>
                          </Group>
                        </div>
                      )}
                    </HoverCard.Dropdown>
                  </HoverCard>
                );
              }

              return (
                <a
                  href={buildTabPath(tab.tabSlug)}
                  key={tab.tabSlug}
                  className={classes.link}
                >
                  {tab.name}
                </a>
              );
            })}
          </Group>

          <NavigationMenu />
        </Navigation>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  z-index: 1000;
  overflow: unset;
`;
const Container = styled.div`
  width: 100%;
  height: 55px;
  z-index: 2000;
  background-color: white;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
  transform: translateY(0%);
  overflow: unset;
`;

const Navigation = styled.nav`
  display: block;
  max-width: calc(100% - 30px);
  width: 1350px;
  margin: 0 auto;
  height: 55px;
  position: relative;
`;
