"use cleint";

import { buildArticlePath } from "core/builders/buildPath";
import Link from "next/link";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

export const TitleBar = () => {
  const { mainTopic } = useOrganizationInfo();

  if (!mainTopic) {
    return null;
  }

  return (
    <Wrapper data-testid="title-bar">
      <Container>
        <StyledLink
          $isActive={!!mainTopic.post}
          href={mainTopic.post ? buildArticlePath(mainTopic.post) : "#"}
        >
          <Typography color="white" isUppercase variant="title">
            {mainTopic.topic}
          </Typography>
        </StyledLink>
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

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  cursor: ${({ $isActive }) => ($isActive ? "default" : "pointer")};
`;
