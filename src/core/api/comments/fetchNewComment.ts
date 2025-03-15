"use server";

import { revalidateTag } from "next/cache";

import { sanityClient } from "../sanityClient";

interface FetchNewCommentProps {
  _id: string;
  author: string;
  text: string;
  date: Date;
}

export const fetchNewComment = async ({
  _id,
  author,
  text,
  date,
}: FetchNewCommentProps) => {
  try {
    await sanityClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      author,
      publishedAt: date,
      text,
      likes: 0,
      dislikes: 0,
    });

    setTimeout(() => {
      revalidateTag("comments");
    }, 1000);
  } catch (error) {
    console.error("Error adding comment to Sanity:", error);
  }
};
