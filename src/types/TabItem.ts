import { CategoryItem } from "./CategoryItem";

export interface TabItem {
  tabId: number;
  categories: CategoryItem[];
  name: string;
}
