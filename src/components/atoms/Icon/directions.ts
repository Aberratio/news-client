const drectionList = ["left", "up", "right", "down"] as const;
const rotationList = ["0", "90", "180", "270"] as const;

export type Direction = (typeof drectionList)[number];
export type Rotation = (typeof rotationList)[number];

export const directions: Record<Direction, Rotation> = {
  left: "0",
  up: "90",
  right: "180",
  down: "270",
};
