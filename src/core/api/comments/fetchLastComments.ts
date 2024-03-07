import { CommentSummaryItem } from "types/CommentSummaryItem";

import {
  mapToCommentSummaryItem,
  SanityCommentItem,
} from "../sanity-types/SanityCommentItem";
import { sanityClient } from "../sanityClient";

export const fetchLastComments = async (): Promise<CommentSummaryItem[]> => {
  const comments: SanityCommentItem[] = await sanityClient.fetch(
    '*[_type == "comment" && !(_id in path("drafts.**")) ]{author, _createdAt, likes, dislikes, _id, text, post->} | order(_createdAt desc) [0..5]'
  );

  return mapToCommentSummaryItem(comments);
};
