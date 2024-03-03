"use server";

import { Suspense } from "react";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";
import { ArticleItem } from "types/ArticleItem";

import CommentSection from "../../CommentsSection";

import { FullArticleContent } from "./FullArticleContent";

interface FullArticleProps {
  article: ArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const comments = await fetchArticleComments(article._id)
    .then((res) => {
      return res;
    })
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
