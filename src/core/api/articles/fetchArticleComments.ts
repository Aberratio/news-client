"use server";

import { CommentSummaryItem } from "types/CommentSummaryItem";

import { SanityCommentItem } from "../sanity-types/SanityCommentItem";
import { sanityClient } from "../sanityClient";

export const fetchArticleComments = async (_id: string) => {
  if (_id !== undefined) {
    const responseComments: SanityCommentItem[] = await sanityClient.fetch(
      `*[_type == "comment" && post._ref == "${_id}"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc)`
    );

    return mapData(responseComments);
  }
};

const mapData = (data: SanityCommentItem[]): CommentSummaryItem[] => {
  return data
    .map((item: SanityCommentItem) => {
      if (!item.text) return;
      return {
        articleSlug: item.post.slug.current,
        articleTitle: item.post.title,
        author: item.author,
        date: new Date(item._createdAt).toLocaleString(),
        dislikes: item.likes,
        id: item._id,
        likes: item.likes,
        text: item.text,
      } as CommentSummaryItem;
    })
    .filter((x) => x) as CommentSummaryItem[];
};
