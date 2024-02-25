"use client";

import styled from "styled-components";

interface SummarizationCardWrapperProps {
  children: React.ReactNode;
}

export const SummarizationCardWrapper = ({
  children,
}: SummarizationCardWrapperProps) => {
  return (
    <Wrapper data-testid="summarization-card">
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
