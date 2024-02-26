"use server";

import { FullArticleItem } from "types/FullArticleItem";
import CommentSection from "../../CommentsSection";
import { FullArticleContent } from "./FullArticleContent";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";
import { Suspense } from "react";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const comments = await fetchArticleComments(article._id)
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });

  return (
    <FullArticleContent article={article}>
      <Suspense>
        <CommentSection articleId={article._id} comments={comments ?? []} />
      </Suspense>
    </FullArticleContent>
  );
};
