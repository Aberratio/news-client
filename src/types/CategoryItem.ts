import { PhotoItem } from "./PhotoItem";

export interface CategoryItem {
  slug: string;
  name: string;
  path: string;
  tabSlug: string;
  tabName: string;
  tabPath: string;
  color: string;
  description?: string;
  image?: PhotoItem;
}
