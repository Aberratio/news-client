import styled from "styled-components";
import { ArticleSummarizationBox } from "../../articles/summarization/ArticleSummarizationBox";

export const Wall = () => {
  return (
    <Wrapper>
      <Container>
        <ArticleSummarizationBox categoryId={1} />
        <ArticleSummarizationBox categoryId={2} />
        <ArticleSummarizationBox categoryId={3} />
        <ArticleSummarizationBox categoryId={4} />
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
