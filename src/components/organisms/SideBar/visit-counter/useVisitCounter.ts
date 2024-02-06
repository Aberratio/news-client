"use client";

import { useAdminApi } from "core/api/useAdminApi";
import { useState } from "react";

export const useVisitCounter = () => {
  const { getVisitsDetails, incrementViews, incrementVisits } = useAdminApi();
  const [visits, setVisits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadVisits = () => {
    void getVisitsDetails()
      .then((data) => {
        setVisits(data);
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
        .then((data) => {
          setVisits(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    void incrementViews(url);
  };

  return {
    isLoading,
    visits,
    incrementVisitsCounter,
    loadVisits,
  };
};
