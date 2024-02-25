"use server";

interface FetchArticleReactionProps {
  articleSlug: string;
}

export const fetchArticleViews = async ({
  articleSlug,
}: FetchArticleReactionProps): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/articles/views`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ articleSlug: articleSlug }),
    next: { revalidate: 60 },
  });
};
