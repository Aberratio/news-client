"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";

export const fetchArticleComments = async (_id: string) => {
  if (_id !== undefined) {
    return fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/articles/comments`, {
      method: "POST",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
      next: {
        revalidate: 360,
        tags: ["comments"],
      },
    })
      .then(async (res) => {
        return (await res.json()).comments as CommentSummarizationItem[];
      })
      .catch((error) => {
        console.error("Error showing article comments:", error);
      });
  }
};
