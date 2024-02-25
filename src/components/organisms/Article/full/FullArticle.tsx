"use server";

import { FullArticleItem } from "types/FullArticleItem";
import CommentSection from "../../CommentsSection";
import { FullArticleContent } from "./FullArticleContent";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";
import { fetchArticleStats } from "core/api/articles/fetchArticleStats";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const comments = await fetchArticleComments(article.id);
  const statistics = await fetchArticleStats(article.id);

  return (
    <FullArticleContent statistics={statistics} article={article}>
      <CommentSection articleSlug={article.id} comments={comments} />
    </FullArticleContent>
  );
};
