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

export interface PublicationSettingsItem {
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
