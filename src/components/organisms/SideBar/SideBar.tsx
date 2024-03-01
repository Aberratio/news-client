"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";
import { Suspense } from "react";
import { fetchVisits } from "core/api/fetchVisits";
import { fetchLastComments } from "core/api/comments/fetchLastComments";

export const SideBar = async () => {
  const visits = await fetchVisits();
  const comments = await fetchLastComments();

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
