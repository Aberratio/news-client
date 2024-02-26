"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";
import { Suspense } from "react";

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <Suspense>
        <FirstSite />
      </Suspense>
      <Suspense>
        <LastCommentsWidget />
      </Suspense>
      <Suspense>
        <VisitCounterWidget />
      </Suspense>
    </SideBarWrapper>
  );
};
