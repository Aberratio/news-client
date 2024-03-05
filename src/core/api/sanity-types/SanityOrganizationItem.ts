import { buildImageUrl } from "core/builders/buildImageUrl";
import { formatDateToString } from "core/formaters/formatDateToString";
import { OrganizationItem } from "types/OrganizationItem";

import { mapToTabItem,SanityTabItem } from "./SanityTabItem";

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
    post?: string;
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
          post: data.mainTopic?.post ?? "",
        }
      : undefined,
    tabs: mapToTabItem(data.tabs),
  };
};
