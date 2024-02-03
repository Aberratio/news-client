"use client";

import { ArticleSummarization } from "components/organisms/Article/summarization/ArticleSummarization";
import { useEffect } from "react";
import styled from "styled-components";
import { CategoryItem } from "types/CategoryItem";
import { ArticleSummarizationItem } from "../../../../types/ArticleSummarizationItem";
import { useLastArticles } from "../useLastArticles";

interface ArticlesOverviewProps {
  amount?: number;
  category?: CategoryItem;
  page?: number;
}

export const ArticlesOverview = ({
  amount = 30,
  category,
  page = 0,
}: ArticlesOverviewProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(category?.id ?? undefined, amount, page);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Wrapper
      data-testid={`article-summarizatoin-box-${
        category ? category.id : "all"
      }`}
    >
      <Container>
        {articles.map((article: ArticleSummarizationItem) => {
          return <ArticleSummarization article={article} key={article.id} />;
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 25px;
`;

const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    padding-bottom: 20px;
    gap: 24px;
    margin: 0 16px;

    @media screen and (min-width: 420px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${theme.breakpoints.tabletS}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;
