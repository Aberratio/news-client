import styled from "styled-components";
import { ArticlesOverview } from "../../organisms/Article/summarization/ArticlesOverview";
import { useOrganizationInfo } from "core/context/useOrganizationInfo";

export const Wall = () => {
  const { isReady, categories } = useOrganizationInfo();

  if (!isReady) return null;

  return (
    <Wrapper>
      <Container>
        {categories.map((category) => {
          return <ArticlesOverview category={category} key={category.id} />;
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