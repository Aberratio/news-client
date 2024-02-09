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
  await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/comments/reaction/${commentId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like, dislike }),
      next: { revalidate: 60 },
    }
  );
};