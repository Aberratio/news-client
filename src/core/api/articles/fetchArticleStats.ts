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

  return mapData(((await response.json()) as GetArticleStatsResponse[])[0]);
};

const mapData = (data: GetArticleStatsResponse): StatisticsItem => {
  return {
    comments: Number(data.comments) ?? 0,
    dislikes: Number(data.dislikes) ?? 0,
    likes: Number(data.likes) ?? 0,
    views: Number(data.views) + 1 ?? 1,
  } as StatisticsItem;
};
