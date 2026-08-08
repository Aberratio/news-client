import type { BrandColorItem } from "types/PublicationSettingsItem";

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

const toOppositeColor = (color?: string, fallbackColor?: string): OppositeColor => {
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

export const mapPublicationBrandColorsToTheme = (
  brandColors?: BrandColorItem
): CustomTheme => {
  if (!hasBrandColors(brandColors)) {
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
    primaryColor
  );
  const accentOppositeColor = getReadableOppositeColor(accentColor);

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
  };
};
