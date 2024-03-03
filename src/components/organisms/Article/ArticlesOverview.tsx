"use server";

import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";
import { notFound } from "next/navigation";

import OverviewWithStatsItems from "components/molecules/OverviewWithStatsItems";

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
