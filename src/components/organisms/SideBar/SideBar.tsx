"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounter } from "./visit-counter/VisitCounter";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <FirstSite />
      <LastCommentsWidget />
      <VisitCounter />
    </SideBarWrapper>
  );
};
