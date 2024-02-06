"use client";

import styled from "styled-components";

interface BarProps {
  dataTestId: string;
  children: React.ReactNode;
}

const Bar = ({ dataTestId, children }: BarProps) => {
  return <Wrapper data-testid={dataTestId}>{children}</Wrapper>;
};

export default Bar;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;
