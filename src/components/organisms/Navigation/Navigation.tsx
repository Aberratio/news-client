"use client";

import { HideForMobiles } from "layout/responsivenes/HideForMobiles";
import { NavigationDesktop } from "./desktop/NavigationDesktop";

const Navigation = () => {
  return (
    <HideForMobiles>
      <NavigationDesktop />
    </HideForMobiles>
  );
};

export default Navigation;
