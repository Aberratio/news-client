"use client";

import styled from "styled-components";

interface BarProps {
  dataTestId: string;
  gap?: number;
  children: React.ReactNode;
}

const Bar = ({ dataTestId, gap = 4, children }: BarProps) => {
  return (
    <Wrapper $gap={gap} data-testid={dataTestId}>
      {children}
    </Wrapper>
  );
};

export default Bar;

const Wrapper = styled.div<{ $gap: number }>`
  gap: ${({ $gap }) => `${$gap}px`};
  display: flex;
`;
