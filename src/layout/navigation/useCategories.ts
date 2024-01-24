import { useState } from "react";
import { useCategoriesApi } from "common/api/useCategoriesApi";
import { GetTabsResponse } from "common/api/responses/GetArticleResponse copy";

export const useCategories = () => {
  const { getTabsDetails } = useCategoriesApi();
  const [tabs, setArticle] = useState<TabItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTabs = () => {
    getTabsDetails().then((data) => {
      setArticle(mapData(data));
      setIsLoading(false);
    });
  };

  return {
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

export interface CategoryItem {
  id: number;
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
