import type {
  BrandColorItem,
  PublicationSettingsItem,
  PublicationVisualStyleItem,
} from "types/PublicationSettingsItem";
import { publicationVisualStylePresets } from "types/PublicationSettingsItem";

import { CustomTheme, OppositeColor } from "../types/CustomTheme";

import { lightTheme } from "./lightTheme";

const HEX_COLOR_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

const normalizeHexColor = (color?: string): string | undefined => {
  const value = color?.trim();

  if (!value || !HEX_COLOR_PATTERN.test(value)) {
    return undefined;
  }

  return value;
};

const expandShortHex = (hex: string): string => {
  const value = hex.replace("#", "");

  if (value.length !== 3) {
    return value.slice(0, 6);
  }

  return value
    .split("")
    .map((digit) => `${digit}${digit}`)
    .join("");
};

const toOppositeColor = (
  color?: string,
  fallbackColor?: string,
): OppositeColor => {
  const normalizedColor = normalizeHexColor(color);
  const normalizedFallbackColor = normalizeHexColor(fallbackColor);

  if (!normalizedColor) {
    return getReadableOppositeColorForBackground(fallbackColor);
  }

  const hex = expandShortHex(normalizedColor).toLowerCase();
  const colorName =
    hex === "ffffff" ? "white" : hex === "000000" ? "black" : undefined;

  if (
    colorName &&
    normalizedFallbackColor &&
    hasReadableContrast(colorName, normalizedFallbackColor)
  ) {
    return colorName;
  }

  return getReadableOppositeColorForBackground(fallbackColor);
};

const hasBrandColors = (brandColors?: BrandColorItem): boolean => {
  return Boolean(
    normalizeHexColor(brandColors?.primary) ||
    normalizeHexColor(brandColors?.onPrimary) ||
    normalizeHexColor(brandColors?.accent) ||
    normalizeHexColor(brandColors?.background) ||
    normalizeHexColor(brandColors?.text),
  );
};

const hexToRgb = (color: string): string => {
  const hex = expandShortHex(color);

  return `${parseInt(hex.slice(0, 2), 16)} ${parseInt(
    hex.slice(2, 4),
    16,
  )} ${parseInt(hex.slice(4, 6), 16)}`;
};

const getRelativeLuminance = (hexColor: string): number => {
  const hex = expandShortHex(hexColor);
  const channels = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(
    (channel) => {
      const value = parseInt(channel, 16) / 255;

      return value <= 0.03928
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    },
  );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const getContrastRatio = (firstColor: string, secondColor: string): number => {
  const firstLuminance = getRelativeLuminance(firstColor);
  const secondLuminance = getRelativeLuminance(secondColor);
  const lightest = Math.max(firstLuminance, secondLuminance);
  const darkest = Math.min(firstLuminance, secondLuminance);

  return (lightest + 0.05) / (darkest + 0.05);
};

const getReadableOppositeColorByContrast = (
  backgroundColor: string,
): OppositeColor => {
  const whiteContrast = getContrastRatio(backgroundColor, "#ffffff");
  const blackContrast = getContrastRatio(backgroundColor, "#000000");

  return whiteContrast >= blackContrast ? "white" : "black";
};

const getOppositeColorHex = (oppositeColor: OppositeColor) =>
  oppositeColor === "white" ? "#ffffff" : "#000000";

const hasReadableContrast = (
  foregroundColor: OppositeColor,
  backgroundColor: string,
) => {
  return (
    getContrastRatio(getOppositeColorHex(foregroundColor), backgroundColor) >=
    4.5
  );
};

const getReadableOppositeColorForBackground = (
  backgroundColor?: string,
): OppositeColor => {
  const normalizedColor = normalizeHexColor(backgroundColor);

  if (!normalizedColor) {
    return lightTheme.general.primaryOppositeColor;
  }

  return getReadableOppositeColorByContrast(normalizedColor);
};

const mapVisualTokens = (
  visualStyle: PublicationVisualStyleItem | undefined,
  colors: {
    accentColor: string;
    primaryColor: string;
    tertiaryColor: string;
  },
): CustomTheme["publicationVisual"] => {
  const style = visualStyle ?? publicationVisualStylePresets.classic;
  const radius = `${Math.min(Math.max(style.cornerRadius, 0), 24)}px`;
  const primaryRgb = hexToRgb(colors.primaryColor);
  const cardBorderColor =
    style.cardStyle === "flat"
      ? "transparent"
      : lightTheme.publicationVisual.cardBorderColor;
  const cardShadow =
    style.cardStyle === "elevated"
      ? `0 10px 28px rgb(${primaryRgb} / 12%)`
      : "none";
  const cardShadowHover =
    style.cardStyle === "elevated"
      ? `0 14px 34px rgb(${primaryRgb} / 16%)`
      : style.cardStyle === "editorial"
        ? `0 8px 0 rgb(${primaryRgb} / 16%)`
        : "none";
  const presetHeaderAccent =
    style.themePreset === "classic"
      ? colors.tertiaryColor
      : style.themePreset === "magazine"
        ? colors.accentColor
        : colors.primaryColor;
  const mobileNavigationBackgroundColor =
    style.themePreset === "classic" ? colors.accentColor : colors.primaryColor;
  const sectionHeaderBackgroundColor =
    style.sectionHeaderStyle === "filled" ? colors.primaryColor : "transparent";

  return {
    ...lightTheme.publicationVisual,
    cardBorderColor,
    cardBorderWidth: style.cardStyle === "flat" ? "0" : "1px",
    cardHoverColor: colors.accentColor,
    cardShadow,
    cardShadowHover,
    cornerRadius: radius,
    density: style.density,
    footerAccentColor: colors.accentColor,
    formFocusShadow: `0 0 0 3px rgb(${primaryRgb} / 18%)`,
    headerAccentColor: presetHeaderAccent,
    headerBackgroundColor: colors.primaryColor,
    mobileNavigationBackgroundColor,
    sectionHeaderBackgroundColor,
    sectionHeaderBorderColor: colors.primaryColor,
    sectionHeaderColor:
      style.sectionHeaderStyle === "filled"
        ? getReadableOppositeColorForBackground(colors.primaryColor)
        : colors.primaryColor,
    submenuActiveBackgroundColor: colors.primaryColor,
    themePreset: style.themePreset,
  };
};

export const mapPublicationSettingsToTheme = (
  publicationSettings?: Partial<
    Pick<PublicationSettingsItem, "brandColors" | "visualStyle">
  >,
): CustomTheme => {
  const brandColors = publicationSettings?.brandColors;
  const hasConfigurableBrandColors = hasBrandColors(brandColors);

  if (!hasConfigurableBrandColors && !publicationSettings?.visualStyle) {
    return lightTheme;
  }

  const primaryColor =
    normalizeHexColor(brandColors?.primary) ?? lightTheme.general.primaryColor;
  const accentColor =
    normalizeHexColor(brandColors?.accent) ?? lightTheme.general.secondaryColor;
  const backgroundColor =
    normalizeHexColor(brandColors?.background) ??
    lightTheme.buttons.primary.backgroundColor;
  const textColor =
    normalizeHexColor(brandColors?.text) ??
    lightTheme.buttons.primary.backgroundOppositeColor;
  const primaryOppositeColor = toOppositeColor(
    brandColors?.onPrimary,
    primaryColor,
  );
  const accentOppositeColor =
    getReadableOppositeColorForBackground(accentColor);
  const visualTokens = mapVisualTokens(publicationSettings?.visualStyle, {
    accentColor,
    primaryColor,
    tertiaryColor: lightTheme.general.tertiaryColor,
  });

  return {
    ...lightTheme,
    general: {
      ...lightTheme.general,
      primaryColor,
      primaryOppositeColor,
      secondaryColor: accentColor,
      secondaryOppositeColor: accentOppositeColor,
    },
    buttons: {
      ...lightTheme.buttons,
      primary: {
        ...lightTheme.buttons.primary,
        backgroundColor,
        backgroundOppositeColor:
          getReadableOppositeColorForBackground(backgroundColor),
        borderColor: textColor,
        onHoverBackgroundColor: primaryColor,
        onHoverBackgroundOppositeColor: primaryOppositeColor,
      },
      secondary: {
        ...lightTheme.buttons.secondary,
        backgroundColor: primaryColor,
        backgroundOppositeColor: primaryOppositeColor,
        onHoverBackgroundColor: accentColor,
        onHoverBackgroundOppositeColor: accentOppositeColor,
      },
      tertiary: {
        ...lightTheme.buttons.tertiary,
        backgroundColor,
        backgroundOppositeColor:
          getReadableOppositeColorForBackground(backgroundColor),
        borderColor: accentColor,
      },
      link: {
        ...lightTheme.buttons.link,
        color: textColor,
        onHoverColor: accentColor,
      },
    },
    modals: {
      ...lightTheme.modals,
      specialAccentColor: primaryColor,
      specialAccentOppositeColor: primaryOppositeColor,
    },
    publicationVisual: visualTokens,
  };
};

export const mapPublicationBrandColorsToTheme = (
  brandColors?: BrandColorItem,
): CustomTheme => {
  return mapPublicationSettingsToTheme({ brandColors });
};
