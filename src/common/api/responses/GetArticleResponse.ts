export interface GetArticleResponse {
  author: Author;
  body: string;
  category: Category;
  comments?: Comment[];
  createdOn: Date;
  id: number;
  isArchived: boolean;
  isPublished: boolean;
  lead: string;
  photos: Photo[];
  title: string;
  views: number;
}

interface Comment {
  comment: string;
  commentedOn: Date;
  id: number;
  isVisible: boolean;
  user?: any;
}

interface Photo {
  author: Author;
  description: string;
  id: number;
  isMain: boolean;
  path: string;
}

interface Author {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  tabId: number;
  tabName: string;
}
