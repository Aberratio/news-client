"use server";

import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";
import { NewsBar } from "../../organisms/NewsBar/NewsBar";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

interface HomePageTemplateProps {
  article: ArticleSummarizationItem;
  children: React.ReactNode;
}

export const HomePageTemplate = ({
  article,
  children,
}: HomePageTemplateProps) => {
  return (
    <div data-testid="home-page">
      <NewsBar article={article} />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};
