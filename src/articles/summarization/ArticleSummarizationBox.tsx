import { ArticleSummarization } from "articles/summarization/ArticleSummarization";
import styled from "styled-components";
import { useLastArticles } from "../useLastArticles";
import { ArticleSummarizationItem } from "../items/ArticleSummarizationItem";
import { useEffect } from "react";
import { ArticleSummarizationBoxHeader } from "./ArticleSummarizationBoxHeader";

interface ArticleSummarizationBoxProps {
  categoryId: number;
  showSeeMore?: boolean;
}

export const ArticleSummarizationBox = ({
  categoryId,
  showSeeMore = true,
}: ArticleSummarizationBoxProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    loadArticles(categoryId);
  }, [categoryId]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper data-test-id={`article-summarizatoin-box-${categoryId}`}>
      {showSeeMore && (
        <ArticleSummarizationBoxHeader
          name="Aktualności"
          showSeeMore={showSeeMore}
        />
      )}
      <Container $showSeeMore={showSeeMore}>
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

const Container = styled.div<{ $showSeeMore: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  gap: 16px;
  margin: 16px;
`;
