"use server";

import { FullArticleItem } from "types/FullArticleItem";
import { CommentSection } from "./CommentSection";
import { FullArticleContent } from "./FullArticleContent";
import { fetchCommentsArticle } from "core/api/comments/fetchCommentsArticle";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const comments = await fetchCommentsArticle(article.id);

  return (
    <FullArticleContent article={article}>
      <CommentSection comments={comments} />
    </FullArticleContent>
  );
};
