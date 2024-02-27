import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { PhotoItem } from "./PhotoItem";
import { StatisticsItem } from "./StatisticsItem";

export interface ArticleSummarizationItem {
  author: AuthorItem;
  category: CategoryItem;
  createdOn: string;
  comments: number;
  id: string;
  lead: string;
  likes: number;
  dislikes: number;
  views: number;
  path: string;
  photo: PhotoItem;
  statistics: StatisticsItem;
  title: string;
}
