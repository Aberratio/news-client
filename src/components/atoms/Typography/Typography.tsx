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

export interface TypographyProps
  extends FlexboxProps,
    GridProps,
    SpaceProps,
    TextAlignProps {
  ariaLabel?: string;
  color?: string;
  innerHtml?: any;
  isCapitalized?: boolean;
  isUppercase?: boolean;
  wordBreak?: WordBreakProps;
  wrap?: boolean;
  variant?: keyof typeof Variant;
  children?: ReactNode;
}

const Typography = ({
  ariaLabel,
  color,
  innerHtml,
  isCapitalized = false,
  isUppercase = false,
  wordBreak,
  wrap = false,
  variant = "body",
  children,
  ...props
}: TypographyProps): ReactElement => {
  const { getTypographyVariant } = useTypographyVariant();

  return (
    <TypographyWrapper
      aria-label={ariaLabel}
      $color={color}
      dangerouslySetInnerHTML={innerHtml && { __html: `${innerHtml}` }}
      $isCapitalized={isCapitalized}
      $isUppercase={isUppercase}
      $typographyVariant={getTypographyVariant(variant)}
      $wordBreak={wordBreak}
      $wrap={wrap}
      {...props}
    >
      {children}
    </TypographyWrapper>
  );
};

export default Typography;
