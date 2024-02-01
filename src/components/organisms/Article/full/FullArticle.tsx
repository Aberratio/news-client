"use client";

import { MetadataBar } from "components/organisms/Article/MetadataBar";
import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { FullArticleItem } from "types/FullArticleItem";
import Image from "next/image";
import { Slider } from "./Slider";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = ({ article }: FullArticleProps) => {
  return (
    <Wrapper data-testid={`full-article-${article.id}`}>
      <Container>
        <Typography variant="h1">{article.title}</Typography>
        <MetadataBar
          authorName={article.author.name}
          createdOn={article.createdOn}
        />
        <Slider images={article.photos} />
        <LeadContainer>
          <Typography>
            <strong>{article.lead}</strong>
          </Typography>
        </LeadContainer>
        <div>
          <Typography innerHtml={article.body} />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 1px;
  padding: 0 12px 30px 12px;
`;

const Container = styled.div`
  padding-bottom: 70px;
`;

const LeadContainer = styled.div`
  margin: 0;
  margin-top: 3rem !important;
  padding-bottom: 42px;
  color: #666;
`;

const StyledImage = styled(Image)`
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: middle;
`;
