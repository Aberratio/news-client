"use server";

import { ArticleSummarizationItem } from "../../../types/ArticleSummarizationItem";
import OverviewGrid from "components/molecules/OverviewGrid";
import { SummarizationCard } from "components/molecules/SummarizationCard/SummarizationCard";
import { fetchArticlesLast } from "core/api/fetchArticlesLast";

interface ArticlesOverviewProps {
  amount?: number;
  categoryId?: number;
  page?: number;
}

export const ArticlesOverview = async ({
  amount = 30,
  categoryId,
  page = 0,
}: ArticlesOverviewProps) => {
  const articles = await fetchArticlesLast({
    category: categoryId,
    limit: amount,
    page,
  });

  return (
    <OverviewGrid
      dataTestId={`article-summarizatoin-box-${categoryId ?? "latest"}`}
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
