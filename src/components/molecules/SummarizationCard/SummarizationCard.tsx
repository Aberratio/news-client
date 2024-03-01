"use client";

import styled from "styled-components";

interface SummarizationCardProps {
  children: React.ReactNode;
}

export const SummarizationCard = ({ children }: SummarizationCardProps) => {
  return (
    <Wrapper data-testid="summarization-card">
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
