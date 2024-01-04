export const spaces: Record<SpaceTypes, Spaces> = {
  "4xs": "1px",
  "3xs": "2px",
  "2xs": "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lo: "20px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
  "3xl": "48px",
  mg: "56px",
  "2mg": "64px",
  "3mg": "96px",
  gg: "128px",
  "2gg": "160px",
};

export type SpaceTypes =
  | "4xs"
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lo"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "mg"
  | "2mg"
  | "3mg"
  | "gg"
  | "2gg";

export type Spaces =
  | "1px"
  | "2px"
  | "4px"
  | "8px"
  | "12px"
  | "16px"
  | "20px"
  | "24px"
  | "32px"
  | "40px"
  | "48px"
  | "56px"
  | "64px"
  | "96px"
  | "128px"
  | "160px";
