export interface ArticleSummarizationItem {
  author: Author;
  category: Category;
  createdOn: Date;
  id: number;
  photo: {
    description: string;
    path: string;
  };
  title: string;
  views: number;
}

export interface Comment {
  comment: string;
  commentedOn: Date;
  id: number;
  isVisible: boolean;
  user?: any;
}

export interface Photo {
  author: Author;
  description: string;
  id: number;
  isMain: boolean;
  path: string;
}

export interface Author {
  id: number;
  name: string;
}

enum Category {
  Other,
  News,
  Mixed,
  Culture,
  Figures,
  Sport,
  Local,
}
