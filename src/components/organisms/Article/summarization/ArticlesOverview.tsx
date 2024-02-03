"use client";

import { ArticleSummarization } from "components/organisms/Article/summarization/ArticleSummarization";
import { useEffect } from "react";
import { CategoryItem } from "types/CategoryItem";
import { ArticleSummarizationItem } from "../../../../types/ArticleSummarizationItem";
import { useLastArticles } from "../useLastArticles";
import OverviewGrid from "components/molecules/OverviewGrid";

interface ArticlesOverviewProps {
  amount?: number;
  category?: CategoryItem;
  page?: number;
}

export const ArticlesOverview = ({
  amount = 30,
  category,
  page = 0,
}: ArticlesOverviewProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(category?.id ?? undefined, amount, page);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <OverviewGrid
      dataTestId={`article-summarizatoin-box-${
        category ? category.id : "latest"
      }`}
    >
      {articles.map((article: ArticleSummarizationItem) => {
        return <ArticleSummarization article={article} key={article.id} />;
      })}
    </OverviewGrid>
  );
};
