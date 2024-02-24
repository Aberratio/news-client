import { CategoryItem } from "./CategoryItem";

export interface TabItem {
  tabId: string;
  categories: CategoryItem[];
  name: string;
}
