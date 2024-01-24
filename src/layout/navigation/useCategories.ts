import { useState } from "react";
import { useCategoriesApi } from "common/api/useCategoriesApi";
import { GetTabsResponse } from "common/api/responses/GetArticleResponse copy";
import { CategoryItem } from "articles/items/CategoryItem";

export const useCategories = () => {
  const { getTabsDetails } = useCategoriesApi();
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTabs = () => {
    getTabsDetails().then((data) => {
      setTabs(mapData(data));
      setCategories(
        data.flatMap((tab) => {
          return tab.categories.map((category) => {
            return {
              id: category.id,
              name: category.name,
            };
          });
        }),
      );
      setIsLoading(false);
    });
  };

  return {
    categories,
    isLoading,
    tabs,
    loadTabs,
  };
};

export interface TabItem {
  id: number;
  categories: CategoryItem[];
  name: string;
}

const mapData = (data: GetTabsResponse[]): TabItem[] => {
  return data.map((tab) => {
    return {
      id: tab.tabId,
      name: tab.name,
      categories: tab.categories.map((category) => {
        return {
          id: category.id,
          name: category.name,
        };
      }),
    };
  });
};
