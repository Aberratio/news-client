import { ReactNode, ReactElement } from "react";
import styled, { css } from "styled-components";
import { space, typography, textAlign } from "styled-system";

import { CustomFonts } from "../../../core/styles/customization/CustomFonts";
import { useActiveViewportSize } from "../../responsivenes/useActiveViewportSize";
import { useStyles } from "../../styles/useStyles";

const Variant: { [key: string]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "body",
  small: "small",
};

export interface TypographyProps {
  ariaLabel?: string;
  color?: string;
  children?: ReactNode;
  innerHtml?: any;
  isCapitalized?: boolean;
  isUppercase?: boolean;
  position?: Position;
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  wrap?: boolean;
  variant?: keyof typeof Variant;
}

export interface Position {
  justifyContent?: string;
}

interface StyledTypographyProps extends TypographyProps {
  typographyVariant: {
    fontFamily: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: number;
  };
}

const StyledTypography = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "color",
      "isCapitalized",
      "isCapitalizedFirst",
      "isUppercase",
      "typographyVariant",
      "position",
      "wordBreak",
      "wrap",
    ].includes(prop),
})<StyledTypographyProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  vertical-align: middle;
  text-align: center;

  strong {
    font-weight: 700;
  }

  ${space};
  ${textAlign};
  ${typography};

  ${({ position }) =>
    position &&
    css`
      justify-content: ${position.justifyContent || "center"};
    `};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ isCapitalized }) =>
    isCapitalized &&
    css`
      text-transform: capitalize;
    `};

  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ typographyVariant }) => typographyVariant}

  ${({ wordBreak }) =>
    wordBreak &&
    css`
      word-break: ${wordBreak};
      white-space: pre-line;
    `};

  ${({ wrap }) =>
    wrap &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
`;

export const Typography = ({
  ariaLabel,
  color,
  children,
  innerHtml,
  isCapitalized = false,
  wordBreak,
  wrap = false,
  variant = "body",
  ...rest
}: TypographyProps): ReactElement => {
  const { customFonts } = useStyles();
  const { desktopS, tabletS } = useActiveViewportSize();

  const getVariantScaledByViewportSize = () => {
    if (!desktopS) {
      if (tabletS) {
        if (variant === "h1") {
          return "h1T";
        }
      } else {
        switch (variant) {
          case "h1":
            return "h1M";
          case "h2":
            return "h2M";
          case "h3":
            return "h3M";
          case "body":
            return "bodyM";
          default:
            return "smallM";
        }
      }
    }

    return variant;
  };

  const typographyVariant =
    customFonts[getVariantScaledByViewportSize() as keyof CustomFonts];

  return (
    <StyledTypography
      aria-label={ariaLabel}
      color={color}
      dangerouslySetInnerHTML={innerHtml && { __html: `${innerHtml}` }}
      isCapitalized={isCapitalized}
      typographyVariant={typographyVariant}
      wordBreak={wordBreak}
      wrap={wrap}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

