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
  console.log(process.env.NEXT_PUBLIC_BASIC_URL);
  const response: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/comments?limit=${limit}`,
    {
      method: "GET",
      next: { revalidate: 60, tags: ["comments", "commentReactions"] },
    }
  );

  console.log(response);

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
  console.log(data);
  console.log(typeof data);
  return data.map((item: GetCommentsLastResponse) => {
    return {
      articleId: item.article_slug,
      author: item.author,
      date: new Date(item.datetime).toLocaleString(),
      dislikes: item.dislikes,
      id: item.id_comment,
      likes: item.likes,
      text: cutComment(item.text),
    } as CommentSummarizationItem;
  });
};
