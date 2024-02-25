import { CategoryItem } from "./CategoryItem";

export interface TabItem {
  tabSlug: string;
  categories: CategoryItem[];
  name: string;
}
