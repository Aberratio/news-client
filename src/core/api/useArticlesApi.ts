import { useBasicApi } from "core/api/useBasicApi";
import { GetPopularTitlesResponse } from "./responses/GetPopularTitlesResponse";

export const useArticlesApi = () => {
  const { getPopularTitles } = useBasicApi();

  const getPopularTitlesDetails = async (
    amount: number,
    from: number
  ): Promise<GetPopularTitlesResponse[]> => {
    return await getPopularTitles({
      amount,
      from,
    });
  };

  return {
    getPopularTitlesDetails,
  };
};
