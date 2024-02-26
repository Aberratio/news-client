"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";

export const fetchArticleComments = async (
  _id: string
): Promise<CommentSummarizationItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/comments`,
    {
      next: { revalidate: 60, tags: ["comments"] },
      method: "POST",
      body: JSON.stringify({ _ref: _id }),
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

  if (response.status >= 300) throw new Error("Failed to fetch article");
  if (response.headers.get("content-type")?.includes("text"))
    throw new Error("Failed to fetch article");

  return (await response.json()).comments as CommentSummarizationItem[];
};
