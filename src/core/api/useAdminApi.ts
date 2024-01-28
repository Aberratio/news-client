import { useBasicApi } from "core/api/useBasicApi";

export const useAdminApi = () => {
  const { getVisits, postVisits, postViews } = useBasicApi();

  const getVisitsDetails = async (): Promise<number> => {
    return await getVisits();
  };

  const incrementVisits = async (url: string): Promise<number> => {
    return await postVisits({ url });
  };

  const incrementViews = async (url: string): Promise<number> => {
    return await postViews({ url });
  };

  return {
    getVisitsDetails,
    incrementViews,
    incrementVisits,
  };
};
