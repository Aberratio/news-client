import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { CommentItem } from "./CommentItem";
import { PhotoItem } from "./PhotoItem";

export interface FullArticleItem {
  author: AuthorItem;
  body: any;
  category: CategoryItem;
  comments?: CommentItem[];
  createdOn: string;
  slug: string;
  _id: string;
  _rev: string;
  lead: string;
  likes: number;
  dislikes: number;
  views: number;
  path: string;
  photos: PhotoItem[];
  title: string;
}
