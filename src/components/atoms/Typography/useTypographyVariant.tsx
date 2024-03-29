import { useStyles } from "../../../core/styles/customization/useStyles";
import { CustomFonts } from "../../../core/styles/types/CustomFonts";
import { useActiveViewportSize } from "../../../layout/responsivenes/useActiveViewportSize";

import { Variant } from "./types/Variant";

export const useTypographyVariant = () => {
  const { customFonts } = useStyles();
  const { desktopS } = useActiveViewportSize();

  const getVariantScaledByViewportSize = (variant: keyof typeof Variant) => {
    if (!desktopS) {
      switch (variant) {
        case "h1":
          return "h1M";
        case "h2":
          return "h2M";
        case "h3":
          return "h3M";
        case "body":
          return "bodyM";
        case "article":
          return "articleM";
        case "title":
          return "titleM";
        default:
          return "smallM";
      }
    }

    return variant;
  };

  const getTypographyVariant = (variant: keyof typeof Variant) => {
    return customFonts[
      getVariantScaledByViewportSize(variant) as keyof CustomFonts
    ];
  };

  return {
    getTypographyVariant,
  };
};
