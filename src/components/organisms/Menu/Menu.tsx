"use client";

import { HideForMobiles } from "layout/responsivenes/HideForMobiles";

import { MenuDesktop } from "./desktop/MenuDesktop";

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
