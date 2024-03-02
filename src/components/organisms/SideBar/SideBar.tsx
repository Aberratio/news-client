"use server";

import { FirstSite } from "./first-site/FirstSite";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { SideBarWrapper } from "./SideBarWrapper";
import { Suspense } from "react";
import { fetchVisits } from "core/api/fetchVisits";
import { fetchLastComments } from "core/api/comments/fetchLastComments";
import AddsBar from "./adds-bar/AddsBar";
import { BoxAddItem } from "core/api/settings/fetchAdds";

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
