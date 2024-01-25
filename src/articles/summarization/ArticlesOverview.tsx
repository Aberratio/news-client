import { ArticleSummarization } from "articles/summarization/ArticleSummarization";
import styled from "styled-components";
import { useLastArticles } from "../useLastArticles";
import { ArticleSummarizationItem } from "../../types/ArticleSummarizationItem";
import { useEffect } from "react";
import { CategoryItem } from "types/CategoryItem";
import { ArticlesOverviewHeader } from "./ArticlesOverviewHeader";

interface ArticlesOverviewProps {
  category: CategoryItem;
  page?: number;
  showSeeMore?: boolean;
}

export const ArticlesOverview = ({
  category,
  page = 0,
  showSeeMore = true,
}: ArticlesOverviewProps) => {
  const { articles, isLoading, loadArticles } = useLastArticles();

  useEffect(() => {
    category?.id && loadArticles(category.id, 20, page);
  }, [category]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Wrapper data-test-id={`article-summarizatoin-box-${category.id}`}>
      {showSeeMore && (
        <ArticlesOverviewHeader category={category} showSeeMore={showSeeMore} />
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
