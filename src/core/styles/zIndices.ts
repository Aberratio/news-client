const configurableZIndices = [
  "base",
  "overlay",
  "overlayItem",
  "modal",
  "modalCloseButton",
] as const;

type ZIndices = (typeof configurableZIndices)[number];

export const zIndices: Record<ZIndices, number> = {
  base: 1,
  overlay: 10000,
  overlayItem: 10001,
  modal: 10010,
  modalCloseButton: 10011,
};
