import { TabItem } from "types/TabItem";

import { mapToPhotoItem, SanityPhotoItem } from "./SanityPhotoItem";

export interface SanityTabItem {
  name: string;
  categories: {
    name: string;
    slug: {
      current: string;
    };
    color?: {
      hex: string;
    };
    description?: string;
    image?: SanityPhotoItem;
  }[];
  description?: string;
  slug: {
    current: string;
  };
  image?: SanityPhotoItem;
  action?: {
    title: string;
    description: string;
    link: string;
    cta: string;
  };
}

export const mapToTabItem = (data: SanityTabItem[]): TabItem[] => {
  console.log(data);

  return data.map((tab) => {
    return {
      tabSlug: tab.slug.current,
      categories: tab.categories.map((category) => {
        return {
          slug: category.slug.current,
          name: category.name,
          path: `/category/${category.name}`,
          tabSlug: tab.slug.current,
          tabName: tab.name,
          tabPath: `/tab/${tab.name}`,
          description: category.description,
          color: category.color?.hex ?? "#2e6896",
          image: category.image ? mapToPhotoItem(category.image) : undefined,
        };
      }),
      name: tab.name,
      description: tab.description,
      image: tab.image ? mapToPhotoItem(tab.image) : undefined,
      tabAction: tab.action
        ? {
            title: tab.action.title,
            description: tab.action.description,
            ctaText: tab.action.cta,
            ctaLink: tab.action.link,
          }
        : undefined,
    };
  });
};
