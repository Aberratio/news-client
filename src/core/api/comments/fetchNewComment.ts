"use server";

interface FetchNewCommentProps {
  articleSlug: string;
  author: string;
  text: string;
}

export const fetchNewComment = async ({
  articleSlug,
  author,
  text,
}: FetchNewCommentProps): Promise<void> => {
  "use server";
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ author, text, articleSlug }),
  });
};
