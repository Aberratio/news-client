import { ArticleSummarization } from "articles/summarization/ArticleSummarization";
import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { useLastArticles } from "../useLastArticles";
import { ArticleSummarizationItem } from "../items/ArticleSummarizationItem";
import { useEffect } from "react";

interface CategoryBoxProps {
  categoryId: number;
}

export const CategoryBox = ({ categoryId }: CategoryBoxProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(categoryId);
  }, [categoryId]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper data-test-id={`category-box-${categoryId}`}>
      <Header>
        <Typography variant="h3">Aktualności</Typography>
        <SeeMore href="/publications/category.php?ID_category=1&ID_page=1">
          <Typography>Zobacz wszystkie</Typography>
          <Arrow direction="right" />
        </SeeMore>
      </Header>
      <Container>
        {articles.map((article: ArticleSummarizationItem) => {
          return <ArticleSummarization article={article} />;
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 25px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  gap: 16px;
  margin: 16px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid #e6e6e6;
  padding: 0 18px;
  position: relative;
  justify-content: space-between;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background-color: #15a752;
  }
`;

const SeeMore = styled.a`
  display: flex;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  padding-left: 10px;
  white-space: nowrap;
  color: #999;
`;