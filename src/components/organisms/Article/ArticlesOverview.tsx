"use server";

import OverviewWithStatsItems from "components/molecules/OverviewWithStatsItems";
import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";
import { notFound } from "next/navigation";

interface ArticlesOverviewProps {
  limit?: number;
  categorySlug?: string;
  tabSlug?: string;
  page?: number;
}

export const ArticlesOverview = async ({
  limit = 30,
  categorySlug,
  page = 0,
  tabSlug,
}: ArticlesOverviewProps) => {
  const articles = await fetchArticlesLast({
    categorySlug,
    tabSlug,
    limit,
    page,
  });

  if(!articles) {
    notFound();
  }

  return (
    <OverviewWithStatsItems
      dataTestId={`article-summarizatoin-box-${categorySlug}`}
      items={articles}
    />
  );
};
