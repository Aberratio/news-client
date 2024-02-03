"use client";

import styled from "styled-components";
import { NewsBarPublication } from "./NewsBarPublication";
import { useLastArticles } from "components/organisms/Article/useLastArticles";
import { useEffect } from "react";

export const NewsBar = () => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(undefined, 4);
  }, []);

  if (isLoading) {
    return null;
  }

  console.log(articles);

  return (
    <Wrapper data-testid="news-bar">
      <Container>
        <NewsBarPublication article={articles[0]} />
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
