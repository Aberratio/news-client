import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

import { breakpoints,Device } from "../../core/styles/breakpoints";

export type DeviceType = Device | "_";

export const useActiveViewportSize = () => {
  const isLargerThanMobileXS = useMediaQuery({
    query: `(min-width: ${breakpoints.mobileXS})`,
  });
  const isLargerThanMobileM = useMediaQuery({
    query: `(min-width: ${breakpoints.mobileM})`,
  });
  const isLargerThanMobileL = useMediaQuery({
    query: `(min-width: ${breakpoints.mobileL})`,
  });
  const isLargerThanMobileXL = useMediaQuery({
    query: `(min-width: ${breakpoints.mobileXL})`,
  });
  const isLargerThanTabletS = useMediaQuery({
    query: `(min-width: ${breakpoints.tabletS})`,
  });
  const isLargerThanTabletM = useMediaQuery({
    query: `(min-width: ${breakpoints.tabletM})`,
  });
  const isLargerThanTabletL = useMediaQuery({
    query: `(min-width: ${breakpoints.tabletL})`,
  });
  const isLargerThanDesktopS = useMediaQuery({
    query: `(min-width: ${breakpoints.desktopS})`,
  });
  const isLargerThanDesktopM = useMediaQuery({
    query: `(min-width: ${breakpoints.desktopM})`,
  });
  const isLargerThanDesktopL = useMediaQuery({
    query: `(min-width: ${breakpoints.desktopL})`,
  });

  return {
    mobileXS: isLargerThanMobileXS,
    mobileM: isLargerThanMobileM,
    mobileL: isLargerThanMobileL,
    mobileXL: isLargerThanMobileXL,
    tabletS: isLargerThanTabletS,
    tabletM: isLargerThanTabletM,
    tabletL: isLargerThanTabletL,
    desktopS: isLargerThanDesktopS,
    desktopM: isLargerThanDesktopM,
    desktopL: isLargerThanDesktopL,
  };
};

interface PortraitProps {
  children: ReactElement;
}

export const Portrait = ({ children }: PortraitProps) => {
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  return isPortrait ? children : null;
};

interface LandscapeProps {
  children: ReactElement;
}

export const Landscape = ({ children }: LandscapeProps) => {
  const isLandscape = useMediaQuery({ orientation: "landscape" });

  return isLandscape ? children : null;
};
