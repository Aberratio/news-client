import { useParams } from "react-router-dom";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { StatisticBar } from "articles/StatisticBar";
import { MetadataBar } from "articles/MetadataBar";
import { useArticle } from "articles/useArticle";
import { useEffect } from "react";
import { buildCategoryPath } from "common/builders/buildPath";

export const FullArticle = () => {
  const { article, isLoading, loadArticle } = useArticle();
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
        <Link href={buildCategoryPath(article.category.id)}>
          <Typography>{article.category.name}</Typography>
        </Link>
        <Text variant="h1">{article.title}</Text>
        <MetadataBar
          authorName={article.author.name}
          createdOn={article.createdOn}
        />
        {/* <StatisticBar statistics={article.statistics} /> */}
        <SliderContainer>
          <Image src="/images/article/barycz.jpg" />
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

const SliderContainer = styled.div`
  position: relative;
  display: block;
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

const Image = styled.img`
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  height: 420px;
  vertical-align: middle;
  width: 100%;
`;
