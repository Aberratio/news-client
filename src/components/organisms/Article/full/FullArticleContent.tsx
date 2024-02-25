"use client";

import MetadataBar from "components/molecules/MetadataBar";
import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { FullArticleItem } from "types/FullArticleItem";
import Slider from "../../../molecules/Slider";
// import { StatisticArticleBar } from "../StatisticArticleBar";
import { Body } from "./Body";

interface FullArticleProps {
  article: FullArticleItem;
  children: React.ReactNode;
}

export const FullArticleContent = ({ article, children }: FullArticleProps) => {
  return (
    <Wrapper data-testid={`full-article-${article.id}`}>
      <Container>
        <Title>{article.title}</Title>
        <InfoWrapper>
          <MetadataBar
            authorName={article.author.name}
            createdOn={article.createdOn}
          />
          {/* <StatisticArticleBar
            articleSlug={article.id}
            commentsPath="#comments"
            statistics={article.statistics}
          /> */}
        </InfoWrapper>
        <LeadWrapper>
          <Typography variant="h2">{article.lead}</Typography>
        </LeadWrapper>
        <Slider images={article.photos} />
        <BodyWrapper>
          <Body value={article.body} />
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

const Container = styled.div`
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
