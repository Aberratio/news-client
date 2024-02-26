"use server";

import { FullArticleItem } from "types/FullArticleItem";
import CommentSection from "../../CommentsSection";
import { FullArticleContent } from "./FullArticleContent";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";
import { fetchArticleStats } from "core/api/articles/fetchArticleStats";
import { Suspense } from "react";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const comments = await fetchArticleComments(article.id);
  const statistics = await fetchArticleStats(article.id);

  return (
    <FullArticleContent statistics={statistics} article={article}>
      <Suspense>
        <CommentSection articleSlug={article.id} comments={comments} />
      </Suspense>
    </FullArticleContent>
  );
};
