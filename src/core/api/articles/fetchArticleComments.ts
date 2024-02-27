"use server";

import { SanityCommentItem } from "app/api/comments/route";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import { sanityClient } from "../sanityClient";

export const fetchArticleComments = async (
  _id: string
): Promise<CommentSummarizationItem[]> => {
  try {
    const responseComments: SanityCommentItem[] = await sanityClient.fetch(
      `*[_type == "comment" && post._ref == "${_id}"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc)`
    );

    const mappedComments = mapData(responseComments);
    return mappedComments;
  } catch (error) {
    console.error("Error loading comments for article:", error);
    return [];
  }
};

const cutComment = (comment: string) => {
  return comment.length > 100 ? comment.substring(0, 100) + "..." : comment;
};

const mapData = (data: SanityCommentItem[]): CommentSummarizationItem[] => {
  return data.map((item: SanityCommentItem) => {
    return {
      articleSlug: item.post.slug.current,
      articleTitle: item.post.title,
      author: item.author,
      date: new Date(item._createdAt).toLocaleString(),
      dislikes: item.likes,
      id: item._id,
      likes: item.likes,
      text: cutComment(item.text),
    } as CommentSummarizationItem;
  });
};
