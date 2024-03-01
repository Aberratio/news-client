"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import { sanityClient } from "../sanityClient";

export interface SanityCommentItem {
  author: string;
  _createdAt: string;
  likes: number;
  _id: string;
  text: string;
  post: any;
}

export const fetchArticleComments = async (_id: string) => {
  if (_id !== undefined) {
    const responseComments: SanityCommentItem[] = await sanityClient.fetch(
      `*[_type == "comment" && post._ref == "${_id}"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc)`
    );

    return mapData(responseComments);
  }
};

const mapData = (data: SanityCommentItem[]): CommentSummarizationItem[] => {
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
      } as CommentSummarizationItem;
    })
    .filter((x) => x) as CommentSummarizationItem[];
};
