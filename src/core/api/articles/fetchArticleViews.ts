"use server";

interface FetchArticleReactionProps {
  articleId: string;
}

export const fetchArticleViews = async ({
  articleId,
}: FetchArticleReactionProps): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/articles/views`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ articleSlug: articleId }),
    next: { revalidate: 60 },
  });
};
