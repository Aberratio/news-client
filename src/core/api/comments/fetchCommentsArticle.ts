"use server";

import { CommentItem } from "types/CommentItem";

interface GetCommentsArticleResponse {
  articleId: number;
  articleTitle: string;
  author: string;
  date: Date;
  dislikes: number;
  id: number;
  isVisible: boolean;
  likes: number;
  text: string;
}

export const fetchCommentsArticle = async (
  articleId: number
): Promise<CommentItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/comments/article/${articleId}`,
    { next: { revalidate: 60, tags: ["comments"] } }
  );

  return mapData((await response.json()) as GetCommentsArticleResponse[]);
};

const mapData = (data: GetCommentsArticleResponse[]): CommentItem[] => {
  return [...data];
};
