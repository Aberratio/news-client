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

export interface PublicationSettingsItem {
  brandColors?: BrandColorItem;
  commentsPolicy: CommentsPolicyItem;
  footerDescription: GeneralConfigItem["footerDescription"];
  footerLogo: PhotoItem;
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
