import { ArticleSummarization } from "articles/summarization/ArticleSummarization";
import styled from "styled-components";
import { useLastArticles } from "../useLastArticles";
import { ArticleSummarizationItem } from "../items/ArticleSummarizationItem";
import { useEffect } from "react";
import { CategoryBoxHeader } from "./CategoryBoxHeader";

interface CategoryBoxProps {
  categoryId: number;
  showHeader: boolean;
}

export const CategoryBox = ({
  categoryId,
  showHeader = true,
}: CategoryBoxProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(categoryId);
  }, [categoryId]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper data-test-id={`category-box-${categoryId}`}>
      {showHeader && <CategoryBoxHeader name="Aktualności" />}
      <Container $showHeader={showHeader}>
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

const Container = styled.div<{ $showHeader: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  gap: 16px;
  margin: ${({ $showHeader }) => ($showHeader ? "16px" : "0")};
`;
