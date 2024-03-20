import { buildArticlePath } from "core/builders/buildPath";
import { formatDateToString } from "core/formaters/formatDateToString";
import { OrganizationItem } from "types/OrganizationItem";

import { mapToPhotoItem, SanityPhotoItem } from "./SanityPhotoItem";
import { mapToTabItem, SanityTabItem } from "./SanityTabItem";

export interface SanityOrganizationItem {
  firstSite?: {
    show: boolean;
    image?: SanityPhotoItem;
    releaseDate?: Date;
  };
  mainTopic?: {
    show: boolean;
    topic?: string;
    post?: {
      slug: string;
    };
  };
  tabs: SanityTabItem[];
}

export const mapDataToOrganizationItem = (
  data: SanityOrganizationItem
): OrganizationItem => {
  const hasMainTopic = data.mainTopic && data.mainTopic.show ? true : false;

  return {
    firstSite:
      data.firstSite && data.firstSite.show && data.firstSite?.image
        ? {
            image: mapToPhotoItem(data.firstSite.image),
            releaseDate: formatDateToString(
              data.firstSite?.releaseDate ?? new Date()
            ),
          }
        : undefined,
    mainTopic: hasMainTopic
      ? {
          topic: data.mainTopic?.topic ?? "",
          link: data.mainTopic?.post?.slug
            ? buildArticlePath(data.mainTopic?.post?.slug)
            : undefined,
        }
      : undefined,
    tabs: mapToTabItem(data.tabs),
  };
};
