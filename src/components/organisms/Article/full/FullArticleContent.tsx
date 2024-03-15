"use client";

import { Suspense } from "react";
import { Skeleton } from "@nextui-org/react";
import styled from "styled-components";
import { ArticleItem } from "types/ArticleItem";

import Typography from "components/atoms/Typography";
import MetadataBar from "components/molecules/MetadataBar";

import Slider from "../../../molecules/Slider";
import { StatisticArticleBar } from "../StatisticArticleBar";

import { Body } from "./Body";

interface FullArticleProps {
  article: ArticleItem;
  children: React.ReactNode;
}

export const FullArticleContent = ({ article, children }: FullArticleProps) => {
  return (
    <Wrapper data-testid={`full-article`}>
      <Container>
        <Title>{article.title}</Title>
        <InfoWrapper>
          <Suspense fallback={<Skeleton />}>
            <MetadataBar name={article.author.name} date={article.createdOn} />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <StatisticArticleBar
              articleId={article._id}
              statistics={{
                comments: article.comments,
                dislikes: article.dislikes,
                likes: article.likes,
                views: article.views,
              }}
            />
          </Suspense>
        </InfoWrapper>
        <LeadWrapper>
          <Typography variant="article" dataTestId="lead">
            {article.lead}
          </Typography>
        </LeadWrapper>
        <Suspense fallback={<Skeleton />}>
          <Slider images={article.photos} />
        </Suspense>
        <BodyWrapper data-testid="body">
          <Suspense fallback={<Skeleton />}>
            <Body value={article.body} />
          </Suspense>
        </BodyWrapper>
      </Container>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 1px;
  padding: 0 12px;
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LeadWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${({ theme }) => theme.customFonts.titleM};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    ${({ theme }) => theme.customFonts.title};
  }
`;
