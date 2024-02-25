"use server";

interface FetchArticleReactionProps {
  articleSlug: string;
  like: number;
  dislike: number;
}

export const fetchArticleReaction = async ({
  articleSlug,
  like,
  dislike,
}: FetchArticleReactionProps): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/articles/reactions`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ like, dislike, articleSlug: articleSlug }),
    next: { revalidate: 60 },
  });
};
