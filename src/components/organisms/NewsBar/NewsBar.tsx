"use client";

import LargeInfoCard from "../../molecules/LargeInfoCard";
import { useLastArticles } from "components/organisms/Article/useLastArticles";
import { useEffect, useState } from "react";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

export const NewsBar = () => {
  const { articles, isLoading, loadArticles } = useLastArticles();
  const [article, setArticle] = useState<ArticleSummarizationItem>();

  useEffect(() => {
    loadArticles(undefined, 4);
  }, []);

  useEffect(() => {
    articles.length && setArticle(articles[0]);
  }, [articles]);

  if (isLoading || !article) {
    return null;
  }

  return (
    <LargeInfoCard
      buttonText="Wyświetl artykuł"
      description="Premier Donald Tusk ogłosił, że tegoroczne wybory samorządowe odbędą się w niedzielę 7 kwietnia. Ewentualna druga tura wyborów na włodarzy odbędzie się dwa tygodnie później, 21 kwietnia. Publicznie chęć startu w wyborach na burmistrza gminy Milicz potwierdziło na razie dwóch kandydatów – obecny burmistrz Piotr..."
      link={`article/${article.id}`}
      title={article.title}
      photo={{
        path: article.photo.path,
        alt: article.photo.description,
      }}
    />
  );
};
