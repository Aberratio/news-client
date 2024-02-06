const configurableColors = [
  "white",
  "black",
  "blue",
  "gray",
  "green",
  "red",
  "overlay",
] as const;

type Color = (typeof configurableColors)[number];

export const colors: Record<Color, string> = {
  white: "white",
  black: "black",
  blue: "#2e6896",
  gray: "#cccccc",
  green: "#15a752",
  red: "#b80000",
  overlay: "rgb(0 0 0 / 50%)",
};
