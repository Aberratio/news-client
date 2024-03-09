import { formatDateTimeToString } from "core/formaters/formatDateTimeToString";
import { cutText } from "core/tools/cutText";
import { CommentItem } from "types/CommentItem";
import { CommentSummaryItem } from "types/CommentSummaryItem";

export interface SanityCommentItem {
  author: string;
  _createdAt: Date;
  likes: number;
  dislikes: number;
  _id: string;
  text: string;
  post: any;
}

export const mapToCommentSummaryItem = (
  data: SanityCommentItem[]
): CommentSummaryItem[] => {
  return data.map((item: SanityCommentItem) => {
    return {
      articleSlug: item.post.slug.current,
      articleTitle: item.post.title,
      author: item.author,
      date: formatDateTimeToString(item._createdAt),
      dislikes: item.dislikes,
      id: item._id,
      likes: item.likes,
      text: cutText(item.text, 100),
    } as CommentSummaryItem;
  });
};

export const mapToCommentItem = (data: SanityCommentItem[]): CommentItem[] => {
  return data.map((item: SanityCommentItem) => {
    return {
      articleSlug: item.post.slug.current,
      articleTitle: item.post.title,
      author: item.author,
      date: formatDateTimeToString(item._createdAt),
      dislikes: item.dislikes,
      id: item._id,
      likes: item.likes,
      text: item.text,
    } as CommentSummaryItem;
  });
};
