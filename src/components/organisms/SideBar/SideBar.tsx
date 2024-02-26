"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <FirstSite />
      <LastCommentsWidget />
      <VisitCounterWidget />
    </SideBarWrapper>
  );
};
