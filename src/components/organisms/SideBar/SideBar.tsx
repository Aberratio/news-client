"use server";

import { Suspense } from "react";
import { fetchLastComments } from "core/api/comments/fetchLastComments";
import { fetchVisits } from "core/api/fetchVisits";
import { BoxAddItem } from "core/api/settings/fetchAdds";

import AddsBar from "./adds-bar/AddsBar";
import { FirstSite } from "./first-site/FirstSite";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { SideBarWrapper } from "./SideBarWrapper";

interface SideBarProps {
  boxAdds?: BoxAddItem[];
}

export const SideBar = async ({ boxAdds }: SideBarProps) => {
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
      <Suspense>{boxAdds && <AddsBar boxAdds={boxAdds} />}</Suspense>
    </SideBarWrapper>
  );
};
