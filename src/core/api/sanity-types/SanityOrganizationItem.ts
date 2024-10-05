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
  generalConfig: {
    name: string;
    mobileLogo: SanityPhotoItem;
    footerLogo: SanityPhotoItem;
    mainLogo: SanityPhotoItem;
    image: SanityPhotoItem;
    seoDescription: string;
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
    generalConfig: {
      footerLogo: mapToPhotoItem(data.generalConfig.footerLogo),
      mainLogo: mapToPhotoItem(data.generalConfig.mainLogo),
      mobileLogo: mapToPhotoItem(data.generalConfig.mobileLogo),
      name: data.generalConfig.name,
      seoDescription: data.generalConfig.seoDescription,
      seoImage: mapToPhotoItem(data.generalConfig.image),
    },
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
