import { GetArticlesLastResponse } from "common/api/responses/GetArticlesLastResponse";
import { useBasicApi } from "common/api/useBasicApi";

export const useArticlesApi = () => {
  const { getArticlesLast } = useBasicApi();

  const getLastArticlesDetails = async (
    categoryId?: number,
  ): Promise<GetArticlesLastResponse[]> => {
    return await getArticlesLast({
      category: categoryId,
      limit: 10,
      page: 0,
    });
  };

  return {
    getLastArticlesDetails,
  };
};
