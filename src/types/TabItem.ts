import { CategoryItem } from "./CategoryItem";
import { PhotoItem } from "./PhotoItem";

export interface TabItem {
  tabSlug: string;
  categories: CategoryItem[];
  name: string;
  description?: string;
  image?: PhotoItem;
  tabAction?: TabActionItem;
}

export interface TabActionItem {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}
