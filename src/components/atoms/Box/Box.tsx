"use client";

import { css, styled } from "styled-components";

interface BoxProps {
  dataTestId?: string;
  display?: string;
  flexDirection?: "column" | "row";
  gap?: number;
  margin?: string;
  marginM?: string;
  padding?: string;
  paddingM?: string;
  children: React.ReactNode;
}

const Box = ({
  dataTestId,
  display,
  flexDirection,
  gap,
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
      $flexDirection={flexDirection}
      $gap={gap}
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
  $flexDirection?: "column" | "row";
  $gap?: number;
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

  ${({ $flexDirection }) =>
    $flexDirection &&
    css`
      flex-direction: ${$flexDirection};
    `};

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap}px;
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
