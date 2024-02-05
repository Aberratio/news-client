"use server";

interface FetchArticleReactionProps {
  articleId: number;
  like: number;
  dislike: number;
}

export const fetchArticleReaction = async ({
  articleId,
  like,
  dislike,
}: FetchArticleReactionProps): Promise<void> => {
  await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/reaction/${articleId}`,
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
