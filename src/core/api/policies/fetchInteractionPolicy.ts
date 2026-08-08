import {
  resolvePublicationSettings,
  SanityPublicationSettingsItem,
} from "core/api/sanity-types/SanityOrganizationItem";
import { sanityClient } from "core/api/sanityClient";
import { canCommentOnPost, canReactToPost } from "core/policies/publicationPolicies";

interface SanityPostInteractionPolicy {
  commentsDisabled?: boolean;
  reactionsDisabled?: boolean;
}

export const fetchPublicationInteractionSettings = async () => {
  const data = await sanityClient.fetch<{
    publicationSettings?: SanityPublicationSettingsItem;
  }>(
    `{
      'publicationSettings': *[(_type == "publicationSettings" && !(_id in path("drafts.**")))][0]
    }`,
  );

  return resolvePublicationSettings(data.publicationSettings);
};

export const assertCanCommentOnPost = async (postId: string) => {
  const data = await sanityClient.fetch<{
    post?: SanityPostInteractionPolicy;
    publicationSettings?: SanityPublicationSettingsItem;
  }>(
    `{
      'post': *[_type == "post" && _id == $postId && !(_id in path("drafts.**"))][0]{
        commentsDisabled
      },
      'publicationSettings': *[(_type == "publicationSettings" && !(_id in path("drafts.**")))][0]
    }`,
    { postId },
  );

  const settings = resolvePublicationSettings(data.publicationSettings);

  if (!data.post || !canCommentOnPost(data.post, settings)) {
    throw new Error("Comments are disabled for this post");
  }
};

export const assertCanReactToPost = async (postId: string) => {
  const data = await sanityClient.fetch<{
    post?: SanityPostInteractionPolicy;
    publicationSettings?: SanityPublicationSettingsItem;
  }>(
    `{
      'post': *[_type == "post" && _id == $postId && !(_id in path("drafts.**"))][0]{
        reactionsDisabled
      },
      'publicationSettings': *[(_type == "publicationSettings" && !(_id in path("drafts.**")))][0]
    }`,
    { postId },
  );

  const settings = resolvePublicationSettings(data.publicationSettings);

  if (!data.post || !canReactToPost(data.post, settings)) {
    throw new Error("Reactions are disabled for this post");
  }
};

export const assertCanReactToComment = async (commentId: string) => {
  const data = await sanityClient.fetch<{
    comment?: {
      post?: SanityPostInteractionPolicy;
    };
    publicationSettings?: SanityPublicationSettingsItem;
  }>(
    `{
      'comment': *[_type == "comment" && _id == $commentId && !(_id in path("drafts.**"))][0]{
        post->{ reactionsDisabled }
      },
      'publicationSettings': *[(_type == "publicationSettings" && !(_id in path("drafts.**")))][0]
    }`,
    { commentId },
  );

  const settings = resolvePublicationSettings(data.publicationSettings);

  if (!data.comment?.post || !canReactToPost(data.comment.post, settings)) {
    throw new Error("Reactions are disabled for this comment");
  }
};

export const arePublicationCommentsEnabled = async () => {
  const settings = await fetchPublicationInteractionSettings();

  return settings.commentsPolicy.enabled !== false;
};
