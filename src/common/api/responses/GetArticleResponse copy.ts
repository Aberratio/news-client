export interface GetTabsResponse {
  tabId: number;
  categories: Category[];
  name: string;
}

interface Category {
  id: number;
  name: string;
}
