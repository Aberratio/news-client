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
  articleId: string
): Promise<CommentItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/comments?articleSlug=${articleId}`,
    { next: { revalidate: 60, tags: ["comments"] } }
  );

  if (response.status >= 300) throw new Error("Failed to fetch article");
  if (response.headers.get("content-type")?.includes("text"))
    throw new Error("Failed to fetch article");

  return mapData((await response.json()) as GetCommentsArticleResponse[]);
};

const mapData = (data: GetCommentsArticleResponse[]): CommentItem[] => {
  return data.map((item: GetCommentsArticleResponse) => {
    return {
      articleId: item.article_slug,
      author: item.author,
      date: new Date(item.datetime).toLocaleString(),
      dislikes: item.dislikes,
      id: item.id_comment,
      likes: item.likes,
      text: item.text,
    } as CommentItem;
  });
};
