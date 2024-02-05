"use server";

import OverviewWithStatsItems from "components/molecules/OverviewWithStatsItems";
import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";

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
    <OverviewWithStatsItems
      dataTestId={`article-summarizatoin-box-${categoryId}`}
      items={articles}
    />
  );
};
