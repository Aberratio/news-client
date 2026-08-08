"use server";

import { Flex } from "@mantine/core";

import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

interface HomePageTemplateProps {
  children: React.ReactNode;
}

export const HomePageTemplate = ({ children }: HomePageTemplateProps) => {
  return (
    <Flex
      direction="column"
      gap={{ base: "md", sm: "lg" }}
      py={{ base: "md", sm: "lg" }}
      px={0}
      mt={{ base: "sm", sm: "md" }}
      style={{ overflow: "visible" }}
    >
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </Flex>
  );
};
