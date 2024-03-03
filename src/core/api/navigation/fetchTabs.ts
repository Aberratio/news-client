import { sanityClient } from "core/api/sanityClient";
import { SanityTabItem } from "../sanity-types/SanityTabItem";

interface TabItem {
  tabSlug: string;
  categories: {
    id: string;
    name: string;
    path: string;
    tabSlug: string;
    tabName: string;
    tabPath: string;
  }[];
  name: string;
}

export const fetchTabs = async (): Promise<TabItem[]> => {
  const tabs = await sanityClient.fetch(
    '*[_type == "tab"]{name, slug, "categories": *[_type=="category" && references(^._id)]{ name, slug }} | order(order asc)'
  );

  return mapData(tabs);
};

const mapData = (data: SanityTabItem[]): TabItem[] => {
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
