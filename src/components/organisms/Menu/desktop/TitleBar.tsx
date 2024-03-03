"use cleint";

import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

export const TitleBar = () => {
  const { mainTopic } = useOrganizationInfo();

  return (
    <Wrapper data-testid="title-bar">
      <Container>
        <Typography color="white" isUppercase variant="title">
          {mainTopic}
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
