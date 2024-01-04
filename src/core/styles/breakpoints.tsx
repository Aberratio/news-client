export const deviceList = [
  "mobileXS",
  "mobileM",
  "mobileL",
  "mobileXL",
  "tabletS",
  "tabletM",
  "tabletL",
  "desktopS",
  "desktopM",
  "desktopL",
] as const;

export const breakpointList = [
  "320px",
  "360px",
  "420px",
  "568px",
  "768px",
  "1024px",
  "1140px",
  "1366px",
  "1680px",
  "1920px",
] as const;

export type Device = (typeof deviceList)[number];
export type Breakpoint = (typeof breakpointList)[number];

export const breakpoints: Record<Device, Breakpoint> = {
  mobileXS: "320px",
  mobileM: "360px",
  mobileL: "420px",
  mobileXL: "568px",
  tabletS: "768px",
  tabletM: "1024px",
  tabletL: "1140px",
  desktopS: "1366px",
  desktopM: "1680px",
  desktopL: "1920px",
};
