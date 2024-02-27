"use server";

import { sanityClient } from "../sanityClient";

interface FetchNewCommentProps {
  _id: string;
  author: string;
  text: string;
  date: Date;
}

export const fetchNewComment = ({
  _id,
  author,
  text,
  date,
}: FetchNewCommentProps) => {
  try {
    sanityClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      author,
      publishedAt: date,
      text,
      likes: 0,
    });
  } catch (error) {
    console.error("Error adding comment to Sanity:", error);
  }
};
