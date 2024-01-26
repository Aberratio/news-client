import { useAdminApi } from "core/api/useAdminApi";
import { useState } from "react";

export const useVisitCounter = () => {
  const { getVisitsDetails } = useAdminApi();
  const [visits, setVisits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadVisits = () => {
    void getVisitsDetails().then((data) => {
      setVisits(data);
      setIsLoading(false);
    });
  };

  return {
    isLoading,
    visits,
    loadVisits,
  };
};
