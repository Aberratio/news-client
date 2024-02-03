"use client";

import styled from "styled-components";
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
    <Wrapper data-testid="news-bar">
      <Container>
        <LargeInfoCard
          buttonText="Więcej"
          description="Premier Donald Tusk ogłosił, że tegoroczne wybory samorządowe odbędą się w niedzielę 7 kwietnia. Ewentualna druga tura wyborów na włodarzy odbędzie się dwa tygodnie później, 21 kwietnia. Publicznie chęć startu w wyborach na burmistrza gminy Milicz potwierdziło na razie dwóch kandydatów – obecny burmistrz Piotr..."
          link={`article/${article.id}`}
          title={article.title}
          photo={{
            path: article.photo.path,
            alt: article.photo.description,
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background-color: #222;
  margin-top: 65px;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1080px;
`;
