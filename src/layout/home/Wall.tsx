import styled from "styled-components";
import { ArticleSummarizationBox } from "../../articles/summarization/ArticleSummarizationBox";
import { useOrganizationInfo } from "core/context/useOrganizationInfo";

export const Wall = () => {
  const { isReady, categories } = useOrganizationInfo();

  if (!isReady) return null;

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
