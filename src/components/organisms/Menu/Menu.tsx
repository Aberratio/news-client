"use client";

import { MenuMobile } from "./mobile/MenuMobile";
import { MenuDesktop } from "./desktop/MenuDesktop";
import { HideForMobiles } from "layout/responsivenes/HideForMobiles";
import { ShowOnlyForMobiles } from "layout/responsivenes/ShowOnlyForMobiles";

const Menu = () => {
  return (
    <>
      <HideForMobiles>
        <MenuDesktop />
      </HideForMobiles>
    </>
  );
};

export default Menu;
