import { AuthorItem } from "./AuthorItem";

export interface PhotoItem {
  author?: AuthorItem;
  description: string;
  id?: number;
  isMain?: boolean;
  path: string;
}
