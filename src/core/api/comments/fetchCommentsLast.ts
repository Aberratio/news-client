"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";

interface GetCommentsLastResponse {
  articleId: number;
  articleTitle: string;
  author: string;
  text: string;
}

export const fetchCommentsLast = async (
  limit: number
): Promise<CommentSummarizationItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/comments/last?limit=${limit}`,
    { next: { revalidate: 60, tags: ["comments"] } }
  );

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
      articleId: item.articleId,
      articleTitle: item.articleTitle,
      author: item.author,
      text: cutComment(item.text),
    } as CommentSummarizationItem;
  });
};
