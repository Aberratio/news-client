export interface SanityTabItem {
  name: string;
  categories: {
    name: string;
    slug: {
      current: string;
    };
  }[];
  slug: {
    current: string;
  };
}
