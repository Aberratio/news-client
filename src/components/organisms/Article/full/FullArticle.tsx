"use server";

import { FullArticleItem } from "types/FullArticleItem";
import CommentSection from "../../CommentsSection";
import { FullArticleContent } from "./FullArticleContent";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = ({ article }: FullArticleProps) => {
  // const comments = await fetchCommentsArticle(article.id);

  return (
    <FullArticleContent article={article}>
      <p>Test</p>
      {/* <CommentSection articleId={article.id} comments={comments} /> */}
    </FullArticleContent>
  );
};
