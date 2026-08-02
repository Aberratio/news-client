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
    flex-direction: column;
    max-width: 1380px;
    width: 100%;
    padding: 0 12px;
    margin: auto;
    overflow: visible;

    @media screen and (min-width: ${theme.breakpoints.tabletL}) {
        display: grid;
        grid-template-columns: 1fr 300px;
        align-items: start;
        gap: 28px;
        padding: 0 20px;
    }
  `}
`;
