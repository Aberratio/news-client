"use client";

import { MenuDesktop } from "./desktop/MenuDesktop";
import { HideForMobiles } from "layout/responsivenes/HideForMobiles";

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
