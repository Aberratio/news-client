import { Suspense } from "react";
import { isCommentsPolicyEnabled } from "core/policies/publicationPolicies";
import { BoxAddItem } from "types/AddsItem";
import { CommentSummaryItem } from "types/CommentSummaryItem";
import { PublicationSettingsItem } from "types/PublicationSettingsItem";

import AddsBar from "./adds-bar/AddsBar";
import { FirstSite } from "./first-site/FirstSite";
import { LastCommentsWidget } from "./last-comments/LastCommentsWidget";
import { VisitCounterWidget } from "./visit-counter/VisitCounterWidget";
import { SideBarWrapper } from "./SideBarWrapper";
interface SideBarProps {
  boxAdds?: BoxAddItem[];
  comments?: CommentSummaryItem[];
  publicationSettings?: PublicationSettingsItem;
}

export const SideBar = ({
  boxAdds,
  comments = [],
  publicationSettings,
}: SideBarProps) => {
  const commentsEnabled = isCommentsPolicyEnabled(publicationSettings);

  return (
    <SideBarWrapper>
      <Suspense>
        <FirstSite />
      </Suspense>
      <Suspense>{boxAdds && <AddsBar boxAdds={boxAdds} />}</Suspense>
      {commentsEnabled && (
        <Suspense>
          <LastCommentsWidget
            comments={comments}
            title={publicationSettings?.recentComments.title}
          />
        </Suspense>
      )}
      <Suspense>
        <VisitCounterWidget />
      </Suspense>
    </SideBarWrapper>
  );
};
