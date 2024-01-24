import styled from "styled-components";
import { ArticleSummarizationBox } from "../../articles/summarization/ArticleSummarizationBox";
import { useCategories } from "layout/navigation/useCategories";
import { useEffect } from "react";

export const Wall = () => {
  const { isLoading, categories, loadTabs } = useCategories();

  useEffect(() => {
    loadTabs();
  }, []);

  if (isLoading) return null;

  return (
    <Wrapper>
      <Container>
        {categories.map((category) => {
          return (
            <ArticleSummarizationBox category={category} key={category.id} />
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
`;
