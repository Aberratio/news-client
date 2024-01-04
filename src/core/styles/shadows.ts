const configurableShadows = ["basic"] as const;

type Shadow = (typeof configurableShadows)[number];

export const shadows: Record<Shadow, string> = {
  basic: "0px 0px 3px 3px #5069A7",
};
