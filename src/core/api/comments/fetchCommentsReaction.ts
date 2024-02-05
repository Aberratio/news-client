"use server";

interface FetchCommentsReactionProps {
  commentId: number;
  like: number;
  dislike: number;
}

export const fetchCommentsReaction = async ({
  commentId,
  like,
  dislike,
}: FetchCommentsReactionProps): Promise<void> => {
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
