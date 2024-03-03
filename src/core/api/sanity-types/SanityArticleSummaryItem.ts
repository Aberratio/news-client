export interface SanityArticleSummaryItem {
  author: {
    name: string;
    slug: {
      current: string;
    };
  };
  body: any;
  category: {
    name: string;
    slug: {
      current: string;
    };
    tab: {
      name: string;
      slug: {
        current: string;
      };
    };
  };
  lead: string;
  likes: number;
  dislikes: number;
  comments: number;
  views: number;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
    description: string;
  };
  publishedAt: Date;
  slug: {
    current: string;
  };
  title: string;
}
