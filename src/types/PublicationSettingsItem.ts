import { GeneralConfigItem } from "./GeneralConfigItem";
import { PhotoItem } from "./PhotoItem";

export interface BrandColorItem {
  accent?: string;
  background?: string;
  onPrimary?: string;
  primary?: string;
  text?: string;
}

export interface CommentsPolicyItem {
  enabled?: boolean;
  moderationRequired?: boolean;
  policyNote?: string;
}

export interface ReactionsPolicyItem {
  enabled?: boolean;
  dislikeLabel?: string;
  likeLabel?: string;
}

export interface PublicationFooterLinkItem {
  href?: string;
  label: string;
}

export interface PublicationFooterTextItem {
  label?: string;
  text: string;
}

export interface PublicationFooterColumnItem {
  header: string;
  links?: PublicationFooterLinkItem[];
  textItems?: PublicationFooterTextItem[];
}

export interface LatestIssueTextItem {
  downloadButtonLabel: string;
  imageAlt: string;
  modalDescription: string;
  releaseDatePrefix: string;
  title: string;
}

export interface RecentCommentsSettingsItem {
  enabled?: boolean;
  limit?: number;
  mobilePlacement?: "afterContent" | "hidden";
  mobileTitle?: string;
  title?: string;
}

export type ArticleRecommendationsFallbackStrategy =
  "categoryTabRecent" | "categoryTabPopular" | "categoryTabCommented";

export interface ArticleRecommendationsSettingsItem {
  enabled?: boolean;
  fallbackStrategy?: ArticleRecommendationsFallbackStrategy;
  limit?: number;
  minimumManualItems?: number;
  mixManualAndAutomatic?: boolean;
  title?: string;
}

export interface AdvertisingLabelsItem {
  advertisement?: string;
  sponsoredContent?: string;
}

export type HomepageSectionKey =
  "lead" | "latest" | "discussed" | "categories" | "popular" | "latestIssue";

export interface HomepageLayoutSettingsItem {
  categorySectionArticleLimit?: number;
  discussedLabel?: string;
  discussedLimit?: number;
  latestIssueLabel?: string;
  latestLabel?: string;
  latestLimit?: number;
  leadLabel?: string;
  popularLabel?: string;
  popularLimit?: number;
  sectionOrder?: HomepageSectionKey[];
  showCategorySections?: boolean;
  showDiscussedSection?: boolean;
  showLatestIssue?: boolean;
  showPopularSection?: boolean;
}

export type PublicationThemePreset =
  "classic" | "modern" | "civic" | "magazine";
export type PublicationCardStyle =
  "flat" | "bordered" | "elevated" | "editorial";
export type PublicationHeaderStyle = "masthead" | "compact" | "centeredLogo";
export type PublicationSectionHeaderStyle =
  "underline" | "filled" | "accentBar";
export type PublicationDensity = "compact" | "comfortable";
export type PublicationHeadlineStyle = "serif" | "sans" | "condensed";

export interface PublicationVisualStyleItem {
  cardStyle: PublicationCardStyle;
  cornerRadius: number;
  density: PublicationDensity;
  headerStyle: PublicationHeaderStyle;
  headlineStyle: PublicationHeadlineStyle;
  sectionHeaderStyle: PublicationSectionHeaderStyle;
  themePreset: PublicationThemePreset;
}

export const publicationVisualStylePresets: Record<
  PublicationThemePreset,
  PublicationVisualStyleItem
> = {
  classic: {
    cardStyle: "elevated",
    cornerRadius: 8,
    density: "comfortable",
    headerStyle: "masthead",
    headlineStyle: "serif",
    sectionHeaderStyle: "underline",
    themePreset: "classic",
  },
  modern: {
    cardStyle: "bordered",
    cornerRadius: 6,
    density: "comfortable",
    headerStyle: "compact",
    headlineStyle: "sans",
    sectionHeaderStyle: "accentBar",
    themePreset: "modern",
  },
  civic: {
    cardStyle: "flat",
    cornerRadius: 4,
    density: "compact",
    headerStyle: "masthead",
    headlineStyle: "sans",
    sectionHeaderStyle: "filled",
    themePreset: "civic",
  },
  magazine: {
    cardStyle: "editorial",
    cornerRadius: 10,
    density: "comfortable",
    headerStyle: "centeredLogo",
    headlineStyle: "serif",
    sectionHeaderStyle: "underline",
    themePreset: "magazine",
  },
};

export interface PublicationSettingsItem {
  advertisingLabels: AdvertisingLabelsItem;
  articleRecommendations: ArticleRecommendationsSettingsItem;
  brandColors?: BrandColorItem;
  commentsPolicy: CommentsPolicyItem;
  footerColumns: PublicationFooterColumnItem[];
  footerDescription: GeneralConfigItem["footerDescription"];
  footerLogo: PhotoItem;
  homepageLayout: HomepageLayoutSettingsItem;
  latestIssue: LatestIssueTextItem;
  mainLogo: PhotoItem;
  mobileLogo: PhotoItem;
  name: string;
  reactionsPolicy: ReactionsPolicyItem;
  recentComments: RecentCommentsSettingsItem;
  seoDescription: string;
  seoImage: PhotoItem;
  shortName?: string;
  tagline?: string;
  titlePattern?: string;
  visualStyle: PublicationVisualStyleItem;
}
