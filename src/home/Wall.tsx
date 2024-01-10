import styled from "styled-components";
import { Box } from "./Box";

export const Wall = () => {
  return (
    <Wrapper>
      <Container>
        <Box />
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
