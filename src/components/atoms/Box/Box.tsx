"use client";

import { css, styled } from "styled-components";

interface BoxProps {
  dataTestId?: string;
  padding?: string;
  paddingM?: string;
  children: React.ReactNode;
}

const Box = ({ dataTestId, padding, paddingM, children }: BoxProps) => {
  return (
    <StyledDiv data-testid={dataTestId} $padding={padding} $paddingM={paddingM}>
      {children}
    </StyledDiv>
  );
};

export default Box;

const StyledDiv = styled.div<{ $padding?: string; $paddingM?: string }>`
  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `};

  ${({ $paddingM }) =>
    $paddingM &&
    css`
      @media screen and (max-width: 1366px) {
        padding: ${$paddingM};
      }
    `};
`;
