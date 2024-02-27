"use server";

import { sanityClient } from "../sanityClient";

interface FetchArticleReactionProps {
  _id: string;
  like: number;
  dislike: number;
}

export const fetchArticleReaction = ({
  _id,
  like,
  dislike,
}: FetchArticleReactionProps) => {
  try {
    if (like * dislike === 1) {
      console.error("An error occurred adding reaction on article");
    }

    sanityClient.patch(_id).inc({ likes: like, dislikes: dislike }).commit();
  } catch (error) {
    console.error("Error adding reaction on article:", error);
  }
};
