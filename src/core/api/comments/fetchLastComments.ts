import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import { SanityCommentItem } from "../articles/fetchArticleComments";
import { sanityClient } from "../sanityClient";

export const fetchLastComments = async () => {
  const comments: SanityCommentItem[] = await sanityClient.fetch(
    '*[_type == "comment"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc) [0..5]'
  );

  return mapData(comments);
};

const cutComment = (comment: string) => {
  return comment?.length > 100 ? comment?.substring(0, 100) + "..." : comment;
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
