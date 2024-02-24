"use server";

import OverviewWithStatsItems from "components/molecules/OverviewWithStatsItems";
import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";

interface ArticlesOverviewProps {
  limit?: number;
  categoryId?: number;
  tabId?: number;
  page?: number;
}

export const ArticlesOverview = async ({
  limit = 30,
  categoryId,
  page = 0,
  tabId,
}: ArticlesOverviewProps) => {
  const articles = await fetchArticlesLast({
    categoryId,
    tabId,
    limit,
    page,
  });

  return (
    <OverviewWithStatsItems
      dataTestId={`article-summarizatoin-box-${categoryId}`}
      items={articles}
    />
  );
};
