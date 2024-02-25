"use server";

interface FetchArticleReactionProps {
  articleId: string;
  like: number;
  dislike: number;
}

export const fetchArticleReaction = async ({
  articleId,
  like,
  dislike,
}: FetchArticleReactionProps): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/articles/reactions`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ like, dislike, articleSlug: articleId }),
    next: { revalidate: 60 },
  });
};
