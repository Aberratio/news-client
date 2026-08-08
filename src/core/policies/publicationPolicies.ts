import { ArticleItem } from "types/ArticleItem";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";
import { PublicationSettingsItem } from "types/PublicationSettingsItem";

type PostPolicyFlags = Pick<
  ArticleItem | ArticleSummaryItem,
  "commentsDisabled" | "reactionsDisabled"
>;

export const isCommentsPolicyEnabled = (
  publicationSettings?: Pick<PublicationSettingsItem, "commentsPolicy">
) => publicationSettings?.commentsPolicy?.enabled !== false;

export const isReactionsPolicyEnabled = (
  publicationSettings?: Pick<PublicationSettingsItem, "reactionsPolicy">
) => publicationSettings?.reactionsPolicy?.enabled !== false;

export const canCommentOnPost = (
  post?: Partial<PostPolicyFlags>,
  publicationSettings?: Pick<PublicationSettingsItem, "commentsPolicy">
) => isCommentsPolicyEnabled(publicationSettings) && post?.commentsDisabled !== true;

export const canReactToPost = (
  post?: Partial<PostPolicyFlags>,
  publicationSettings?: Pick<PublicationSettingsItem, "reactionsPolicy">
) => isReactionsPolicyEnabled(publicationSettings) && post?.reactionsDisabled !== true;
