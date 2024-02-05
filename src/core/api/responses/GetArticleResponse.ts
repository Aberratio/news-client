export interface GetArticleResponse {
  author: Author;
  body: string;
  category: Category;
  commentsAmount: number;
  createdOn: Date;
  id: number;
  isArchived: boolean;
  isPublished: boolean;
  lead: string;
  photos: Photo[];
  title: string;
  views: number;
  likes: number;
  dislikes: number;
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
