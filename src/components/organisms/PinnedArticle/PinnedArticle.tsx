"use server";

import { cutText } from "core/tools/cutText";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import LargeArticleBox from "components/molecules/LargeArticleBox";

interface PinnedArticleProps {
  article: ArticleSummaryItem;
}

const PinnedArticle = ({ article }: PinnedArticleProps) => {
  if (!article) {
    return null;
  }

  return (
    <LargeArticleBox
      buttonText="Wyświetl artykuł"
      dataTestId="pinned-article-box"
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
