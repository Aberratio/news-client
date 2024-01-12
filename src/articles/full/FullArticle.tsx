import { useParams } from "react-router-dom";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { StatisticBar } from "articles/StatisticBar";
import { MetadataBar } from "articles/MetadataBar";
import { useArticle } from "articles/useArticle";
import { useEffect } from "react";

export const FullArticle = () => {
  const { article, isLoading, loadArticle } = useArticle();
  const linkToArticle = `/publications?${article.id}`;
  const linkToCategory = `/publications?${article.id}`;

  const { id } = useParams();

  useEffect(() => {
    id && loadArticle(Number(id));
  }, [id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <Wrapper data-test-id={`full-article-${article.id}`}>
      <Container>
        <Link href={linkToCategory}>
          <Typography>{article.category}</Typography>
        </Link>
        <Typography variant="h1">{article.title}</Typography>
        <MetadataBar
          authorName={article.author.name}
          createdOn={article.createdOn}
        />
        <StatisticBar
          statistics={{ views: 99, comments: 0, dislikes: 2, likes: 8 }}
        />
        <div>
          <Link href={linkToArticle}>
            <Title>{article.title}</Title>
          </Link>
          <Metadata>
            <Link href="#">
              <Typography variant="small">{article.author.name}</Typography>
            </Link>
            <Typography variant="small">
              - {article.createdOn.toString()}
            </Typography>
          </Metadata>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;
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

const Title = styled(Typography)`
  text-align: left;
`;

const Image = styled.img`
  height: 180px;
  width: 100%;

  vertical-align: middle;
  border-style: none;

  object-fit: cover;
  object-position: 50% 50%;
`;

const Metadata = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px 0 4px 0;
`;
