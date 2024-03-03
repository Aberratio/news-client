"use client";

import { HideForMobiles } from "layout/responsivenes/HideForMobiles";
import { ShowOnlyForMobiles } from "layout/responsivenes/ShowOnlyForMobiles";

import { NavigationDesktop } from "./desktop/NavigationDesktop";
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
