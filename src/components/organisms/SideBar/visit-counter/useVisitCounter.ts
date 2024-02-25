"use client";

import { useAdminApi } from "core/api/useAdminApi";
import { useState } from "react";

export const useVisitCounter = () => {
  const { getVisitsDetails, incrementVisits } = useAdminApi();
  const [visits, setVisits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadVisits = () => {
    void getVisitsDetails()
      .then((data: any) => {
        setVisits(data[0].visits);
        sessionStorage.setItem("visits", data.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const incrementVisitsCounter = (url: string) => {
    if (sessionStorage.getItem("visits") === null) {
      setIsLoading(true);
      void incrementVisits(url)
        .then(() => {
          setVisits((prev) => prev + 1);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return {
    isLoading,
    visits,
    incrementVisitsCounter,
    loadVisits,
  };
};
