const configurableColors = [
  "white",
  "black",
  "gray",
  "red",
  "overlay",
] as const;

type Color = (typeof configurableColors)[number];

export const colors: Record<Color, string> = {
  white: "white",
  black: "black",
  gray: "#cccccc",
  red: "red",
  overlay: "rgb(0 0 0 / 50%)",
};
