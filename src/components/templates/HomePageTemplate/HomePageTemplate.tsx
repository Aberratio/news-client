"use server";

import { fetchPinnedArticle } from "core/api/articles/fetchPinnedArticle";

import Box from "components/atoms/Box";
import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

import PinnedArticle from "../../organisms/PinnedArticle";

interface HomePageTemplateProps {
  children: React.ReactNode;
}

export const HomePageTemplate = async ({ children }: HomePageTemplateProps) => {
  const pinnedArticle = await fetchPinnedArticle();

  return (
    <Box dataTestId="home-page" padding="0 12px">
      {pinnedArticle && <PinnedArticle article={pinnedArticle} />}
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </Box>
  );
};
