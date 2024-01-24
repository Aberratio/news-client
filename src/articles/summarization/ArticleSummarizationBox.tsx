import { ArticleSummarization } from "articles/summarization/ArticleSummarization";
import styled from "styled-components";
import { useLastArticles } from "../useLastArticles";
import { ArticleSummarizationItem } from "../items/ArticleSummarizationItem";
import { useEffect } from "react";
import { ArticleSummarizationBoxHeader } from "./ArticleSummarizationBoxHeader";
import { CategoryItem } from "articles/items/CategoryItem";

interface ArticleSummarizationBoxProps {
  category: CategoryItem;
  showSeeMore?: boolean;
}

export const ArticleSummarizationBox = ({
  category,
  showSeeMore = true,
}: ArticleSummarizationBoxProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    category?.id && loadArticles(category.id);
  }, [category]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper data-test-id={`article-summarizatoin-box-${category.id}`}>
      {showSeeMore && (
        <ArticleSummarizationBoxHeader
          category={category}
          showSeeMore={showSeeMore}
        />
      )}
      <Container $showSeeMore={showSeeMore}>
        {articles.map((article: ArticleSummarizationItem) => {
          return <ArticleSummarization article={article} key={article.id} />;
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 25px;
`;

const Container = styled.div<{ $showSeeMore: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  gap: 16px;
  margin: 0 16px;
  ${({ $showSeeMore }) => $showSeeMore && "margin-top: 16px;"}
`;
