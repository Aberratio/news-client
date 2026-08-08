import { publicationSettingsFallback } from "core/api/settings/publicationSettingsFallback";
import { buildArticlePath } from "core/builders/buildPath";
import { formatDateToString } from "core/formaters/formatDateToString";
import { OrganizationItem } from "types/OrganizationItem";
import {
  BrandColorItem,
  PublicationSettingsItem,
} from "types/PublicationSettingsItem";

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
  brandColors?: SanityBrandColorsItem;
  footer?: {
    contactEmail?: string;
    contactHeader?: string;
    contactItems?: SanityFooterLinkItem[];
    contactPhone?: string;
    description?: PublicationSettingsItem["footerDescription"];
    editorialOffice?: string;
    legalEntity?: string;
    legalHeader?: string;
    legalLinks?: SanityFooterLinkItem[];
    publisher?: string;
  };
  latestIssue?: Partial<PublicationSettingsItem["latestIssue"]>;
  visualStyle?: Partial<PublicationSettingsItem["visualStyle"]>;
  logos?: {
    footerLogo?: SanityPhotoItem;
    mainLogo?: SanityPhotoItem;
    mobileLogo?: SanityPhotoItem;
  };
  commentsPolicy?: PublicationSettingsItem["commentsPolicy"];
  publicationName?: string;
  publicationShortName?: string;
  articleRecommendations?: Partial<PublicationSettingsItem["articleRecommendations"]>;
  reactionsPolicy?: PublicationSettingsItem["reactionsPolicy"];
  recentComments?: Partial<PublicationSettingsItem["recentComments"]>;
  seo?: {
    defaultDescription?: string;
    defaultTitle?: string;
    socialSharingImage?: SanityPhotoItem;
    titlePattern?: string;
  };
  tagline?: string;
}

interface SanityColorInputItem {
  hex?: string;
}

interface SanityBrandColorsItem {
  accent?: SanityColorInputItem;
  background?: SanityColorInputItem;
  onPrimary?: SanityColorInputItem;
  primary?: SanityColorInputItem;
  text?: SanityColorInputItem;
}

interface SanityFooterLinkItem {
  href?: string;
  label: string;
  url?: string;
}

const visualStyleOptions = {
  cardStyle: ["flat", "bordered", "elevated", "editorial"],
  density: ["compact", "comfortable"],
  headerStyle: ["masthead", "compact", "centeredLogo"],
  headlineStyle: ["serif", "sans", "condensed"],
  sectionHeaderStyle: ["underline", "filled", "accentBar"],
  themePreset: ["classic", "modern", "civic", "magazine"],
} as const;

const mapVisualStyleOption = <T extends readonly string[]>(
  value: string | undefined,
  options: T,
): T[number] | undefined => {
  return value && options.includes(value) ? value : undefined;
};

const mapCornerRadius = (value?: number) => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return undefined;
  }

  return Math.min(Math.max(Math.round(value), 0), 24);
};

const mapOptionalPhotoItem = (photo?: SanityPhotoItem) => {
  return photo ? mapToPhotoItem(photo) : undefined;
};

const mapOptionalBrandColor = (color?: SanityColorInputItem) => {
  return color?.hex;
};

const mapBrandColors = (
  brandColors?: SanityBrandColorsItem,
): BrandColorItem | undefined => {
  if (!brandColors) {
    return undefined;
  }

  const colors: BrandColorItem = {
    accent: mapOptionalBrandColor(brandColors.accent),
    background: mapOptionalBrandColor(brandColors.background),
    onPrimary: mapOptionalBrandColor(brandColors.onPrimary),
    primary: mapOptionalBrandColor(brandColors.primary),
    text: mapOptionalBrandColor(brandColors.text),
  };

  return Object.values(colors).some(Boolean) ? colors : undefined;
};

const splitTextLines = (text?: string) => {
  return text
    ?.split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
};

const mapFooterColumns = (
  footer?: SanityPublicationSettingsItem["footer"],
): PublicationSettingsItem["footerColumns"] | undefined => {
  if (!footer) {
    return undefined;
  }

  const [fallbackLegalColumn, fallbackContactColumn] =
    publicationSettingsFallback.footerColumns;

  const mapLinks = (links?: SanityFooterLinkItem[]) =>
    links
      ?.filter((link) => link.label)
      .map((link) => ({
        href: link.href ?? link.url,
        label: link.label,
      })) ?? [];

  const legalLinks = mapLinks(footer.legalLinks);
  const contactLinks = [
    ...mapLinks(footer.contactItems),
    ...(footer.contactPhone
      ? [{ href: `tel:${footer.contactPhone}`, label: footer.contactPhone }]
      : []),
    ...(footer.contactEmail
      ? [{ href: `mailto:${footer.contactEmail}`, label: footer.contactEmail }]
      : []),
  ];
  const textItems = [
    ...(splitTextLines(footer.editorialOffice)?.map((text) => ({ text })) ??
      []),
    ...(splitTextLines(footer.publisher)?.map((text) => ({ text })) ?? []),
    ...(splitTextLines(footer.legalEntity)?.map((text) => ({ text })) ?? []),
  ];

  return [
    {
      header: footer.legalHeader ?? fallbackLegalColumn.header,
      links: legalLinks.length > 0 ? legalLinks : fallbackLegalColumn.links,
      textItems: fallbackLegalColumn.textItems,
    },
    {
      header: footer.contactHeader ?? fallbackContactColumn.header,
      links:
        contactLinks.length > 0 ? contactLinks : fallbackContactColumn.links,
      textItems:
        textItems.length > 0 ? textItems : fallbackContactColumn.textItems,
    },
  ];
};

export const mapGeneralConfigToPublicationSettings = (
  data?: SanityOrganizationItem["generalConfig"],
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
  data?: SanityPublicationSettingsItem,
): Partial<PublicationSettingsItem> | undefined => {
  if (!data) {
    return undefined;
  }

  const footerLogo = mapOptionalPhotoItem(data.logos?.footerLogo);
  const mainLogo = mapOptionalPhotoItem(data.logos?.mainLogo);
  const mobileLogo = mapOptionalPhotoItem(data.logos?.mobileLogo);
  const seoImage = mapOptionalPhotoItem(data.seo?.socialSharingImage);
  const brandColors = mapBrandColors(data.brandColors);
  const footerColumns = mapFooterColumns(data.footer);
  const visualStyle = data.visualStyle
    ? {
        ...publicationSettingsFallback.visualStyle,
        cardStyle:
          mapVisualStyleOption(
            data.visualStyle.cardStyle,
            visualStyleOptions.cardStyle,
          ) ?? publicationSettingsFallback.visualStyle.cardStyle,
        cornerRadius:
          mapCornerRadius(data.visualStyle.cornerRadius) ??
          publicationSettingsFallback.visualStyle.cornerRadius,
        density:
          mapVisualStyleOption(
            data.visualStyle.density,
            visualStyleOptions.density,
          ) ?? publicationSettingsFallback.visualStyle.density,
        headerStyle:
          mapVisualStyleOption(
            data.visualStyle.headerStyle,
            visualStyleOptions.headerStyle,
          ) ?? publicationSettingsFallback.visualStyle.headerStyle,
        headlineStyle:
          mapVisualStyleOption(
            data.visualStyle.headlineStyle,
            visualStyleOptions.headlineStyle,
          ) ?? publicationSettingsFallback.visualStyle.headlineStyle,
        sectionHeaderStyle:
          mapVisualStyleOption(
            data.visualStyle.sectionHeaderStyle,
            visualStyleOptions.sectionHeaderStyle,
          ) ?? publicationSettingsFallback.visualStyle.sectionHeaderStyle,
        themePreset:
          mapVisualStyleOption(
            data.visualStyle.themePreset,
            visualStyleOptions.themePreset,
          ) ?? publicationSettingsFallback.visualStyle.themePreset,
      }
    : undefined;

  return {
    ...(footerColumns ? { footerColumns } : {}),
    ...(data.footer?.description
      ? { footerDescription: data.footer.description }
      : {}),
    ...(data.latestIssue
      ? {
          latestIssue: {
            ...publicationSettingsFallback.latestIssue,
            ...data.latestIssue,
          },
        }
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
    ...(data.articleRecommendations
      ? {
          articleRecommendations: {
            ...publicationSettingsFallback.articleRecommendations,
            ...data.articleRecommendations,
          },
        }
      : {}),
    ...(data.recentComments
      ? {
          recentComments: {
            ...publicationSettingsFallback.recentComments,
            ...data.recentComments,
          },
        }
      : {}),
    ...(brandColors ? { brandColors } : {}),
    ...(visualStyle ? { visualStyle } : {}),
  };
};

export const resolvePublicationSettings = (
  publicationSettings?: SanityPublicationSettingsItem,
  generalConfig?: SanityOrganizationItem["generalConfig"],
): PublicationSettingsItem => {
  return {
    ...publicationSettingsFallback,
    ...mapGeneralConfigToPublicationSettings(generalConfig),
    ...mapPublicationSettingsItem(publicationSettings),
  };
};

export const mapDataToOrganizationItem = (
  data: SanityOrganizationItem,
): OrganizationItem => {
  const hasMainTopic = data.mainTopic?.show ? true : false;
  const publicationSettings = resolvePublicationSettings(
    data.publicationSettings,
    data.generalConfig,
  );

  return {
    firstSite:
      data.firstSite && data.firstSite.show && data.firstSite?.image
        ? {
            image: mapToPhotoItem(data.firstSite.image),
            releaseDate: formatDateToString(
              data.firstSite?.releaseDate ?? new Date(),
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
