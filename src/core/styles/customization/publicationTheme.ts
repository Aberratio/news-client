import type {
  BrandColorItem,
  PublicationSettingsItem,
  PublicationVisualStyleItem,
} from "types/PublicationSettingsItem";

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

const getReadableOppositeColor = (hexColor?: string): OppositeColor => {
  const normalizedColor = normalizeHexColor(hexColor);

  if (!normalizedColor) {
    return lightTheme.general.primaryOppositeColor;
  }

  const hex = expandShortHex(normalizedColor);
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  return luminance > 0.6 ? "black" : "white";
};

const toOppositeColor = (
  color?: string,
  fallbackColor?: string,
): OppositeColor => {
  const normalizedColor = normalizeHexColor(color);

  if (!normalizedColor) {
    return getReadableOppositeColor(fallbackColor);
  }

  const hex = expandShortHex(normalizedColor).toLowerCase();

  if (hex === "ffffff") {
    return "white";
  }

  if (hex === "000000") {
    return "black";
  }

  return getReadableOppositeColor(fallbackColor);
};

const hasBrandColors = (brandColors?: BrandColorItem): boolean => {
  return Boolean(
    normalizeHexColor(brandColors?.primary) ||
      normalizeHexColor(brandColors?.onPrimary) ||
      normalizeHexColor(brandColors?.accent) ||
      normalizeHexColor(brandColors?.background) ||
      normalizeHexColor(brandColors?.text)
  );
};

const hexToRgb = (color: string): string => {
  const hex = expandShortHex(color);

  return `${parseInt(hex.slice(0, 2), 16)} ${parseInt(
    hex.slice(2, 4),
    16,
  )} ${parseInt(hex.slice(4, 6), 16)}`;
};

const mapVisualTokens = (
  visualStyle: PublicationVisualStyleItem | undefined,
  colors: {
    accentColor: string;
    primaryColor: string;
    tertiaryColor: string;
  },
): CustomTheme["publicationVisual"] => {
  const style = visualStyle ?? {
    cardStyle: "elevated",
    cornerRadius: 8,
    density: "comfortable",
    headerStyle: "masthead",
    headlineStyle: "serif",
    sectionHeaderStyle: "underline",
    themePreset: "classic",
  };
  const radius = `${Math.min(Math.max(style.cornerRadius, 0), 24)}px`;
  const primaryRgb = hexToRgb(colors.primaryColor);
  const cardBorderColor =
    style.cardStyle === "flat" ? "transparent" : lightTheme.publicationVisual.cardBorderColor;
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
    mobileNavigationBackgroundColor:
      style.themePreset === "classic" ? colors.accentColor : colors.primaryColor,
    sectionHeaderBackgroundColor:
      style.sectionHeaderStyle === "filled" ? colors.primaryColor : "transparent",
    sectionHeaderBorderColor: colors.primaryColor,
    sectionHeaderColor:
      style.sectionHeaderStyle === "filled"
        ? getReadableOppositeColor(colors.primaryColor)
        : colors.primaryColor,
    submenuActiveBackgroundColor: colors.primaryColor,
    themePreset: style.themePreset,
  };
};

export const mapPublicationSettingsToTheme = (
  publicationSettings?: Partial<
    Pick<
    PublicationSettingsItem,
    "brandColors" | "visualStyle"
    >
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
  const accentOppositeColor = getReadableOppositeColor(accentColor);
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
        backgroundOppositeColor: getReadableOppositeColor(backgroundColor),
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
        backgroundOppositeColor: getReadableOppositeColor(backgroundColor),
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
