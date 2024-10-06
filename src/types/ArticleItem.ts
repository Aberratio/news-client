import { ArticleSummaryItem } from "./ArticleSummaryItem";
import { AuthorItem } from "./AuthorItem";
import { CategoryItem } from "./CategoryItem";
import { PhotoItem } from "./PhotoItem";

export interface ArticleItem {
  _id: string;
  _rev: string;
  author: AuthorItem;
  body: string;
  category: CategoryItem;
  createdOn: string;
  slug: string;
  lead: string;
  likes: number;
  dislikes: number;
  views: number;
  path: string;
  photos: PhotoItem[];
  recommendations: ArticleSummaryItem[];
  title: string;
  comments: number;
}
