import { useBasicApi } from "common/api/useBasicApi";
import { GetCommentsLastResponse } from "./responses/GetCommentsLastResponse";

export const useCommentsApi = () => {
  const { getCommentsLast } = useBasicApi();

  const getCommentsLastDetails = async (
    limit: number,
  ): Promise<GetCommentsLastResponse[]> => {
    return await getCommentsLast({
      limit,
    });
  };

  return {
    getCommentsLastDetails,
  };
};
