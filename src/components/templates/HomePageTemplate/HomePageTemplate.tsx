"use server";

import { Flex } from "@mantine/core";
import { fetchPinnedArticle } from "core/api/articles/fetchPinnedArticle";

import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

import PinnedArticle from "../../organisms/PinnedArticle";

interface HomePageTemplateProps {
  children: React.ReactNode;
}

export const HomePageTemplate = async ({ children }: HomePageTemplateProps) => {
  const pinnedArticle = await fetchPinnedArticle();

  return (
    <Flex
      direction="column"
      gap="md"
      p="md"
      mt="md"
      style={{ overflow: "visible" }}
    >
      {pinnedArticle && <PinnedArticle article={pinnedArticle} />}
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </Flex>
  );
};
