"use client";

import { HideForMobiles } from "layout/responsivenes/HideForMobiles";
import { NavigationDesktop } from "./desktop/NavigationDesktop";
import { ShowOnlyForMobiles } from "layout/responsivenes/ShowOnlyForMobiles";
import { NavigationMobile } from "./mobile/NavigationMobile";

const Navigation = () => {
  return (
    <>
      <HideForMobiles>
        <NavigationDesktop />
      </HideForMobiles>
      <ShowOnlyForMobiles>
        <NavigationMobile />
      </ShowOnlyForMobiles>
    </>
  );
};

export default Navigation;
