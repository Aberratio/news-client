"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";
import { Suspense } from "react";
import { fetchVisits } from "core/api/fetchVisits";

interface SideBarProps {
  comments: any;
}

export const SideBar = async ({ comments }: SideBarProps) => {
  const visits = await fetchVisits();

  return (
    <SideBarWrapper>
      <Suspense>
        <FirstSite />
      </Suspense>
      <Suspense>
        <LastCommentsWidget comments={comments} />
      </Suspense>
      <Suspense>
        <VisitCounterWidget visits={visits} />
      </Suspense>
    </SideBarWrapper>
  );
};
