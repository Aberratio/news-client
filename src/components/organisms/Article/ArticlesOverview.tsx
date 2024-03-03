"use server";

import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";
import { notFound } from "next/navigation";

import ArticlesOverviewBox from "components/molecules/ArticlesOverviewBox";

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

  if (!articles) {
    notFound();
  }

  return (
    <ArticlesOverviewBox
      dataTestId={`articles-overview-box-${categorySlug}`}
      items={articles}
    />
  );
};
