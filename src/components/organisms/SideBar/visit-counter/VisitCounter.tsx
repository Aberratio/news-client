"use client";

import { useEffect,useState } from "react";
import { fetchVisits } from "core/api/fetchVisits";

import Box from "components/atoms/Box";
import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";

interface VisitCounterProps {
  isNewVisit: boolean;
}

export const VisitCounter = ({ isNewVisit = false }: VisitCounterProps) => {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitsFromSanity = async () => {
      try {
        const response = await fetchVisits(isNewVisit);
        setVisits(response);
      } catch (error) {
        console.error("Error fetching visits", error);
      }
    };

    fetchVisitsFromSanity();
  }, [isNewVisit]);

  return (
    <Widget dataTestId="visit-counter" title="Licznik odwiedzin">
      <Box margin="12px auto">
        <Typography>
          {visits !== null ? `${visits} odwiedzin` : "Ładowanie..."}
        </Typography>
      </Box>
    </Widget>
  );
};
