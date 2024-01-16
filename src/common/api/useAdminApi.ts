import { useBasicApi } from "common/api/useBasicApi";

export const useAdminApi = () => {
  const { getVisits } = useBasicApi();

  const getVisitsDetails = async (): Promise<number> => {
    return await getVisits();
  };

  return {
    getVisitsDetails,
  };
};
