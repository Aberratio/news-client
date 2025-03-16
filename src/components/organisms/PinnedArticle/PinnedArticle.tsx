"use client";

import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { ImageCard } from "components/molecules/ImageCard/ImageCard";

interface PinnedArticleProps {
  article: ArticleSummaryItem;
}

const PinnedArticle = ({ article }: PinnedArticleProps) => {
  if (!article) {
    return null;
  }

  return (
    <ImageCard
      link={`/article/${article.id}`}
      title={article.title}
      photo={{
        path: article.photo.path,
        alt: "article.photo.description",
      }}
      author={article.author}
      views={article.views}
      comments={article.comments}
    />
  );
};

export default PinnedArticle;
