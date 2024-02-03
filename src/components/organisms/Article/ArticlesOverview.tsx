"use client";

import { useEffect } from "react";
import { CategoryItem } from "types/CategoryItem";
import { ArticleSummarizationItem } from "../../../types/ArticleSummarizationItem";
import { useLastArticles } from "./useLastArticles";
import OverviewGrid from "components/molecules/OverviewGrid";
import { SummarizationCard } from "components/molecules/SummarizationCard/SummarizationCard";

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
        return (
          <SummarizationCard
            key={article.id}
            item={{
              ...article,
              photo: { ...article.photo, alt: "article photo" },
            }}
          />
        );
      })}
    </OverviewGrid>
  );
};
