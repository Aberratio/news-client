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
    {
      next: { revalidate: 60, tags: ["stats"] },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    }
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
