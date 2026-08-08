"use client";

import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { ArticleCardFooter } from "components/molecules/ArticleCardFooter/ArticleCardFooter";

interface PinnedArticleProps {
  article: ArticleSummaryItem;
}

const PinnedArticle = ({ article }: PinnedArticleProps) => {
  if (!article) {
    return null;
  }

  return (
    <ArticleCardFooter
      dataTestId="pinned-article-card"
      item={article}
      variant="featured"
    />
  );
};

export default PinnedArticle;
