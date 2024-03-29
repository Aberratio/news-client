import { Font } from "core/styles/types/CustomFonts";
import { css, styled } from "styled-components";
import {
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from "styled-system";

import { WordBreakProps } from "./types/WordBreakProps";

interface TypographyWrapperProps {
  $color?: string;
  $isBlockquote?: boolean;
  $isCapitalized?: boolean;
  $isInline?: boolean;
  $isUppercase?: boolean;
  $typographyVariant: Font;
  $wordBreak?: WordBreakProps;
  $wrap?: boolean;
  $flexbox?: FlexboxProps;
  $grid?: GridProps;
  $space?: SpaceProps;
  $textAlign?: TextAlignProps;
}

export const TypographyWrapper = styled.p<TypographyWrapperProps>`
  ${({ $isInline }) =>
    $isInline
      ? css`
          display: inline;
        `
      : css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        `};

  vertical-align: middle;
  text-align: left;
  hyphens: auto;

  strong {
    font-weight: 700;
  }

  ${({ $flexbox }) => $flexbox && flexbox($flexbox)};
  ${({ $grid }) => $grid && grid($grid)};
  ${({ $space }) => $space && space($space)};
  ${({ $textAlign }) => $textAlign && textAlign($textAlign)};

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `};

  ${({ $isBlockquote }) =>
    $isBlockquote &&
    css`
      border-left: 4px solid
        ${({ theme }) => theme.customTheme.general.primaryColor};
      padding: 0 0 0 16px;
      margin: 12px 0;
    `};

  ${({ $isCapitalized }) =>
    $isCapitalized &&
    css`
      text-transform: capitalize;
    `};

  ${({ $isUppercase }) =>
    $isUppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ $typographyVariant }) => css`
    font-family: ${$typographyVariant.fontFamily};
    font-size: ${$typographyVariant.fontSize};
    font-weight: ${$typographyVariant.fontWeight};
    line-height: ${$typographyVariant.lineHeight};
  `};

  ${({ $wordBreak }) =>
    $wordBreak &&
    css`
      word-break: ${$wordBreak};
      white-space: pre-line;
    `};

  ${({ $wrap }) =>
    $wrap &&
    css`
      white-space: wrap;
    `};

  ${({ theme }) => css`
    a {
      color: ${theme.customTheme.general.primaryColor};
      text-decoration: none;
      cursor: pointer;
    }
  `};
`;
