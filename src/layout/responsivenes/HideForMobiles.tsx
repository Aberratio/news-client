"use client";

import { useActiveViewportSize } from "./useActiveViewportSize";

interface HideForMobileProps {
  children: React.ReactNode;
}

export const HideForMobiles = ({ children }: HideForMobileProps) => {
  const { tabletS } = useActiveViewportSize();

  return tabletS ? <>{children}</> : null;
};
