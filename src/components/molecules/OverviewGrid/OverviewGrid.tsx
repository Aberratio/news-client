"use client";

import styled from "styled-components";

interface OverviewGridProps {
  dataTestId?: string;
  children: React.ReactNode;
}

const OverviewGrid = ({ dataTestId, children }: OverviewGridProps) => {
  return (
    <Wrapper data-testid={dataTestId}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default OverviewGrid;

const Wrapper = styled.div`
  padding-bottom: 25px;
`;

const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    column-gap: 24px;
    row-gap: 32px;
    
    padding-bottom: 20px;

    @media screen and (min-width: 420px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${theme.breakpoints.tabletS}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;
