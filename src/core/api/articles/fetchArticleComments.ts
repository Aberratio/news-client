"use server";

import { CommentItem } from "types/CommentItem";

interface GetCommentsArticleResponse {
  article_slug: string;
  author: string;
  datetime: Date;
  dislikes: number;
  id_comment: number;
  likes: number;
  text: string;
}

export const fetchArticleComments = async (
  articleSlug: string
): Promise<CommentItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/comments?articleSlug=${articleSlug}`,
    {
      next: { revalidate: 60, tags: ["comments"] },
      method: "GET",
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

  return mapData((await response.json()) as GetCommentsArticleResponse[]);
};

const mapData = (data: GetCommentsArticleResponse[]): CommentItem[] => {
  return data.map((item: GetCommentsArticleResponse) => {
    return {
      articleSlug: item.article_slug,
      author: item.author,
      date: new Date(item.datetime).toLocaleString(),
      dislikes: item.dislikes,
      id: item.id_comment,
      likes: item.likes,
      text: item.text,
    } as CommentItem;
  });
};
