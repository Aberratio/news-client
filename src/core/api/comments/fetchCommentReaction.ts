"use server";

interface FetchCommentReactionProps {
  commentId: string;
  like: number;
  dislike: number;
}

export const fetchCommentReaction = async ({
  commentId,
  like,
  dislike,
}: FetchCommentReactionProps): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/comments/react`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
    body: JSON.stringify({ _id: commentId, like, dislike }),
    next: { revalidate: 60 },
  });
};
