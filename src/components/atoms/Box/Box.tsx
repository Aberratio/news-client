"use client";

import { css, styled } from "styled-components";

interface BoxProps {
  dataTestId?: string;
  display?: string;
  margin?: string;
  marginM?: string;
  padding?: string;
  paddingM?: string;
  children: React.ReactNode;
}

const Box = ({
  dataTestId,
  display,
  margin,
  marginM,
  padding,
  paddingM,
  children,
}: BoxProps) => {
  return (
    <StyledDiv
      data-testid={dataTestId}
      $display={display}
      $margin={margin}
      $marginM={marginM}
      $padding={padding}
      $paddingM={paddingM}
    >
      {children}
    </StyledDiv>
  );
};

export default Box;

const StyledDiv = styled.div<{
  $display?: string;
  $margin?: string;
  $marginM?: string;
  $padding?: string;
  $paddingM?: string;
}>`
  ${({ $display }) =>
    $display &&
    css`
      display: ${$display};
    `};

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `};

  ${({ $marginM }) =>
    $marginM &&
    css`
      @media screen and (max-width: 1366px) {
        margin: ${$marginM};
      }
    `};

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
