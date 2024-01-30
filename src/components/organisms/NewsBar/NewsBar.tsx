"use client";

import styled from "styled-components";
import {
  NewsBarPublication,
  NewsBarPublicationSize,
} from "./NewsBarPublication";
import { useLastArticles } from "components/organisms/Article/useLastArticles";
import { useEffect } from "react";

export const NewsBar = () => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(undefined, 4);
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper data-testid="news-bar">
      <Container>
        <Row>
          <NewsBarPublication
            article={articles[0]}
            size={NewsBarPublicationSize.LARGE}
          />
          <SmallPublicationsContainer>
            <NewsBarPublication
              article={articles[1]}
              size={NewsBarPublicationSize.MEDIUM}
            />
            <SmallPublicationsContainerRow>
              <NewsBarPublication
                article={articles[2]}
                size={NewsBarPublicationSize.SMALL}
              />
              <NewsBarPublication
                article={articles[2]}
                size={NewsBarPublicationSize.SMALL}
              />
            </SmallPublicationsContainerRow>
          </SmallPublicationsContainer>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background-color: #fff;
`;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1080px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1px;
  margin-right: -1px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 440px;
  }
`;

const SmallPublicationsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
`;

const SmallPublicationsContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
