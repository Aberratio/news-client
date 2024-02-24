export interface GetTabsResponse {
  tabId: number;
  categories: Category[];
  name: string;
}

interface Category {
  id: number | string;
  name: string;
}
