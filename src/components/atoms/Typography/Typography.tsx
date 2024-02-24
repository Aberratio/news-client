"use client";

import { ReactNode, ReactElement } from "react";
import {
  FlexboxProps,
  GridProps,
  SpaceProps,
  TextAlignProps,
} from "styled-system";

import { TypographyWrapper } from "./TypographyWrapper";
import { useTypographyVariant } from "./useTypographyVariant";
import { Variant } from "./types/Variant";
import { WordBreakProps } from "./types/WordBreakProps";

export interface TypographyProps {
  ariaLabel?: string;
  color?: string;
  flexbox?: FlexboxProps;
  grid?: GridProps;
  innerHtml?: any;
  isBlockquote?: boolean;
  isCapitalized?: boolean;
  isUppercase?: boolean;
  space?: SpaceProps;
  textAlign?: TextAlignProps;
  wordBreak?: WordBreakProps;
  wrap?: boolean;
  variant?: keyof typeof Variant;
  children?: ReactNode;
}

const Typography = ({
  ariaLabel,
  color,
  flexbox,
  grid,
  innerHtml,
  isBlockquote = false,
  isCapitalized = false,
  isUppercase = false,
  space,
  textAlign,
  wordBreak,
  wrap = false,
  variant = "body",
  children,
}: TypographyProps): ReactElement => {
  const { getTypographyVariant } = useTypographyVariant();

  return (
    <TypographyWrapper
      aria-label={ariaLabel}
      $color={color}
      dangerouslySetInnerHTML={innerHtml && { __html: `${innerHtml}` }}
      $flexbox={flexbox}
      $grid={grid}
      $isBlockquote={isBlockquote}
      $isCapitalized={isCapitalized}
      $isUppercase={isUppercase}
      $space={space}
      $textAlign={textAlign}
      $typographyVariant={getTypographyVariant(variant)}
      $wordBreak={wordBreak}
      $wrap={wrap}
    >
      {children}
    </TypographyWrapper>
  );
};

export default Typography;
