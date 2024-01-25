import { useBasicApi } from "common/api/useBasicApi";
import { GetTabsResponse } from "./responses/GetTabsResponse";

export const useCategoriesApi = () => {
  const { getTabs } = useBasicApi();

  const getTabsDetails = async (): Promise<GetTabsResponse[]> => {
    return await getTabs();
  };

  return {
    getTabsDetails,
  };
};
