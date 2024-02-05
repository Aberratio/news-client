"use server";

import { FirstSite } from "./FirstSite";
import { VisitCounter } from "./visit-counter/VisitCounter";
import { LastComments } from "./last-comments/LastComments";
import { SideBarWrapper } from "./SideBarWrapper";

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <FirstSite />
      <LastComments />
      <VisitCounter />
    </SideBarWrapper>
  );
};
