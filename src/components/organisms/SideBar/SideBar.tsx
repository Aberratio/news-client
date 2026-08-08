"use server";

import { Suspense } from "react";
import { fetchLastComments } from "core/api/comments/fetchLastComments";
import { isCommentsPolicyEnabled } from "core/policies/publicationPolicies";
import { BoxAddItem } from "types/AddsItem";
import { PublicationSettingsItem } from "types/PublicationSettingsItem";

import AddsBar from "./adds-bar/AddsBar";
import { FirstSite } from "./first-site/FirstSite";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { SideBarWrapper } from "./SideBarWrapper";
interface SideBarProps {
  boxAdds?: BoxAddItem[];
  publicationSettings?: PublicationSettingsItem;
}

export const SideBar = async ({ boxAdds, publicationSettings }: SideBarProps) => {
  const commentsEnabled = isCommentsPolicyEnabled(publicationSettings);
  const comments = commentsEnabled ? await fetchLastComments() : [];

  return (
    <SideBarWrapper>
      <Suspense>
        <FirstSite />
      </Suspense>
      <Suspense>{boxAdds && <AddsBar boxAdds={boxAdds} />}</Suspense>
      {commentsEnabled && (
        <Suspense>
          <LastCommentsWidget comments={comments} />
        </Suspense>
      )}
      <Suspense>
        <VisitCounterWidget />
      </Suspense>
    </SideBarWrapper>
  );
};
