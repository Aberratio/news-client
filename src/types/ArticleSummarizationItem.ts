import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { PhotoItem } from "./PhotoItem";
import { StatisticsItem } from "./StatisticsItem";

export interface ArticleSummarizationItem {
  author: AuthorItem;
  category: CategoryItem;
  createdOn: string;
  id: string;
  lead: string;
  path: string;
  photo: PhotoItem;
  statistics: StatisticsItem;
  title: string;
}
