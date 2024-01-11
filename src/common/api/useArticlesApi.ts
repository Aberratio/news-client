import { GetArticlesLastResponse } from "common/api/responses/GetArticlesLastResponse";
import { useBasicApi } from "common/api/useBasicApi";

export const useArticlesApi = () => {
  const { getArticlesLast } = useBasicApi();

  const getLastArticlesDetails = async (
    category: number,
  ): Promise<GetArticlesLastResponse[]> => {
    return await getArticlesLast({
      category,
      limit: 10,
      page: 0,
    });
  };

  return {
    getLastArticlesDetails,
  };
};
