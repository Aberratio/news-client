"use server";

import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";
import NewsBar from "../../organisms/NewsBar";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";
import Box from "components/atoms/Box";

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
      <NewsBar article={article} />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </Box>
  );
};
