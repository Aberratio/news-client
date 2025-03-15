export interface AuthorItem {
  id: string;
  name: string;
  path: string;
  photo?: {
    alt: string;
    description?: string;
    path: string;
  };
}
