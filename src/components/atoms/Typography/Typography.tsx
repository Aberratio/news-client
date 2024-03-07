"use client";

import { ReactElement, ReactNode } from "react";
import {
  FlexboxProps,
  GridProps,
  SpaceProps,
  TextAlignProps,
} from "styled-system";

import { Variant } from "./types/Variant";
import { WordBreakProps } from "./types/WordBreakProps";
import { TypographyWrapper } from "./TypographyWrapper";
import { useTypographyVariant } from "./useTypographyVariant";

export interface TypographyProps {
  ariaLabel?: string;
  color?: string;
  dataTestId?: string;
  flexbox?: FlexboxProps;
  grid?: GridProps;
  innerHtml?: any;
  isBlockquote?: boolean;
  isCapitalized?: boolean;
  isInline?: boolean;
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
  dataTestId,
  flexbox,
  grid,
  innerHtml,
  isBlockquote = false,
  isCapitalized = false,
  isInline = false,
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
      data-testId={dataTestId}
      $flexbox={flexbox}
      $grid={grid}
      $isBlockquote={isBlockquote}
      $isCapitalized={isCapitalized}
      $isInline={isInline}
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
