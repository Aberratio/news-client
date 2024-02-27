"use server";

import { sanityClient } from "../sanityClient";

interface FetchCommentReactionProps {
  commentId: string;
  like: number;
  dislike: number;
}

export const fetchCommentReaction = ({
  commentId,
  like,
  dislike,
}: FetchCommentReactionProps): void => {
  try {
    if (like * dislike === 1) {
      console.error("Error adding reaction on comment");
    }

    sanityClient
      .patch(commentId)
      .inc({ likes: like, dislikes: dislike })
      .commit();
  } catch (error) {
    console.error("Error adding reaction on comment:", error);
  }
};
