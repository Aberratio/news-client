"use client";

import { styled } from "styled-components";

interface MainColumnProps {
  children: React.ReactNode;
}

export const MainColumn = ({ children }: MainColumnProps) => {
  return <Wrapper data-testid="main-column">{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    max-width: 1380px;
    padding: 0;
    margin: auto;

    @media screen and (min-width: ${theme.breakpoints.tabletL}) {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 16px;
        padding: 0 12px;
    }
  `}
`;
