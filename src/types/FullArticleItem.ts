import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { CommentItem } from "./CommentItem";
import { PhotoItem } from "./PhotoItem";
import { StatisticsItem } from "./StatisticsItem";

export interface FullArticleItem {
  author: AuthorItem;
  body: string;
  category: CategoryItem;
  comments?: CommentItem[];
  createdOn: string;
  id: number;
  isArchived: boolean;
  isPublished: boolean;
  lead: string;
  path: string;
  photos: PhotoItem[];
  statistics: StatisticsItem;
  title: string;
}
