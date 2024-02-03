"use client";

import { ArticleSummarizationItem } from "../../../../types/ArticleSummarizationItem";
import { SummarizationCard } from "components/molecules/SummarizationCard/SummarizationCard";

interface ArticleSummarizationProps {
  article: ArticleSummarizationItem;
}

export const ArticleSummarization = ({
  article,
}: ArticleSummarizationProps) => {
  return (
    <SummarizationCard
      item={{ ...article, photo: { ...article.photo, alt: "article photo" } }}
    />
  );
};
