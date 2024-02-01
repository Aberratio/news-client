import { css, styled } from "styled-components";
import {
  FlexboxProps,
  SpaceProps,
  TextAlignProps,
  flexbox,
  space,
  textAlign,
} from "styled-system";
import { Font } from "core/styles/types/CustomFonts";
import { WordBreakProps } from "./Typography";

interface TypographyWrapperProps {
  $color?: string;
  flexbox?: FlexboxProps;
  $isCapitalized?: boolean;
  $isUppercase?: boolean;
  space?: SpaceProps;
  textAlign?: TextAlignProps;
  $typographyVariant: Font;
  $wordBreak?: WordBreakProps;
  $wrap?: boolean;
}

export const TypographyWrapper = styled.p<TypographyWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  vertical-align: middle;
  text-align: left;

  strong {
    font-weight: 700;
  }

  ${flexbox};
  ${space};
  ${textAlign};

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
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
`;
