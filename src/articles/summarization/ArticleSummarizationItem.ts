export interface ArticleSummarizationItem {
  author: Author;
  category: Category;
  createdOn: Date;
  id: number;
  photo: {
    description: string;
    path: string;
  };
  statistics?: StatisticsItem;
  title: string;
  views: number;
}

export interface Author {
  id: number;
  name: string;
}

export interface StatisticsItem {
  comments: number;
  dislikes: number;
  likes: number;
  views: number;
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
