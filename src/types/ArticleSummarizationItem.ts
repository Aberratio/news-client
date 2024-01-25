import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { PhotoItem } from "./PhotoItem";
import { StatisticsItem } from "./StatisticsItem";

export interface ArticleSummarizationItem {
  author: AuthorItem;
  category: CategoryItem;
  createdOn: string;
  id: number;
  path: string;
  photo: PhotoItem;
  statistics: StatisticsItem;
  title: string;
}
