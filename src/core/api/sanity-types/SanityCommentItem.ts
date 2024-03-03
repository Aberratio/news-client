import { cutText } from "core/tools/cutText";
import { CommentSummaryItem } from "types/CommentSummaryItem";

export interface SanityCommentItem {
  author: string;
  _createdAt: string;
  likes: number;
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
      date: new Date(item._createdAt).toLocaleString(),
      dislikes: item.likes,
      id: item._id,
      likes: item.likes,
      text: cutText(item.text, 100),
    } as CommentSummaryItem;
  });
};
