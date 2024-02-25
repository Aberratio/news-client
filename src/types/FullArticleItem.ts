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
  id: string;
  lead: string;
  path: string;
  photos: PhotoItem[];
  title: string;
}
