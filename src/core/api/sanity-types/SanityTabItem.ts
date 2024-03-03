import { TabItem } from "types/TabItem";

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

export const mapToTabItem = (data: SanityTabItem[]): TabItem[] => {
  return data.map((tab) => {
    return {
      tabSlug: tab.slug.current,
      categories: tab.categories.map((category) => {
        return {
          id: category.slug.current,
          name: category.name,
          path: `/category/${category.name}`,
          tabSlug: tab.slug.current,
          tabName: tab.name,
          tabPath: `/tab/${tab.name}`,
        };
      }),
      name: tab.name,
    };
  });
};
