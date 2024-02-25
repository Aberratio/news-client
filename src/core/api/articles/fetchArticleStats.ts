"use server";

import { StatisticsItem } from "types/StatisticsItem";

interface GetArticleStatsResponse {
  comments: number;
  dislikes: number;
  likes: number;
  views: number;
}

export const fetchArticleStats = async (
  articleSlug: string
): Promise<StatisticsItem> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/stats?articleSlug=${articleSlug}`,
    { next: { revalidate: 60, tags: ["stats"] } }
  );

  if (response.status >= 300) throw new Error("Failed to fetch article stats");
  if (response.headers.get("content-type")?.includes("text"))
    throw new Error("Failed to fetch article stats");

  return mapData((await response.json()) as GetArticleStatsResponse);
};

const mapData = (data: GetArticleStatsResponse): StatisticsItem => {
  return {
    comments: 0,
    dislikes: data.dislikes ?? 0,
    likes: data.likes ?? 0,
    views: data.views ?? 1,
  } as StatisticsItem;
};
