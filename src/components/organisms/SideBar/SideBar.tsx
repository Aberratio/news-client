"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";
import { Suspense } from "react";

interface SideBarProps {
  comments: any;
}

export const SideBar = ({ comments }: SideBarProps) => {
  return (
    <SideBarWrapper>
      <Suspense>
        <FirstSite />
      </Suspense>
      <Suspense>
        <LastCommentsWidget comments={comments} />
      </Suspense>
      <Suspense>
        <VisitCounterWidget />
      </Suspense>
    </SideBarWrapper>
  );
};
