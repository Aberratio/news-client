import styled from "styled-components";
import { CategoryBox } from "../../articles/summarization/CategoryBox";

export const Wall = () => {
  return (
    <Wrapper>
      <Container>
        <CategoryBox categoryId={1} />
        <CategoryBox categoryId={2} />
        <CategoryBox categoryId={3} />
        <CategoryBox categoryId={4} />
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
