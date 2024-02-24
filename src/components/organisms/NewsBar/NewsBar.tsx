"use server";

import { cutText } from "core/tools/cutText";
import LargeInfoCard from "../../molecules/LargeInfoCard";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

interface NewsBarProps {
  article: ArticleSummarizationItem;
}

const NewsBar = ({ article }: NewsBarProps) => {
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

export default NewsBar;
