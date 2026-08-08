import { CommentSummaryItem } from "types/CommentSummaryItem";

import {
  mapToCommentSummaryItem,
  SanityCommentItem,
} from "../sanity-types/SanityCommentItem";
import { sanityClient } from "../sanityClient";

const FALLBACK_LAST_COMMENTS_LIMIT = 6;

export const fetchLastComments = async (
  limit = FALLBACK_LAST_COMMENTS_LIMIT,
): Promise<CommentSummaryItem[]> => {
  const normalizedLimit = Number.isFinite(limit)
    ? limit
    : FALLBACK_LAST_COMMENTS_LIMIT;
  const safeLimit = Math.max(1, Math.min(Math.floor(normalizedLimit), 12));
  const comments: SanityCommentItem[] = await sanityClient.fetch(
    '*[_type == "comment" && !(_id in path("drafts.**")) && post->commentsDisabled != true ]{author, _createdAt, likes, dislikes, _id, text, post->} | order(_createdAt desc) [0...$limit]',
    { limit: safeLimit },
    {
      next: {
        revalidate: 60,
        tags: ["comments", "comment-reactions"],
      },
    },
  );

  return mapToCommentSummaryItem(comments);
};
