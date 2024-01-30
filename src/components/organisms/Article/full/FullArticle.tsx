"use client";

import { MetadataBar } from "components/organisms/Article/MetadataBar";
import { buildCategoryPath } from "core/builders/buildPath";
import { Typography } from "components/atoms/Typography/Typography";
import styled from "styled-components";
import { FullArticleItem } from "types/FullArticleItem";
import Image from "next/image";

interface FullArticleProps {
  article: FullArticleItem;
}

export const FullArticle = ({ article }: FullArticleProps) => {
  return (
    <Wrapper data-testid={`full-article-${article.id}`}>
      <Container>
        <Link href={buildCategoryPath(article.category.id)}>
          <Typography>{article.category.name}</Typography>
        </Link>
        <Text variant="h1">{article.title}</Text>
        <MetadataBar
          authorName={article.author.name}
          createdOn={article.createdOn}
        />
        <SliderContainer>
          <StyledImage
            src={article.photos[0].path}
            fill
            objectFit="cover"
            alt={article.photos[0].description ?? "zdjęcie artykułu"}
          />
        </SliderContainer>
        <LeadContainer>
          <Text>
            <strong>{article.lead}</strong>
          </Text>
        </LeadContainer>
        <div>
          <Body innerHtml={article.body} />
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

const Link = styled.a`
  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  position: relative;
  display: block;
  height: 420px;
  width: 100%;
`;

const LeadContainer = styled.div`
  margin: 0;
  margin-top: 3rem !important;
  padding-bottom: 15px;
  color: #666;
  font-family: Roboto-Regular;
  font-size: 16px;
  line-height: 1.8;
`;

const Text = styled(Typography)`
  text-align: left;
  align-items: flex-start;
`;
const Body = styled(Text)`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: middle;
`;
