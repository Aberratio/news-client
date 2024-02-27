"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";

export const fetchArticleComments = async (_id: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/articles/comments`, {
    method: "POST",
    body: JSON.stringify({ _id }),
    next: {
      tags: ["comments"],
    },
  })
    .then(async (res) => {
      return ((await res.json())).comments as CommentSummarizationItem[];
    })
    .catch((error) => {
      console.error("Error adding comment:", error);
    });
};
