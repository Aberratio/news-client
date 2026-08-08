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
  padding-bottom: 32px;
  overflow: visible;
`;

const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px 20px;
    padding-bottom: 24px;

    @media screen and (min-width: ${theme.breakpoints.tabletS}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 32px 24px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktopS}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 36px 28px;
    }

    overflow: visible;
  `}
`;
