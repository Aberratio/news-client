"use client";

import styled from "styled-components";

interface ArticleBoxWraperProps {
  dataTestId: string;
  children: React.ReactNode;
}

export const ArticleBoxWraper = ({
  dataTestId,
  children,
}: ArticleBoxWraperProps) => {
  return (
    <Wrapper data-testid={dataTestId}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
