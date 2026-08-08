import { publicationSettingsFallback } from "core/api/settings/publicationSettingsFallback";
import { buildArticlePath } from "core/builders/buildPath";
import { formatDateToString } from "core/formaters/formatDateToString";
import { OrganizationItem } from "types/OrganizationItem";
import { PublicationSettingsItem } from "types/PublicationSettingsItem";

import { mapToPhotoItem, SanityPhotoItem } from "./SanityPhotoItem";
import { mapToTabItem, SanityTabItem } from "./SanityTabItem";

export interface SanityOrganizationItem {
  firstSite?: {
    show: boolean;
    image?: SanityPhotoItem;
    releaseDate?: Date;
  };
  generalConfig?: {
    description?: string;
    footerDescription?: PublicationSettingsItem["footerDescription"];
    footerLogo?: SanityPhotoItem;
    image?: SanityPhotoItem;
    mobileLogo?: SanityPhotoItem;
    mainLogo?: SanityPhotoItem;
    name?: string;
    seoDescription?: string;
  };
  mainTopic?: {
    show: boolean;
    topic?: string;
    post?: {
      slug: string;
    };
  };
  publicationSettings?: SanityPublicationSettingsItem;
  tabs: SanityTabItem[];
}

export interface SanityPublicationSettingsItem {
  footer?: {
    description?: PublicationSettingsItem["footerDescription"];
  };
  logos?: {
    footerLogo?: SanityPhotoItem;
    mainLogo?: SanityPhotoItem;
    mobileLogo?: SanityPhotoItem;
  };
  commentsPolicy?: PublicationSettingsItem["commentsPolicy"];
  publicationName?: string;
  publicationShortName?: string;
  reactionsPolicy?: PublicationSettingsItem["reactionsPolicy"];
  seo?: {
    defaultDescription?: string;
    defaultTitle?: string;
    socialSharingImage?: SanityPhotoItem;
    titlePattern?: string;
  };
  tagline?: string;
}

const mapOptionalPhotoItem = (photo?: SanityPhotoItem) => {
  return photo ? mapToPhotoItem(photo) : undefined;
};

export const mapGeneralConfigToPublicationSettings = (
  data?: SanityOrganizationItem["generalConfig"]
): Partial<PublicationSettingsItem> | undefined => {
  if (!data) {
    return undefined;
  }

  const footerLogo = mapOptionalPhotoItem(data.footerLogo);
  const mainLogo = mapOptionalPhotoItem(data.mainLogo);
  const mobileLogo = mapOptionalPhotoItem(data.mobileLogo);
  const seoImage = mapOptionalPhotoItem(data.image);

  return {
    ...(data.footerDescription
      ? { footerDescription: data.footerDescription }
      : {}),
    ...(footerLogo ? { footerLogo } : {}),
    ...(mainLogo ? { mainLogo } : {}),
    ...(mobileLogo ? { mobileLogo } : {}),
    ...(data.name ? { name: data.name } : {}),
    ...(data.seoDescription || data.description || data.name
      ? { seoDescription: data.seoDescription ?? data.description ?? data.name }
      : {}),
    ...(seoImage ? { seoImage } : {}),
  };
};

export const mapPublicationSettingsItem = (
  data?: SanityPublicationSettingsItem
): Partial<PublicationSettingsItem> | undefined => {
  if (!data) {
    return undefined;
  }

  const footerLogo = mapOptionalPhotoItem(data.logos?.footerLogo);
  const mainLogo = mapOptionalPhotoItem(data.logos?.mainLogo);
  const mobileLogo = mapOptionalPhotoItem(data.logos?.mobileLogo);
  const seoImage = mapOptionalPhotoItem(data.seo?.socialSharingImage);

  return {
    ...(data.footer?.description
      ? { footerDescription: data.footer.description }
      : {}),
    ...(footerLogo ? { footerLogo } : {}),
    ...(mainLogo ? { mainLogo } : {}),
    ...(mobileLogo ? { mobileLogo } : {}),
    ...(data.publicationName ? { name: data.publicationName } : {}),
    ...(data.seo?.defaultDescription
      ? { seoDescription: data.seo.defaultDescription }
      : {}),
    ...(seoImage ? { seoImage } : {}),
    ...(data.publicationShortName
      ? { shortName: data.publicationShortName }
      : {}),
    ...(data.tagline ? { tagline: data.tagline } : {}),
    ...(data.seo?.titlePattern ? { titlePattern: data.seo.titlePattern } : {}),
    ...(data.commentsPolicy ? { commentsPolicy: data.commentsPolicy } : {}),
    ...(data.reactionsPolicy ? { reactionsPolicy: data.reactionsPolicy } : {}),
  };
};

export const resolvePublicationSettings = (
  publicationSettings?: SanityPublicationSettingsItem,
  generalConfig?: SanityOrganizationItem["generalConfig"]
): PublicationSettingsItem => {
  return {
    ...publicationSettingsFallback,
    ...mapGeneralConfigToPublicationSettings(generalConfig),
    ...mapPublicationSettingsItem(publicationSettings),
  };
};

export const mapDataToOrganizationItem = (
  data: SanityOrganizationItem
): OrganizationItem => {
  const hasMainTopic = data.mainTopic?.show ? true : false;
  const publicationSettings = resolvePublicationSettings(
    data.publicationSettings,
    data.generalConfig
  );

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
    generalConfig: publicationSettings,
    mainTopic: hasMainTopic
      ? {
          topic: data.mainTopic?.topic ?? "",
          link: data.mainTopic?.post?.slug
            ? buildArticlePath(data.mainTopic?.post?.slug)
            : undefined,
        }
      : undefined,
    tabs: mapToTabItem(data.tabs ?? []),
    publicationSettings,
  };
};
