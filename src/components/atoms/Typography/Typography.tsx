import { ReactNode, ReactElement } from "react";
import { FlexboxProps, SpaceProps, TextAlignProps } from "styled-system";

import { TypographyWrapper } from "./TypographyWrapper";
import { useTypographyVariant } from "./useTypographyVariant";

export type WordBreakProps = "normal" | "break-all" | "keep-all" | "break-word";

export const Variant: Record<string, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "body",
  small: "small",
};

export interface TypographyProps {
  ariaLabel?: string;
  color?: string;
  innerHtml?: any;
  isCapitalized?: boolean;
  isUppercase?: boolean;
  textAlign?: TextAlignProps;
  wordBreak?: WordBreakProps;
  wrap?: boolean;
  variant?: keyof typeof Variant;
  children?: ReactNode;
  space?: SpaceProps;
  flexbox?: FlexboxProps;
}

export const Typography = ({
  ariaLabel,
  color,
  flexbox,
  innerHtml,
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
      flexbox={flexbox}
      $isCapitalized={isCapitalized}
      $isUppercase={isUppercase}
      space={space}
      textAlign={textAlign}
      $typographyVariant={getTypographyVariant(variant)}
      $wordBreak={wordBreak}
      $wrap={wrap}
    >
      {children}
    </TypographyWrapper>
  );
};
