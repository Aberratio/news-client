import { buildImageUrl } from "core/builders/buildImageUrl";
import { buildArticlePath } from "core/builders/buildPath";
import { formatDateToString } from "core/formaters/formatDateToString";
import { OrganizationItem } from "types/OrganizationItem";

import { SanityArticleItem } from "./SanityArticleItem";
import { mapToTabItem, SanityTabItem } from "./SanityTabItem";

export interface SanityOrganizationItem {
  firstSite?: {
    show: boolean;
    image?: {
      asset: {
        _ref: string;
      };
    };
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
  const hasFirstSite = data.firstSite && data.firstSite.show ? true : false;
  const hasMainTopic = data.mainTopic && data.mainTopic.show ? true : false;

  return {
    firstSite: hasFirstSite
      ? {
          image: {
            path: buildImageUrl(data.firstSite?.image?.asset._ref ?? ""),
          },
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
