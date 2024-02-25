import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { CommentItem } from "./CommentItem";
import { PhotoItem } from "./PhotoItem";
import { StatisticsItem } from "./StatisticsItem";

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
  statistics?: StatisticsItem;
  title: string;
}
