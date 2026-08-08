import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { PhotoItem } from "./PhotoItem";
import { StatisticsItem } from "./StatisticsItem";

export interface ArticleSummaryItem {
  author: AuthorItem;
  category: CategoryItem;
  createdOn: string;
  comments: number;
  commentsDisabled: boolean;
  id: string;
  lead: string;
  likes: number;
  dislikes: number;
  views: number;
  path: string;
  photo: PhotoItem;
  statistics: StatisticsItem;
  reactionsDisabled: boolean;
  title: string;
}
