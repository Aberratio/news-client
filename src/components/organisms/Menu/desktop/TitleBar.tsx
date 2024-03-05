"use cleint";

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
    <Link href={mainTopic.link ?? "#"}>
      <Wrapper data-testid="title-bar" $isActive={!!mainTopic.link}>
        <Container>
          <Typography color="white" isUppercase variant="title">
            {mainTopic.topic}
          </Typography>
        </Container>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div<{ $isActive: boolean }>`
  background-color: rgb(184, 0, 0);
  cursor: ${({ $isActive }) => ($isActive ? "pointer" : "default")};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
`;
