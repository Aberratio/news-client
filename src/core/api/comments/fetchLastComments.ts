import { sanityClient } from "../sanityClient";
import {
  SanityCommentItem,
  mapToCommentSummarizationItem,
} from "../sanity-types/SanityCommentItem";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";

export const fetchLastComments = async (): Promise<
  CommentSummarizationItem[]
> => {
  const comments: SanityCommentItem[] = await sanityClient.fetch(
    '*[_type == "comment"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc) [0..5]'
  );

  return mapToCommentSummarizationItem(comments);
};
