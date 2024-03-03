import { AuthorItem } from "./AuthorItem";

export interface PhotoItem {
  author?: AuthorItem;
  alt: string;
  description: string;
  id?: number;
  isMain?: boolean;
  path: string;
}
