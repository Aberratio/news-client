import styled from "styled-components";
import { CategoryBox } from "../../articles/CategoryBox";

export const Wall = () => {
  return (
    <Wrapper>
      <Container>
        <CategoryBox categoryId={1} />
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
