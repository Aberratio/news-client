"use server";

import { cutText } from "core/tools/cutText";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import LargeInfoCard from "../../molecules/LargeInfoCard";

interface PinnedArticleProps {
  article: ArticleSummaryItem;
}

const PinnedArticle = ({ article }: PinnedArticleProps) => {
  if (!article) {
    return null;
  }

  return (
    <LargeInfoCard
      buttonText="Wyświetl artykuł"
      description={cutText(article.lead, 300)}
      link={`article/${article.id}`}
      title={article.title}
      photo={{
        path: article.photo.path,
        alt: "article.photo.description",
      }}
    />
  );
};

export default PinnedArticle;
