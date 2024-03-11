"use client";

import { useEffect } from "react";
import { HideForMobiles } from "layout/responsivenes/HideForMobiles";
import { ShowOnlyForMobiles } from "layout/responsivenes/ShowOnlyForMobiles";
import { usePathname } from "next/navigation";

import { NavigationDesktop } from "./desktop/NavigationDesktop";
import { NavigationMobile } from "./mobile/NavigationMobile";

const Navigation = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
