"use server";

interface FetchNewCommentProps {
  articleId: number;
  author: string;
  text: string;
}

export const fetchNewComment = async ({
  articleId,
  author,
  text,
}: FetchNewCommentProps): Promise<void> => {
  "use server";
  await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/comments/article/${articleId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, date: new Date().toISOString(), text }),
    }
  );
};
