"use server";

import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

import Box from "components/atoms/Box";
import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

import PinnedArticle from "../../organisms/PinnedArticle";

interface HomePageTemplateProps {
  article: ArticleSummarizationItem;
  children: React.ReactNode;
}

export const HomePageTemplate = ({
  article,
  children,
}: HomePageTemplateProps) => {
  return (
    <Box dataTestId="home-page" padding="0 12px">
      <PinnedArticle article={article} />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </Box>
  );
};
