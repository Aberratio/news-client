"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";

interface GetCommentsLastResponse {
  article_slug: string;
  author: string;
  datetime: Date;
  dislikes: number;
  id_comment: number;
  likes: number;
  text: string;
}

export const fetchCommentsLast = async (
  limit: number
): Promise<CommentSummarizationItem[]> => {
  const response: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/comments?limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
      next: { revalidate: 60, tags: ["comments", "commentReactions"] },
    }
  );

  if (response.status >= 300) throw new Error("Failed to fetch last comments");
  if (response.headers.get("content-type")?.includes("text"))
    throw new Error("Failed to fetch last comments");

  return mapData((await response.json()) as GetCommentsLastResponse[]);
};

const cutComment = (comment: string) => {
  return comment.length > 100 ? comment.substring(0, 100) + "..." : comment;
};

const mapData = (
  data: GetCommentsLastResponse[]
): CommentSummarizationItem[] => {
  return data.map((item: GetCommentsLastResponse) => {
    return {
      articleSlug: item.article_slug,
      author: item.author,
      date: new Date(item.datetime).toLocaleString(),
      dislikes: item.dislikes,
      id: item.id_comment,
      likes: item.likes,
      text: cutComment(item.text),
    } as CommentSummarizationItem;
  });
};
