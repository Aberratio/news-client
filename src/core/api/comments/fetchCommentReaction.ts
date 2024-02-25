"use server";

interface FetchCommentReactionProps {
  commentId: number;
  like: number;
  dislike: number;
}

export const fetchCommentReaction = async ({
  commentId,
  like,
  dislike,
}: FetchCommentReactionProps): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/comments`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ like, dislike, commentId }),
    next: { revalidate: 60 },
  });
};
