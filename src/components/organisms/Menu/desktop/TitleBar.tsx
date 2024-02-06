"use cleint";

import Typography from "components/atoms/Typography";
import styled from "styled-components";

export const TitleBar = () => {
  return (
    <Wrapper>
      <Container>
        <Typography color="white" isUppercase variant="h1">
          25-LECIE POWIATU MILICKIEGO
        </Typography>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(184, 0, 0);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
`;
