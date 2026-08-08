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

export type ArticleRecommendationsFallbackStrategy =
  | "categoryTabRecent"
  | "categoryTabPopular"
  | "categoryTabCommented";

export interface ArticleRecommendationsSettingsItem {
  enabled?: boolean;
  fallbackStrategy?: ArticleRecommendationsFallbackStrategy;
  limit?: number;
  minimumManualItems?: number;
  mixManualAndAutomatic?: boolean;
  title?: string;
}

export interface PublicationSettingsItem {
  articleRecommendations: ArticleRecommendationsSettingsItem;
  brandColors?: BrandColorItem;
  commentsPolicy: CommentsPolicyItem;
  footerColumns: PublicationFooterColumnItem[];
  footerDescription: GeneralConfigItem["footerDescription"];
  footerLogo: PhotoItem;
  latestIssue: LatestIssueTextItem;
  mainLogo: PhotoItem;
  mobileLogo: PhotoItem;
  name: string;
  reactionsPolicy: ReactionsPolicyItem;
  seoDescription: string;
  seoImage: PhotoItem;
  shortName?: string;
  tagline?: string;
  titlePattern?: string;
}
