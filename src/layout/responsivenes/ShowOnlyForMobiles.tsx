import { useActiveViewportSize } from "./useActiveViewportSize";

interface ShowOnlyForMobilesProps {
  children: React.ReactNode;
}

export const ShowOnlyForMobiles = ({ children }: ShowOnlyForMobilesProps) => {
  const { tabletS } = useActiveViewportSize();

  return tabletS ? null : <>{children}</>;
};
