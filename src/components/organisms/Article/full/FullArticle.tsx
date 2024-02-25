"use server";

import { FullArticleItem } from "types/FullArticleItem";
import CommentSection from "../../CommentsSection";
import { FullArticleContent } from "./FullArticleContent";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const comments = await fetchArticleComments(article.id);

  return (
    <FullArticleContent article={article}>
      <CommentSection articleSlug={article.id} comments={comments} />
    </FullArticleContent>
  );
};
